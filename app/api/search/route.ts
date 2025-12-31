import { source } from '@/lib/source';
import { sourceTutorials } from '@/lib/source-tutorials';
import { createFromSource } from 'fumadocs-core/search/server';
import { createTokenizer } from '@orama/tokenizers/mandarin';

// Combine multiple sources for search
const combinedSource = {
  ...source,
  getPages: () => [...source.getPages(), ...sourceTutorials.getPages()],
};

export const { GET } = createFromSource(combinedSource, {
  // Chinese/Japanese require a custom tokenizer. See:
  // https://www.fumadocs.dev/docs/headless/search/orama#special-languages
  components: {
    tokenizer: createTokenizer(),
  },
  // Make Chinese search less "fuzzy" to improve precision for short queries
  search: {
    threshold: 0,
    tolerance: 0,
  },
});
