'use client';

import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import SearchDialog from '@/components-docs/search/search';


export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      theme={{ enabled: false }}
      search={{
        SearchDialog,
      }}
    >
      {children}
    </RootProvider>
  );
} 