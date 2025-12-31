import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { ThemeProvider } from 'next-themes';
import { RootDropdown } from '@/components-docs/ui/root-dropdown';
import '@/components-docs/docs-globl.css';




export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="docs-theme"
    >
      <DocsLayout
        tree={source.pageTree}
        sidebar={{
          banner: (
            <RootDropdown currentPage="docs" />
          ),
          className: 'xl:border-none xl:bg-[#f9fafb] xl:dark:bg-[#111111]',
        }}
        {...baseOptions()}
        containerProps={{
          className: '',
        }}
      >
        {children}
      </DocsLayout>
    </ThemeProvider>
  );
}