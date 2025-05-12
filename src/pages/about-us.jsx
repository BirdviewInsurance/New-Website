import React from 'react';
import AboutUs from './pagesComps/AboutUs';
import MainNavigation from './pagesComps/Dashboard';
import Footer from './components/Footer';
import Head from 'next/head'; 

// SEO and meta information structure
const seoData = {
  title: "About Us - Birdview Microinsurance | Comprehensive Insurance for Kenyans",
  description: "Learn about Birdview Insurance. We offer simple, accessible, and affordable insurance products tailored for Kenyans in the diaspora and within Kenya.",
  keywords: [
    "Birdview Insurance", "About Birdview", "Affordable Insurance Kenya",
    "Comprehensive Coverage", "Insurance for Diaspora Kenyans",
    "Health and Life Insurance Kenya", "Accessible Insurance Products",
    "Insurance for Kenyans Abroad", "Birdview Coverage Options",
    "Reliable Coverage Kenya"
  ],
  canonical: "https://www.birdviewmicroinsurance.com/about-us"
};

// Open Graph data structure
const openGraphData = {
  title: seoData.title,
  description: seoData.description,
  image: "https://www.birdviewmicroinsurance.com/favicon.ico",
  url: seoData.canonical,
  type: "website"
};

// Twitter Card data structure
const twitterData = {
  card: "summary_large_image",
  title: seoData.title,
  description: seoData.description,
  image: openGraphData.image
};

// Structured data for the organization
const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Birdview Insurance",
  url: "https://www.birdviewmicroinsurance.com",
  logo: openGraphData.image,
  description: seoData.description,
  sameAs: [
    "https://www.facebook.com/birdviewmicroinsurance",
    "https://twitter.com/birdviewmicroinsurance",
    "https://www.linkedin.com/company/birdviewmicroinsurance"
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ground Floor, Fidelity Center, Waiyaki Way",
    addressLocality: "Westlands",
    addressRegion: "Nairobi",
    addressCountry: "Kenya"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+254712345678",
    contactType: "Customer Service",
    email: "customerservice@birdviewinsurance.com",
    availableLanguage: "en"
  },
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Richard Muiru"
    }
  ]
};

const MainAboutUs = () => {
  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={seoData.canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={openGraphData.title} />
        <meta property="og:description" content={openGraphData.description} />
        <meta property="og:image" content={openGraphData.image} />
        <meta property="og:url" content={openGraphData.url} />
        <meta property="og:type" content={openGraphData.type} />

        {/* Twitter Card */}
        <meta name="twitter:card" content={twitterData.card} />
        <meta name="twitter:title" content={twitterData.title} />
        <meta name="twitter:description" content={twitterData.description} />
        <meta name="twitter:image" content={twitterData.image} />

        <meta name="robots" content="index, follow" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationData)}
        </script>
      </Head>

      <MainNavigation />
      <AboutUs />
      <Footer />
    </>
  );
}

export default MainAboutUs;
