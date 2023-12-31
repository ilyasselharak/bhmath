import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html dir="ltr" lang="fr">
      <Head>
       <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3523606019399197"
     crossorigin="anonymous">
       
       </Script>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
