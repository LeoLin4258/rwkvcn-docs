import { source as docsSource } from '@/lib/source';
import { source as tutorialsSource } from '@/lib/tutorials-source';
import { createFromSource } from 'fumadocs-core/search/server';
import { createTokenizer } from '@orama/tokenizers/mandarin'
import { stopwords as mandarinStopwords } from "@orama/stopwords/mandarin";

// 创建docs搜索API
const docsSearchAPI = createFromSource(docsSource, {
  components: {
    tokenizer: createTokenizer({
      language: 'mandarin',
      stopWords: mandarinStopwords,
    }),
  }
});

// 创建tutorials搜索API  
const tutorialsSearchAPI = createFromSource(tutorialsSource, {
  components: {
    tokenizer: createTokenizer({
      language: 'mandarin',
      stopWords: mandarinStopwords,
    }),
  }
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || '';
  const tag = searchParams.get('tag');
  
  try {
    // 根据tag选择搜索哪个源
    if (tag === 'docs') {
      // 创建一个新的URL，只包含query参数，不包含tag参数
      const cleanUrl = new URL(request.url);
      cleanUrl.searchParams.delete('tag');
      const cleanRequest = new Request(cleanUrl.toString(), {
        method: request.method,
        headers: request.headers,
        body: request.body,
      });
      return docsSearchAPI.GET(cleanRequest);
    } else if (tag === 'tutorials') {
      // 创建一个新的URL，只包含query参数，不包含tag参数
      const cleanUrl = new URL(request.url);
      cleanUrl.searchParams.delete('tag');
      const cleanRequest = new Request(cleanUrl.toString(), {
        method: request.method,
        headers: request.headers,
        body: request.body,
      });
      return tutorialsSearchAPI.GET(cleanRequest);
    } else {
      // 搜索两个源并合并结果
      const cleanUrl = new URL(request.url);
      cleanUrl.searchParams.delete('tag');
      const cleanRequest = new Request(cleanUrl.toString(), {
        method: request.method,
        headers: request.headers,
        body: request.body,
      });
      
      const [docsResponse, tutorialsResponse] = await Promise.all([
        docsSearchAPI.GET(cleanRequest),
        tutorialsSearchAPI.GET(cleanRequest),
      ]);
      
      const docsResults = await docsResponse.json();
      const tutorialsResults = await tutorialsResponse.json();
      
      // 合并结果
      const combinedResults = [...docsResults, ...tutorialsResults];
      
      return Response.json(combinedResults);
    }
  } catch (error) {
    console.error('Search error:', error);
    return Response.json([]);
  }
}
