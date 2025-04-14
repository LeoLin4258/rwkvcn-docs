'use client';

import type { SharedProps } from 'fumadocs-ui/components/dialog/search';
import SearchDialog from 'fumadocs-ui/components/dialog/search-algolia';
import { useState, useEffect, useRef } from 'react';

// Create a more straightforward debounced search client
let debounceTimeout: NodeJS.Timeout | null = null;
let lastQuery = '';
let lastResult: any = { hits: [] };
let pendingPromiseResolve: ((value: any) => void) | null = null;

// Create a custom index-like object that implements the necessary Algolia interface
const customIndex = {
  // Required properties for Algolia's SearchIndex interface
  appId: 'custom-app',
  indexName: 'document',

  // Mock transporter to satisfy the interface
  transporter: {
    read: async (requests: any[]) => {
      // Need to implement this for algolia interface
      if (requests && requests.length > 0) {
        // Extract the query from the request
        const request = requests[0];
        const query = request.params?.query || '';
        const options = {
          filters: request.params?.filters || '',
          hitsPerPage: request.params?.hitsPerPage || 10,
          distinct: request.params?.distinct || 5,
        };

        try {
          // Call our actual search implementation
          const result = await customIndex.search(query, options);
          return { results: [result] };
        } catch (error) {
          console.error('Search error in transporter:', error);
          return { results: [{ hits: [] }] };
        }
      }
      return { results: [{ hits: [] }] };
    },
    write: async () => Promise.resolve({}),
    socket: {}
  },

  // The actual search implementation with debouncing
  search: async (query: string, options: any = {}) => {
    // console.log('Search called with query:', query, 'options:', options);

    // Return empty results for empty queries
    if (!query || !query.trim()) {
      // console.log('Empty query, returning empty results');
      return { hits: [] };
    }

    // If this is the same query as the last one, return cached results
    const queryKey = `${query}-${options.filters || ''}`;
    if (queryKey === lastQuery && lastResult.hits?.length > 0) {
      // console.log('Using cached results for query:', query);
      return lastResult;
    }

    // Fix duplicate tag prefix in filter
    let filters = options.filters || '';
    if (filters.startsWith('tag:tag:')) {
      filters = filters.replace('tag:tag:', 'tag:');
    }

    // Create a promise that will be resolved after debounce
    return new Promise<any>((resolve) => {
      // If there's a pending timeout, clear it
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }

      // Store the query
      lastQuery = queryKey;

      // Set a new timeout - apply debounce here
      debounceTimeout = setTimeout(async () => {
        try {
          // console.log('Making API request for query:', query);
          const response = await fetch('/api/algosearch', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query,
              hitsPerPage: options.hitsPerPage || 10,
              filters,
              distinct: options.distinct || 5,
            }),
          });

          if (!response.ok) {
            throw new Error('Search request failed');
          }

          // Cache the result
          lastResult = await response.json();
          // console.log('Search results:', lastResult);

          // Resolve the promise with the result
          resolve(lastResult);
        } catch (error) {
          console.error('Search error:', error);
          // Resolve with empty results on error
          const errorResult = { hits: [] };
          lastResult = errorResult;
          resolve(errorResult);
        } finally {
          debounceTimeout = null;
        }
      }, 400); // Set debounce time to 400ms as requested
    });
  },

  // Implement this method required by Algolia interface
  searchForFacetValues: async () => {
    return { facetHits: [] };
  }
};

// Extend SharedProps to include additional props used in the title component
interface CustomSearchProps extends SharedProps {
  search?: string;
  onSearchChange?: (value: string) => void;
  onItemClick?: (url: string) => void;
}

