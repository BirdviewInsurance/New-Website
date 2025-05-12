import React from 'react';
import NoticeBoard from './pagesComps/NoticeBoard';
import MainNavigation from './pagesComps/Dashboard';
import Footer from './components/Footer';
import Head from 'next/head'; 

const MainNoticeBoard = () => {
  return (
    <>
      <Head>
        {/* Page Title */}
        <title>Notice Board - Birdview Microinsurance | Latest Updates & Announcements</title>

        {/* Meta Description for SEO */}
        <meta
          name="description"
          content="Stay updated with the latest news, announcements, and important notices from Birdview Microinsurance. Check our notice board for timely updates, changes in policy, and new offers."
        />

        {/* Meta Keywords for SEO */}
        <meta
          name="keywords"
          content="Notice Board,Birdview, Birdview Microinsurance,Birdview ,Microinsurance, Announcements, Updates, Insurance News, Policy Changes, Birdview Notices, Important Updates, Birdview Kenya"
        />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.birdviewmicroinsurance.com/notice-board" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Notice Board - Birdview Microinsurance" />
        <meta
          property="og:description"
          content="Discover the latest updates and announcements from Birdview Microinsurance. Stay informed with timely news, changes in policy, and important notices."
        />
        <meta property="og:image" content="https://www.birdviewmicroinsurance.com/favicon.ico" />
        <meta property="og:url" content="https://www.birdviewmicroinsurance.com/notice-board" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Notice Board - Birdview Microinsurance" />
        <meta
          name="twitter:description"
          content="Stay up to date with Birdview Microinsurance. Check out our notice board for the latest news, important updates, and announcements."
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
              "name": "Notice Board - Birdview Microinsurance",
              "description": "Stay updated with the latest news, announcements, and important notices from Birdview MicroInsurance. Find timely updates and changes.",
              "url": "https://www.birdviewmicroinsurance.com/notice-board",
              "image": "https://www.birdviewmicroinsurance.com/favicon.ico",
              "publisher": {
                "@type": "Organization",
                "name": "Birdview Insurance",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.birdviewmicroinsurance.com/favicon.ico"
                }
              }
            }
          `}
        </script>
      </Head>

      <MainNavigation />
      <NoticeBoard />
      <Footer />
    </>
  );
}

export default MainNoticeBoard;
