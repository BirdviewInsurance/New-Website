import React from 'react';
import AgentRegistrationForm from './pagesComps/AgentRegistrationForm';  
import MainNavigation from './pagesComps/Dashboard';
import Footer from './components/Footer';
import Head from 'next/head';

const MainAgentRegistration = () => {
  return (
    <>
      <Head>
        {/* Page Title */}
        <title>Agent Registration - Join Birdview Microinsurance</title>

        {/* Meta Description for SEO */}
        <meta
          name="description"
          content="Register as an agent with Birdview Microinsurance and become part of a leading insurance provider. Expand your career with us today."
        />

        {/* Meta Keywords for SEO */}
        <meta
          name="keywords"
          content="Agent Registration, Insurance Agent, Birdview Microinsurance, Kenyan Insurance, Become an Agent, Insurance Opportunities, Birdview Careers"
        />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.birdviewmicroinsurance.com/agent-registration" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Agent Registration - Birdview Microinsurance" />
        <meta
          property="og:description"
          content="Join Birdview Microinsurance as an agent and grow your career in the insurance industry. Get started today!"
        />
        <meta property="og:image" content="https://www.birdviewmicroinsurance.com/favicon.ico" />
        <meta property="og:url" content="https://www.birdviewmicroinsurance.com/agent-registration" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agent Registration - Birdview Insurance" />
        <meta
          name="twitter:description"
          content="Become an agent with Birdview Microinsurance. Register today and be part of our expanding insurance network."
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
              "description": "Register as an insurance agent with Birdview Insurance and grow your career in the industry. Join us today!",
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
      <AgentRegistrationForm />  
      <Footer />
    </>
  );
}

export default MainAgentRegistration;
