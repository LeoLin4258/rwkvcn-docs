import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/tutorials-source';
import { DocsThemeProvider } from '@/components/theme-provider';
import { RootDropdown } from '@/components-docs/ui/root-dropdown';
import '@/components-docs/docs-gloabl.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <DocsLayout
        {...baseOptions}
        tree={source.pageTree}
        nav={{ ...baseOptions.nav }}

        sidebar={{
          banner: (
            <RootDropdown currentPage="tutorials" />
          ),
        }}
      >
        {children}
      </DocsLayout>
    </DocsThemeProvider>
  );
} 