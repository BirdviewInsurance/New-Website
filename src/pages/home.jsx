import React from 'react';
import Home from './pagesComps/Home';
import MainNavigation from './pagesComps/Dashboard';
import Footer from './components/Footer';
import Head from 'next/head'; 

const MainHome = () => {
  return (
    <>
      <Head>
        {/* Page Title */}
        <title>Home - Birdview Microinsurance | Comprehensive Insurance Solutions</title>

        {/* Meta Description for SEO */}
        <meta
          name="description"
          content="Welcome to Birdview Microinsurance. We offer comprehensive insurance solutions tailored for Kenyans in the diaspora and within Kenya. Affordable, accessible, and reliable coverage."
        />

        {/* Updated Meta Keywords for SEO */}
        <meta
          name="keywords"
          content="
            Birdview Microinsurance, 
            Birdview Kenya,
            Birdview, 
            Bird view ,
            Insurance,
            Insurance,
            Birdview Microinsurance, 
            Insurance in Kenya, 
            Affordable Insurance Kenya, 
            Comprehensive Insurance Solutions, 
            Diaspora Insurance Solutions, 
            Insurance for Kenyans, 
            Reliable Coverage, 
            Health Insurance Kenya, 
            Life Insurance Kenya, 
            Affordable Health Coverage, 
            Kenyans in the Diaspora, 
            Insurance Plans for Kenyans, 
            Insurance Products, 
            Birdview Coverage, 
            Birdview Policies, 
            Birdview Microinsurance Solutions, 
            Insurance for Kenyans Abroad, 
            Affordable Diaspora Insurance, 
            Local Insurance Solutions, 
            Kenyans Insurance Options
          "
        />

        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.birdviewmicroinsurance.com" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Home - Birdview Microinsurance" />
        <meta
          property="og:description"
          content="Discover affordable and accessible Microinsurance solutions with Birdview Microinsurance. We provide comprehensive coverage for Kenyans both in the diaspora and within Kenya."
        />
        <meta property="og:image" content="https://www.birdviewmicroinsurance.com/favicon.ico" />
        <meta property="og:url" content="https://www.birdviewmicroinsurance.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home - Birdview Microinsurance" />
        <meta
          name="twitter:description"
          content="Explore affordable and reliable insurance solutions with Birdview Microinsurance, designed for Kenyans at home and abroad."
        />
        <meta name="twitter:image" content="https://www.birdviewmicroinsurance.com/favicon.ico" />

        {/* Meta Robots Tag */}
        <meta name="robots" content="index, follow" />

      {/* Structured Data */}
      <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Birdview Insurance",
            "url": "https://www.birdviewmicroinsurance.com",
            "logo": "https://www.birdviewmicroinsurance.com/favicon.ico",
            "description":
              "Birdview Insurance offers comprehensive and affordable insurance solutions tailored for Kenyans in the diaspora and within Kenya.",
            "sameAs": [
              "https://www.facebook.com/birdviewmicroinsurance",
              "https://twitter.com/birdviewmicroinsurance",
              "https://www.linkedin.com/company/birdviewmicroinsurance"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Ground Floor, Fidelity Center, Waiyaki Way",
              "addressLocality": "Westlands",
              "addressRegion": "Nairobi",
              "addressCountry": "KE"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Support",
              "telephone": "+254 742 222 888",
              "email": "customerservice@birdviewinsurance.com"
            }
          })}
        </script>
      </Head>

      <MainNavigation />

      <Home />

      <Footer />
    </>
  );
}

export default MainHome;
