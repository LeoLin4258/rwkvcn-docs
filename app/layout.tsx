import type { ReactNode } from 'react';
import { Provider } from '@/components/provider';
import { inter, sourceCodePro } from '@/app/fonts';
import 'katex/dist/katex.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceCodePro.variable} font-sans`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
