import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { remarkMermaid } from '@theguild/remark-mermaid';

export const docs = defineDocs({
  dir: 'content/docs',
});

export const tutorials = defineDocs({
  dir: 'content/tutorials',
});

export default defineConfig({
  mdxOptions: {
    // MDX options
    remarkPlugins: [remarkMath, remarkMermaid],
    rehypePlugins: (v) => [rehypeKatex, ...v],
  },
});
