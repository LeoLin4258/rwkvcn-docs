import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import { remarkMermaid } from '@theguild/remark-mermaid';
import { z } from 'zod';

const metaSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  icon: z.string().optional(),
  full: z.boolean().optional(),
  keywords: z.array(z.string()).optional(),
});

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: metaSchema,
  },
});

export const tutorials = defineDocs({
  dir: 'content/tutorials',
  docs: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    // MDX options
    remarkPlugins: [remarkMath, remarkMermaid],
    rehypePlugins: (v) => [rehypeKatex, ...v],
  },
});