export default function CustomSearchDialog(props: CustomSearchProps) {
  const [currentSearch, setCurrentSearch] = useState(props.search || '');
  const isFirstMount = useRef(true);

  // When props.search changes, update internal state
  useEffect(() => {
    if (props.search !== undefined) {
      setCurrentSearch(props.search);
    }
  }, [props.search]);

  // Add Algolia attribution when component mounts
  useEffect(() => {
    // Add Algolia attribution to the search dialog
    const addAttribution = () => {
      // Look for the tags container
      const tagsContainer = document.querySelector('[role="tablist"]');
      if (tagsContainer && !document.getElementById('algolia-attribution')) {
        // Create the attribution element
        const attribution = document.createElement('div');
        attribution.id = 'algolia-attribution';
        attribution.style.display = 'flex';
        attribution.style.alignItems = 'center';
        attribution.style.marginLeft = 'auto';
        attribution.style.fontSize = '0.75rem';
        attribution.style.color = 'var(--gray-500, #9ca3af)';
        attribution.style.paddingRight = '8px';
        // attribution.innerText = 'Search powered by Algolia';

        // Append to the container
        tagsContainer.appendChild(attribution);
      }
    };

    // Try immediately and with a small delay to ensure the dialog is rendered
    addAttribution();
    const timer = setTimeout(addAttribution, 100);

    // MutationObserver to handle dialog re-renders
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          addAttribution();
        }
      }
    });

    // Start observing the document body for changes
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Trigger a search when the component first mounts
  useEffect(() => {
    // If we have an initial search query, execute it
    if (isFirstMount.current && props.search && props.search.trim()) {
      // console.log('Initial search with query:', props.search);
      // customIndex.search(props.search, {}).catch(console.error);
      isFirstMount.current = false;
    }

    // When the dialog first opens, perform a placeholder search if no query
    if (isFirstMount.current && (!props.search || !props.search.trim())) {
      // console.log('Performing placeholder search');
      // customIndex.search('RWKV', {}).catch(console.error);
      isFirstMount.current = false;
    }
  }, [props.search]);

  // Custom handler for processing search results to handle item clicks
  const processResults = (results: any) => {
    const { onItemClick } = props;

    // If no results or no click handler, return as is
    if (!results || !results.hits) return results;

    // 过滤掉内容为空的搜索结果
    const filteredHits = results.hits.filter((hit: any) => {
      return hit.content && hit.content.trim().length > 0;
    });

    // 按URL分组，减少重复结果
    const hitsByUrl: { [key: string]: any[] } = {};

    filteredHits.forEach((hit: any) => {
      // 获取基本URL（不包含片段标识符）
      const baseUrl = hit.url.split('#')[0];

      if (!hitsByUrl[baseUrl]) {
        hitsByUrl[baseUrl] = [];
      }

      hitsByUrl[baseUrl].push(hit);
    });

    // 为每个URL只保留最佳匹配
    const bestHits: any[] = [];

    for (const [url, hits] of Object.entries(hitsByUrl)) {
      if (hits.length === 1) {
        // 只有一个结果，直接使用
        bestHits.push(hits[0]);
      } else {
        // 有多个结果，按照匹配度排序，选择最佳的一个
        let bestHit = hits[0];
        let bestScore = 0;

        for (const hit of hits) {
          let score = 0;

          // 计算匹配分数
          if (hit._highlightResult) {
            // 标题匹配权重高
            if (hit._highlightResult.title &&
              hit._highlightResult.title.matchLevel !== 'none') {
              score += 3;
            }

            // 内容匹配
            if (hit._highlightResult.content &&
              hit._highlightResult.content.matchLevel !== 'none') {
              score += 1;
            }

            // 完全匹配加分
            if (hit._highlightResult.content &&
              hit._highlightResult.content.matchLevel === 'full') {
              score += 2;
            }
          }

          // 更新最佳匹配
          if (score > bestScore) {
            bestScore = score;
            bestHit = hit;
          }
        }

        bestHits.push(bestHit);
      }
    }

    // Add click handlers to each processed hit
    return {
      ...results,
      hits: bestHits.map((hit: any) => ({
        ...hit,
        onClick: () => {
          if (hit.url && onItemClick) {
            onItemClick(hit.url);
          }
        }
      }))
    };
  };

  // Handle search changes
  const handleSearchChange = (value: string) => {
    // console.log('Search changed to:', value);
    setCurrentSearch(value);
    if (props.onSearchChange) {
      props.onSearchChange(value);
    }

    // Manually trigger a search if needed
    if (value.trim()) {
      customIndex.search(value, {}).catch(console.error);
    }
  };

  // Create a wrapped index that processes results
  const wrappedIndex = {
    ...customIndex,
    search: async (query: string, options: any = {}) => {
      const results = await customIndex.search(query, options);
      return processResults(results);
    }
  };

  // Extract the props that should not be passed to SearchDialog
  const { search, onSearchChange, onItemClick, ...restProps } = props;

  return (
    <SearchDialog
      index={wrappedIndex as any}
      {...restProps}
      defaultTag=""
      tags={[
        { name: "所有内容", value: "" },
        { name: "文档", value: "tag:docs" },
        { name: "教程", value: "tag:tutorials" }
      ]}
    />
  );
} 