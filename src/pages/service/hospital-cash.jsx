import React from 'react';
import HospitalCash from '../pagesComps/HospitalCash';
import MainNavigation from '../pagesComps/Dashboard';
import Footer from '../components/Footer';
import Head from 'next/head'; 

const MainHospitalCash = () => {
    return (
        <>
            <Head>
                {/* Page Title */}
                <title>Hospital Cash Insurance - Daily Payments for Hospital Admission - Birdview MicroInsurance</title>

                {/* Meta Description for SEO */}
                <meta
                    name="description"
                    content="Birdview MicroInsurance offers comprehensive Hospital Cash Insurance that provides daily cash payments for insured individuals admitted to the hospital. Receive up to 10 payments per year, starting from the second day of admission, with daily benefits ranging from Kshs.2,000 to Kshs.5,000."
                />

                {/* Meta Keywords for SEO */}
                <meta
                    name="keywords"
                    content="Hospital Cash Insurance, Birdview,Bird view , MicroInsurance,Insurance, Daily Hospital Payments, Birdview MicroInsurance, Insurance for Hospital Admission, Affordable Hospital Coverage in Kenya, Daily Benefit Payments, Hospital Insurance Kenya"
                />

                {/* Open Graph Tags for Social Media Sharing */}
                <meta property="og:title" content="Hospital Cash Insurance - Daily Payments for Hospital Admission - Birdview MicroInsurance" />
                <meta property="og:description" content="Get reliable Hospital Cash Insurance from Birdview MicroInsurance, offering daily payments for hospital admissions. Enjoy up to 10 payments a year with benefits between Kshs.2,000 and Kshs.5,000." />
                <meta property="og:image" content="https://www.birdviewmicroinsurance.com/assets/hospital-cash-DbW3H3La.png" />
                <meta property="og:url" content="https://www.birdviewmicroinsurance.com/service/hospital-cash" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hospital Cash Insurance - Daily Payments for Hospital Admission - Birdview MicroInsurance" />
                <meta name="twitter:description" content="Discover Birdview MicroInsurance's Hospital Cash Insurance, providing daily cash payments for hospital admissions. Coverage for up to 10 payments annually, with benefits ranging from Kshs.2,000 to Kshs.5,000." />
                <meta name="twitter:image" content="https://www.birdviewmicroinsurance.com/assets/hospital-cash-DbW3H3La.png" />
            </Head>

            <MainNavigation />
            <HospitalCash />
            <Footer />
        </>
    );
}

export default MainHospitalCash;
