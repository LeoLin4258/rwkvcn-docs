import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import 'katex/dist/katex.css';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const pathname = window.location.pathname;
                  if (!pathname.startsWith('/docs') && !pathname.startsWith('/tutorials')) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <RootProvider theme={{ enabled: false }}>{children}</RootProvider>
      </body>
    </html>
  );
}
