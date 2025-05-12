import React from 'react';
import GroupForms from './pagesComps/GroupForms';
import MainNavigation from './pagesComps/Dashboard';
import Footer from './components/Footer';
import Head from 'next/head'; 

const MainGroupForms = () => {
  return (
    <>
      <Head>
        {/* Page Title */}
        <title>Group Forms  - Birdview Microinsurance | Get in Touch with Us</title>

        {/* Meta Description for SEO */}
        <meta
          name="description"
          content="Have questions or need assistance? Contact Birdview Microinsurance for support and inquiries about our insurance products. We're here to help."
        />

        {/* Meta Keywords for SEO */}
        <meta
          name="keywords"
          content="Contact Birdview Microinsurance,Birdview,Birdview ,Microinsurance, Birdview Kenya, Birdview Insurance, Insurance inquiries, Get in touch, Customer support, Reach Birdview MicroInsurance, Insurance support, Insurance questions, How to contact Birdview"
        />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.birdviewmicroinsurance.com/contact-us" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Contact Us - Birdview Microinsurance" />
        <meta
          property="og:description"
          content="Get in touch with Birdview Microinsurance. We offer support and assistance for inquiries about our insurance services."
        />
        <meta property="og:image" content="https://www.birdviewmicroinsurance.com/favicon.ico" />
        <meta property="og:url" content="https://www.birdviewmicroinsurance.com/contact-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Birdview Microinsurance" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Birdview Microinsurance" />
        <meta
          name="twitter:description"
          content="Have a question or need more information? Contact Birdview Microinsurance to get support and learn more about our insurance products."
        />
        <meta name="twitter:image" content="https://www.birdviewmicroinsurance.com/favicon.ico" />
        <meta name="twitter:site" content="@birdviewmicroinsurance" />

        {/* LinkedIn Open Graph Meta Tags */}
        <meta property="og:title" content="Contact Us - Birdview Microinsurance on LinkedIn" />
        <meta property="og:url" content="https://www.linkedin.com/company/birdviewmicroinsurance" />
        <meta property="og:image" content="https://www.birdviewmicroinsurance.com/favicon.ico" />
        <meta property="og:description" content="Contact Birdview Insurance via LinkedIn for insurance inquiries." />

        {/* Meta Robots Tag */}
        <meta name="robots" content="index, follow" />

        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Contact Us - Birdview Microinsurance",
              "description": "Have questions or need assistance? Contact Birdview Insurance for support and inquiries about our insurance products. We're here to help.",
              "url": "https://www.birdviewmicroinsurance.com/contact-us",
              "image": "https://www.birdviewmicroinsurance.com/favicon.ico",
              "publisher": {
                "@type": "Organization",
                "name": "Birdview Microinsurance",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.birdviewmicroinsurance.com/favicon.ico"
                }
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "telephone": "+254 742 222 888",
                "email": "customerservice@birdviewinsurance.com"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ground Floor, Fidelity Center, Waiyaki Way",
                "addressLocality": "Westlands",
                "addressRegion": "Nairobi",
                "addressCountry": "Kenya"
              },
              "sameAs": [
                "https://twitter.com/BirdviewInsur",
                "https://www.linkedin.com/company/birdview-microinsurance-71b32431a"
              ],
            }
          `}
        </script>
      </Head>

      <MainNavigation />

      <GroupForms />

      <Footer />
    </>
  );
}

export default MainGroupForms;
