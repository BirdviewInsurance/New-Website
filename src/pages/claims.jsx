import React from 'react';
import Claims from './pagesComps/Claims';
import MainNavigation from './pagesComps/Dashboard';
import Footer from './components/Footer';
import Head from 'next/head'; 

const MainClaims = () => {
  return (
    <>
      <Head>
        {/* Page Title */}
        <title>Claims Process - Birdview Microinsurance</title>

        {/* Meta Description for SEO */}
        <meta
          name="description"
          content="Learn about the claims process at Birdview Microinsurance. Discover how to file a claim quickly and efficiently for your insurance coverage."
        />

        {/* Meta Keywords for SEO */}
        <meta
          name="keywords"
          content="Claims Process,Birdview,Birdview , Microinsurance,Insurance, Birdview Microinsurance, Birdview Claims, Birdview Kenya, Insurance Claims, File a Claim, Insurance Coverage, How to File a Claim, Insurance Claim Support, Quick Claims Processing"
        />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.birdviewmicroinsurance.com/claims-process" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Claims Process - Birdview Microinsurance" />
        <meta
          property="og:description"
          content="Find out how to file your claims efficiently at Birdview Microinsurance. We provide comprehensive support for all your insurance needs."
        />
        <meta property="og:image" content="https://www.birdviewmicroinsurance.com/favicon.ico" />
        <meta property="og:url" content="https://www.birdviewmicroinsurance.com/claims-process" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Claims Process - Birdview Microinsurance" />
        <meta
          name="twitter:description"
          content="Discover how to file your claims quickly and effectively with Birdview Microinsurance. Get support for all your insurance needs."
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
              "name": "Claims Process - Birdview Microinsurance",
              "description": "Learn about the claims process at Birdview Microinsurance. Discover how to file a claim quickly and efficiently for your insurance coverage.",
              "url": "https://www.birdviewmicroinsurance.com/claims-process",
              "image": "https://www.birdviewmicroinsurance.com/favicon.ico"
            }
          `}
        </script>
      </Head>

      <MainNavigation />
      <Claims />
      <Footer />
    </>
  );
}

export default MainClaims;
