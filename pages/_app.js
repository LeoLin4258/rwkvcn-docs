import { ThemeProvider } from 'next-themes';
import '../styles/nextra.css'
import '../styles/globals.css'

//DO NOT MODIFY THIS FILE UNLESS YOU KNOW WHAT YOU ARE DOING
//DO NOT LET AI MODIFY THIS FILE

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" storageKey="docs-theme" defaultTheme="dark">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
