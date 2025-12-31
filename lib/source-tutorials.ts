import { tutorials } from '@/.source';
import { type InferPageType, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';

// See https://fumadocs.dev/docs/headless/source-api for more info
export const sourceTutorials = loader({
  baseUrl: '/tutorials',
  source: tutorials.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

export function getPageImage(page: InferPageType<typeof sourceTutorials>) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `/og/tutorials/${segments.join('/')}`,
  };
}

export async function getLLMText(page: InferPageType<typeof sourceTutorials>) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title}

${processed}`;
}

