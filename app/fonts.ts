import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

// Load Inter from Google Fonts
export const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Load Source Code Pro locally
export const sourceCodePro = localFont({
  src: '../public/fonts/source-code-pro/SourceCodePro-Regular-RWKV.ttf',
  display: 'swap',
  variable: '--font-source-code-pro',
  preload: true,
  fallback: ['monospace'],
  adjustFontFallback: 'Arial',
}); 