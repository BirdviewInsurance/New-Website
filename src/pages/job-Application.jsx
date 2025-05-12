import React from 'react';
import JobApplicationForm from './pagesComps/JobApplicationForm';  
import MainNavigation from './pagesComps/Dashboard';
import Footer from './components/Footer';
import Head from 'next/head';

const MainJobApplication = () => {
  return (
    <>
      <Head>
        {/* Page Title */}
        <title>Job Application - Join Birdview Microinsurance</title>

        {/* Meta Description for SEO */}
        <meta
          name="description"
          content="Apply for a job at Birdview Microinsurance and become part of a leading insurance provider. Expand your career with us today."
        />

        {/* Meta Keywords for SEO */}
        <meta
          name="keywords"
          content="Job Application , Insurance Agent, Birdview Microinsurance, Kenyan Insurance, Become an Agent, Insurance Opportunities, Birdview Careers"
        />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.birdviewmicroinsurance.com/job-application" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Job Application - Birdview Microinsurance" />
        <meta
          property="og:description"
          content="Join Birdview Microinsurance and grow your career in the insurance industry. Get started today!"
        />
        <meta property="og:image" content="https://www.birdviewmicroinsurance.com/favicon.ico" />
        <meta property="og:url" content="https://www.birdviewmicroinsurance.com/job-application" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Job Application - Birdview Insurance" />
        <meta
          name="twitter:description"
          content="Become an employee with Birdview Microinsurance. Register today and be part of our expanding insurance network."
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
              "description": " Join Birdview Insurance and grow your career in the industry. Join us today!",
              "sameAs": [
                "https://www.facebook.com/BirdviewMicroInsurance",
                "https://twitter.com/BirdviewInsur",
                "https://www.linkedin.com/company/birdview-microinsurance-71b32431a"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Agent Support",
                "telephone": "+254 742 222 888",
                "email": "customerservice@birdviewinsurance.com"
              }
            }
          `}
        </script>
      </Head>

      <MainNavigation />
      <JobApplicationForm />  
      <Footer />
    </>
  );
}

export default MainJobApplication;
