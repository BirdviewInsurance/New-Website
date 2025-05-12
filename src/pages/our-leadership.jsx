import React from 'react';
import OurLeadership from './pagesComps/OurLeadership';
import MainNavigation from './pagesComps/Dashboard';
import Footer from './components/Footer';
import Head from 'next/head';

const MainAboutUs = () => {
  return (
    <>
      <Head>
        {/* Page Title */}
        <title>Our Leadership - Birdview Microinsurance | Visionary Team Leading the Future of Insurance</title>

        {/* Meta Description for SEO */}
        <meta
          name="description"
          content="Discover the leadership team driving Birdview Microinsurance. Meet experienced professionals committed to providing innovative, affordable insurance solutions for Kenyans locally and abroad."
        />

        {/* Meta Keywords for SEO */}
        <meta
          name="keywords"
          content="Our Leadership,Birdview, Birdview Microinsurance, Birdview ,  Microinsurance,Insurance,Kenyan Insurance, Insurance Leaders, Birdview Team, Management Team, Kenyan Insurance Solutions, Affordable Insurance, Diaspora Insurance"
        />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.birdviewmicroinsurance.com/our-leadership" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Our Leadership - Birdview Microinsurance" />
        <meta
          property="og:description"
          content="Meet the leadership team behind Birdview Microinsurance and learn how they are bringing innovative insurance solutions to Kenya and the Kenyan diaspora."
        />
        <meta property="og:image" content="https://www.birdviewmicroinsurance.com/favicon.ico" />
        <meta property="og:url" content="https://www.birdviewmicroinsurance.com/our-leadership" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Leadership - Birdview Microinsurance" />
        <meta
          name="twitter:description"
          content="Learn about Birdview Microinsurance's leadership team and how they are shaping the future of insurance in Kenya and abroad."
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
              "description": "Birdview Microinsurance is dedicated to providing affordable insurance solutions for Kenyans, with a strong focus on diaspora communities and local growth.",
              "foundingDate": "2024",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Mr. Richard Muiru"
                }
              ],
              "sameAs": [
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
      <OurLeadership />
      <Footer />
    </>
  );
};

export default MainAboutUs;
