import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { useEffect } from 'react';

export default {
  logo: <span>RWKV</span>,
  project: {
    link: "https://github.com/BlinkDL/RWKV-LM",
  },
  // ... other theme options
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
  },
  search: {
    placeholder: "搜索文档...",
  },
  feedback: {
    content: null,
  },
  docsRepositoryBase:"https://github.com/LeoLin4258/rwkvcn-docs/blob/main",
  
  footer: {
    text: (
      <div className="footer-container">
        <div className="footer-left">
          <span className="footer-logo">RWKV</span>
        </div>
        <div className="footer-right">
          <p className="footer-text">© 2024 RWKV.cn. All rights reserved.</p>
          <a href="https://beian.miit.gov.cn/" className="footer-link">
            粤ICP备2024242518号-1
          </a>
        </div>
        <style jsx>{`
          .footer-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            width: 100%;
          }
          .footer-left {
            display: flex;
            align-items: center;
          }
          .footer-logo {
            font-size: 24px;
            font-weight: semi-bold;
          }
          .footer-right {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            text-align: right;
          }
          .footer-text {
            margin: 0;
            font-size: 14px;
            color: #6c757d;
          }
          .footer-link {
            margin-top: 5px;
            font-size: 14px;
            text-decoration: none;
          }
          @media (max-width: 768px) {
            .footer-container {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            .footer-right {
              align-items: center;
              margin-top: 10px;
            }
            .footer-link {
              margin-top: 5px;
            }
          }
        `}</style>
      </div>
    ),
  },

  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://rwkv.cn" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
    return (
      <>
        <meta property="og:url" content={url} />
        <meta
          property="keywords"
          content={frontMatter.keywords || "RWKV,文档"}
        />
        <meta
          property="og:keywords"
          content={frontMatter.keywords || "RWKV,文档"}
        />
      </>
    );
  },

  useNextSeoProps() {
    useEffect(() => {
      // 初始化主题
      const docTheme = localStorage.getItem('docs-theme') || 'dark';
      localStorage.setItem('docs-theme', docTheme);
      // 初始化时设置正确的类名
      document.documentElement.classList.toggle('dark', docTheme === 'dark');
      document.documentElement.classList.toggle('light', docTheme === 'light');
    }, []);

    return {
      titleTemplate: "%s ",
    };
  },
};
