import React from 'react';
import PrivacyPolicy from './pagesComps/PrivacyPolicy';
import MainNavigation from './pagesComps/Dashboard';
import Footer from './components/Footer';
import Head from 'next/head';

const MainPrivacyPolicy = () => {
  return (
    <>
      <Head>
        {/* Page Title */}
        <title>Privacy Policy - How Birdview Microinsurance Protects Your Data</title>

        {/* Meta Description for SEO */}
        <meta
          name="description"
          content="Understand how Birdview Microinsurance collects, uses, and safeguards your personal information. Our privacy policy ensures data protection and compliance with privacy regulations."
        />

        {/* Meta Keywords for SEO */}
        <meta
          name="keywords"
          content="Privacy Policy,Birdview, Birdview Microinsurance,Birdview , Microinsurance,Insurance, Personal Data, Data Protection, Information Security, Privacy Compliance, Birdview Privacy Policy, Data Management"
        />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.birdviewmicroinsurance.com/privacy-policy" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Privacy Policy - Birdview Microinsurance" />
        <meta
          property="og:description"
          content="Learn about Birdview Microinsurance's commitment to protecting your personal information. Our privacy policy outlines how we handle and safeguard your data."
        />
        <meta property="og:image" content="https://www.birdviewmicroinsurance.com/favicon.ico" />
        <meta property="og:url" content="https://www.birdviewmicroinsurance.com/privacy-policy" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - Birdview Microinsurance" />
        <meta
          name="twitter:description"
          content="Read Birdview Microinsurance's Privacy Policy and understand how we prioritize the protection of your personal information."
        />
        <meta name="twitter:image" content="https://www.birdviewmicroinsurance.com/favicon.ico" />

        {/* Meta Robots Tag */}
        <meta name="robots" content="index, follow" />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Birdview Insurance",
              "url": "https://www.birdviewmicroinsurance.com",
              "logo": "https://www.birdviewmicroinsurance.com/favicon.ico",
              "description": "Birdview Microinsurance ensures the protection of your personal data through secure data handling practices in compliance with international privacy regulations.",
              "sameAs": [
                "https://www.facebook.com/BirdviewMicroInsurance",
                "https://twitter.com/BirdviewInsur",
                "https://www.linkedin.com/company/birdview-microinsurance-71b32431a"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "telephone": "+254 742 222 888",
                "email": "customerservice@birdviewinsurance.com"
              },
              "privacyPolicy": "https://www.birdviewmicroinsurance.com/privacy-policy"
            }
          `}
        </script>
      </Head>

      <MainNavigation />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}

export default MainPrivacyPolicy;
