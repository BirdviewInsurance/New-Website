import React from 'react';
import CookiesPolicy from './pagesComps/CookiesPolicy';
import MainNavigation from './pagesComps/Dashboard';
import Footer from './components/Footer';
import Head from 'next/head'; 

const MainCookiesPolicy = () => {
  return (
    <>
      <Head>
        {/* Page Title */}
        <title>Cookies Policy - Birdview Microinsurance</title>

        {/* Meta Description for SEO */}
        <meta
          name="description"
          content="Understand our Cookies Policy at Birdview Microinsurance. Learn how we use cookies to enhance your experience and improve our services."
        />

        {/* Meta Keywords for SEO */}
        <meta
          name="keywords"
          content="Cookies Policy, Birdview, Birdview Microinsurance,Bird view , Microinsurance,Insurance, Privacy, Cookies Usage, User Experience, Birdview Kenya, Birdview Privacy, Cookie Consent, Online Privacy, Tracking Technologies"
        />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.birdviewmicroinsurance.com/cookies-policy" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Cookies Policy - Birdview Microinsurance" />
        <meta
          property="og:description"
          content="Discover how Birdview Microinsurance uses cookies to enhance user experience and improve our services. Read our full Cookies Policy here."
        />
        <meta property="og:image" content="https://www.birdviewmicroinsurance.com/favicon.ico" />
        <meta property="og:url" content="https://www.birdviewmicroinsurance.com/cookies-policy" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cookies Policy - Birdview Microinsurance" />
        <meta
          name="twitter:description"
          content="Learn about our Cookies Policy at Birdview Microinsurance. We use cookies to enhance your experience and improve our services."
        />
        <meta name="twitter:image" content="https://www.birdviewmicroinsurance.com/favicon.ico" />

        {/* Meta Robots Tag */}
        <meta name="robots" content="index, follow" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Cookies Policy - Birdview Microinsurance",
              "description": "Understand our Cookies Policy at Birdview Microinsurance. Learn how we use cookies to enhance your experience and improve our services.",
              "url": "https://www.birdviewmicroinsurance.com/cookies-policy",
              "image": "https://www.birdviewmicroinsurance.com/favicon.ico",
              "publisher": {
                "@type": "Organization",
                "name": "Birdview Insurance",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.birdviewmicroinsurance.com/favicon.ico"
                }
              }
            }
          `}
        </script>
      </Head>

      <MainNavigation />
      <CookiesPolicy />
      <Footer />
    </>
  );
}

export default MainCookiesPolicy;
