import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head"; // Import Head from next/head
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isOnHold = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  useEffect(() => {
    if (isOnHold && router.pathname !== "/maintenance") {
      router.push("/maintenance");
    }
  }, [isOnHold, router]);

  // Prevent rendering other pages momentarily during redirection
  if (isOnHold && router.pathname !== "/maintenance") {
    return null;
  }

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              function loadScript(a) {
                var b = document.getElementsByTagName("head")[0],
                    c = document.createElement("script");
                c.type = "text/javascript";
                c.src = "https://tracker.metricool.com/resources/be.js";
                c.onreadystatechange = a;
                c.onload = a;
                b.appendChild(c);
              }
              loadScript(function() {
                beTracker.t({hash: "7617bfca2e36baaadb4c9ce7bf8a6683"});
              });
            `
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
