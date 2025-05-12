import React from 'react';
import OurManagement from './pagesComps/OurManagement';
import MainNavigation from './pagesComps/Dashboard';
import Footer from './components/Footer';
import Head from 'next/head';

const MainOurManagement = () => {
  return (
    <>
      <Head>
        {/* Page Title */}
        <title>Our Management - Meet the Team Behind Birdview Microinsurance</title>

        {/* Meta Description for SEO */}
        <meta
          name="description"
          content="Meet the dedicated management team at Birdview Microinsurance. Discover the visionary leaders driving quality insurance solutions for Kenyans both in the diaspora and within Kenya."
        />

        {/* Meta Keywords for SEO */}
        <meta
          name="keywords"
          content="Management Team,Birdview, Birdview Microinsurance,Birdview , Microinsurance,Insurance, Insurance Leaders, Kenyan Diaspora Insurance, Insurance Management, Birdview Team, Insurance Solutions in Kenya"
        />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.birdviewmicroinsurance.com/team-members" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Our Management - Birdview Microinsurance" />
        <meta
          property="og:description"
          content="Discover the leadership and management team at Birdview Microinsurance. Our experienced team is dedicated to delivering high-quality, innovative insurance solutions tailored for Kenyans."
        />
        <meta property="og:image" content="https://www.birdviewmicroinsurance.com/favicon.ico" />
        <meta property="og:url" content="https://www.birdviewmicroinsurance.com/team-members" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Management - Birdview Microinsurance" />
        <meta
          name="twitter:description"
          content="Meet the management team at Birdview Insurance, who are committed to offering innovative insurance solutions for Kenyans at home and abroad."
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
              "name": "Birdview Microinsurance",
              "url": "https://www.birdviewmicroinsurance.com",
              "logo": "https://www.birdviewmicroinsurance.com/favicon.ico",
              "description": "Birdview Insurance provides innovative and affordable insurance solutions to Kenyans at home and abroad, with a strong management team driving the company forward.",
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
              }
            }
          `}
        </script>
      </Head>

      <MainNavigation />
      <OurManagement />
      <Footer />
    </>
  );
}

export default MainOurManagement;
