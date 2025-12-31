import { getPageImage, sourceTutorials } from '@/lib/source-tutorials';
import {
  DocsBody,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import DocsFooter from '@/components-docs/ui/footer';

export default async function Page(props: PageProps<'/tutorials/[[...slug]]'>) {
  const params = await props.params;
  const page = sourceTutorials.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage 
      toc={page.data.toc} 
      full={page.data.full}
      footer={
        {
          enabled: true,
          component: (<DocsFooter filePath={`tutorials/${page.path}`} />)
        }
      }
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(sourceTutorials, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return sourceTutorials.generateParams();
}
