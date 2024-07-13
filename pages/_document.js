import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="monetag" content="e73d68a75117a0f77d161f6af2ac1322" />

        <Script
          id="monetag-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(s,u,z,p){s.src = u, s.setAttribute('data-zone', z), p.appendChild(s);})(document.createElement('script'),'https://zovidree.com/tag.min.js',7726000,document.body||document.documentElement)`,
          }}
        />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
