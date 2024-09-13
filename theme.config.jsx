import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
export default {
  logo: <span>RWKV</span>,
  project: {
    link: "https://github.com/BlinkDL/RWKV-LM",
  },
  // ... other theme options
  sidebar: {
    defaultMenuCollapseLevel: 1, // here
    autoCollapse: true,
  },
  search: {
    placeholder: "搜索文档...",
  },
  // toc:{
  //   title:"本页内容"
  // },
  darkMode: false,
  nextTheme: {
    defaultTheme: "dark",
    forcedTheme: "dark",
  },
  feedback: {
    content: null, // 设置为 null 可以隐藏反馈部分
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
        {/* <meta property="og:title" content={frontMatter.title || 'RWKV中文文档'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'RWKV官方中文文档'}
        /> */}
        <meta
          property="keywords"
          content={frontMatter.keywords || "RWKV,文档"}
        />
        <meta
          property="og:keywords"
          content={frontMatter.keywords || "RWKV,文档"}
        />
        {/* <script defer src="https://rwkv-site-analytics.vercel.app/script.js" data-website-id="2690d44c-c25e-4921-b463-89064e8f2f55"></script> */}
        {/* <script></script> */}
      </>
    );
  },

  useNextSeoProps() {
    return {
      titleTemplate: "%s ",
    };
  },
};
