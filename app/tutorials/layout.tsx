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
          className: 'xl:border-none xl:bg-[#111111]',
        }}
      >
        <div className='xl:m-4 xl:border xl:shadow-lg xl:rounded-2xl bg-white dark:bg-[#070707] relative'>
          <div className='absolute top-0 left-0 w-full h-[600px] z-0 rounded-2xl overflow-hidden'>
            <div className='w-full h-full bg-gradient-to-br from-neutral-200 dark:from-neutral-800 to-transparent' />
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-[#070707]' />
          </div>
          <div className='relative z-10'>
            {children}
          </div>
        </div>

        <div className='py-14 text-xs xl:text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-2'>
          <span>©2025 RWKV. All rights reserved.</span>
          <span className='hidden xl:inline'>•</span>
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