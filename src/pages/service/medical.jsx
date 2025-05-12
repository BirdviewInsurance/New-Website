import React from 'react';
import Medical from '../pagesComps/Medical';
import MainNavigation from '../pagesComps/Dashboard';
import Footer from '../components/Footer';
import Head from 'next/head'; 

const MainMedical = () => {
    return (
        <>
            <Head>
                {/* Page Title */}
                <title>Comprehensive Medical Insurance - Inpatient, Outpatient, Dental & Optical - Birdview MicroInsurance</title>

                {/* Meta Description for SEO */}
                <meta
                    name="description"
                    content="Birdview MicroInsurance provides comprehensive medical insurance that covers Inpatient, Maternity, Outpatient, Dental, and Optical care. Explore affordable healthcare solutions tailored for Kenyans."
                />

                {/* Meta Keywords for SEO */}
                <meta
                    name="keywords"
                    content="Medical Insurance,Birdview,Bird view , MicroInsurance,Insurance, Inpatient Insurance, Outpatient Insurance, Dental Insurance, Optical Insurance, Maternity Cover, Birdview MicroInsurance, Affordable Healthcare Kenya, Health Insurance Plans, Comprehensive Medical Coverage"
                />

                {/* Open Graph Tags for Social Media Sharing */}
                <meta property="og:title" content="Comprehensive Medical Insurance - Birdview MicroInsurance" />
                <meta property="og:description" content="Get comprehensive medical insurance covering Inpatient (including Maternity), Outpatient, Dental, and Optical. Affordable healthcare solutions tailored for Kenyans." />
                <meta property="og:image" content="https://www.birdviewmicroinsurance.com/assets/medical-Brds9CG8.png" />
                <meta property="og:url" content="https://www.birdviewmicroinsurance.com/service/medical" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Comprehensive Medical Insurance - Birdview MicroInsurance" />
                <meta name="twitter:description" content="Explore our medical insurance plans, covering Inpatient (including Maternity), Outpatient, Dental, and Optical services. Affordable healthcare tailored for Kenyans." />
                <meta name="twitter:image" content="https://www.birdviewmicroinsurance.com/assets/medical-Brds9CG8.png" />
            </Head>

            <MainNavigation />
            <Medical />
            <Footer />
        </>
    );
}

export default MainMedical;
