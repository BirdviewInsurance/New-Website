import React from 'react';
import Career from './pagesComps/Career';
import MainNavigation from './pagesComps/Dashboard';
import Footer from './components/Footer';
import Head from 'next/head'; 

const MainCareer = () => {
  return (
    <>
      <Head>
        {/* Page Title */}
        <title>Careers at Birdview Microinsurance | Join Our Team</title>

        {/* Meta Description for SEO */}
        <meta
          name="description"
          content="Explore career opportunities at Birdview Microinsurance. Join our dynamic team and help provide comprehensive insurance solutions for Kenyans in the diaspora and within Kenya."
        />

        {/* Expanded Meta Keywords for SEO */}
        <meta
          name="keywords"
          content="
            Careers, 
            Birdview,
            Bird view ,
            Insurance,
            Insurance,
            Birdview Microinsurance, 
            Birdview Kenya, 
            Birdview Insurance, 
            Job Opportunities, 
            Join Our Team, 
            Insurance Careers, 
            Work at Birdview, 
            Employment at Birdview, 
            Insurance Job Vacancies, 
            Career Development, 
            Work Culture at Birdview
          "
        />

        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.birdviewmicroinsurance.com/careers" />

        {/* Meta Robots Tag */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Careers at Birdview Microinsurance" />
        <meta
          property="og:description"
          content="Join our team at Birdview Microinsurance and help us provide comprehensive insurance solutions for Kenyans. Explore exciting career opportunities."
        />
        <meta property="og:image" content="https://www.birdviewmicroinsurance.com/favicon.ico" />
        <meta property="og:url" content="https://www.birdviewmicroinsurance.com/careers" />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "JobPosting",
              "title": "Careers at Birdview Microinsurance",
              "description": "Explore exciting career opportunities at Birdview Insurance. Join our dynamic team to provide comprehensive insurance solutions for Kenyans in the diaspora and within Kenya.",
              "datePosted": "2024-10-06",
              "validThrough": "2024-12-31T23:59",
              "employmentType": "FULL_TIME",
              "hiringOrganization": {
                "@type": "Organization",
                "name": "Birdview Microinsurance",
                "sameAs": "https://www.birdviewmicroinsurance.com",
                "logo": "https://www.birdviewmicroinsurance.com/favicon.ico"
              },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Ground Floor, Fidelity Center, Waiyaki Way",
                  "addressLocality": "Westlands",
                  "addressRegion": "Nairobi",
                  "addressCountry": "Kenya"
                }
              },
            }
          `}
        </script>
      </Head>

      <MainNavigation />
      <Career />
      <Footer />
    </>
  );
}

export default MainCareer;
