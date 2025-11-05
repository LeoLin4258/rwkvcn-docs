import { source } from '@/lib/source';
import { DocsPage, DocsBody, DocsTitle } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents, { createRelativeLink } from 'fumadocs-ui/mdx';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import DocsFooter from 'components-docs/ui/footer';
import RecomandLink from 'components-docs/ui/recomand-link';
import { readFileSync } from 'fs';
import { join } from 'path';

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        footer: <RecomandLink links={page.data.recommendedLinks} />,
      }}
      footer={
        {
          enabled: true,
          component: (<DocsFooter filePath={`docs/${page.file.path}`} />)
        }
      }
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsBody>
        <MDXContent
          components={{
            ...defaultMdxComponents,
            a: createRelativeLink(source, page),
            img: (props) => <ImageZoom {...(props as any)} />,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  let title = page.data.title;

  // For nested pages (depth >= 2), include parent section title in page title
  if (params.slug && params.slug.length >= 2) {
    try {
      const parentSlug = params.slug.slice(0, -1);
      const metaPath = join(process.cwd(), 'content', 'docs', ...parentSlug, 'meta.json');
      const metaContent = readFileSync(metaPath, 'utf-8');
      const meta = JSON.parse(metaContent);

      // Append parent title: "Page Title | Parent Title"
      // Root layout template will add " - RWKV 中国" suffix
      if (meta.title) {
        title = `${page.data.title} | ${meta.title}`;
      }
    } catch (error) {
      // Fallback to default title if parent meta.json is missing or unreadable
    }
  }

  return {
    title,
    description: page.data.description,
    keywords: page.data.keywords,
    alternates: {
      canonical: `https://www.rwkv.cn/docs/${params.slug?.join('/') || ''}`,
    },
  };
}
