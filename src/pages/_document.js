import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      
        {/* <meta name="google-site-verification" content="d7umx_wU5gUdI7BQNOEMaxgJWCIdGNRu1pRa7xKe_JE" /> */}
        <meta name="google-site-verification" content="GL54IOhG5TPdFQn40O9ExSZ97HS26JnXX99YnFtcM0E" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        
        {/* Adding the Tawk.to script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function() {
                var s1 = document.createElement("script"),
                    s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = "https://embed.tawk.to/6698d0b232dca6db2cb191f0/1i3fh201c";
                s1.charset = "UTF-8";
                s1.setAttribute("crossorigin", "*");
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        />
        
        {/* Google Tag Manager (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YEE1LF07MX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YEE1LF07MX');
            `,
          }}
        />
      </body>
    </Html>
  );
}
