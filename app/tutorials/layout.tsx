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
          className: 'md:border-none md:bg-transparent',
        }}
      >
        <div className='md:m-4 md:border md:shadow-lg md:rounded-2xl bg-white dark:bg-[#070707]'>
          {children}
        </div>

        <div className='py-14 text-xs md:text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-2'>
          <span>©2025 RWKV. All rights reserved.</span>
          <span className='hidden md:inline'>•</span>
          <a
            href='https://beian.miit.gov.cn/'
            target='_blank'
            rel='noreferrer noopener'
            className='underline-offset-4 hover:underline'
          >
            粤ICP备2024242518号-1
          </a>
        </div>
      </DocsLayout>
    </DocsThemeProvider>
  );
} 