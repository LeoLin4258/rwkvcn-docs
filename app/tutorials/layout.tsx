import { sourceTutorials } from '@/lib/source-tutorials';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { ThemeProvider } from 'next-themes';
import { RootDropdown } from '@/components-docs/ui/root-dropdown';
import '@/components-docs/docs-globl.css';

export default function Layout({ children }: LayoutProps<'/tutorials'>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="docs-theme"
    >
      <DocsLayout tree={sourceTutorials.pageTree} sidebar={{
        banner: (
          <RootDropdown currentPage="tutorials" />
        ),
        className: 'xl:border-none xl:bg-[#f9fafb] xl:dark:bg-[#111111]',
      }} {...baseOptions()}>
        {children}
      </DocsLayout>
    </ThemeProvider>
  );
}

