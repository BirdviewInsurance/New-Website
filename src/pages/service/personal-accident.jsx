import React from 'react';
import PersonalAccident from '../pagesComps/PersonalAccident';
import MainNavigation from '../pagesComps/Dashboard';
import Footer from '../components/Footer';
import Head from 'next/head'; 

const MainPersonalAccident = () => {
    
    return (
        <>
            <Head>
                {/* Page Title */}
                <title>Personal Accident Insurance - Fixed Payouts for Death, Disability & Medical Expenses - Birdview MicroInsurance</title>

                {/* Meta Description for SEO */}
                <meta
                    name="description"
                    content="Birdview MicroInsurance provides Personal Accident Insurance that offers fixed payouts for death, permanent disablement, and medical expenses due to accidents. Coverage limits range from Kshs. 50,000 to Kshs. 500,000."
                />

                {/* Meta Keywords for SEO */}
                <meta
                    name="keywords"
                    content="Personal Accident Insurance,Birdview,Bird view , MicroInsurance, Insurance, Birdview MicroInsurance, Fixed Payout Insurance, Accident Coverage Kenya, Disability Insurance, Medical Expenses Coverage, Death Benefit Insurance, Affordable Accident Insurance Kenya"
                />

                {/* Open Graph Tags for Social Media Sharing */}
                <meta property="og:title" content="Personal Accident Insurance - Birdview MicroInsurance" />
                <meta property="og:description" content="Secure your future with Birdview MicroInsurance's Personal Accident Insurance. Get fixed payouts for death, permanent disablement, and medical expenses from accidents, with coverage from Kshs. 50,000 to Kshs. 500,000." />
                <meta property="og:image" content="https://www.birdviewmicroinsurance.com/assets/personal-accident-C4RauQRr.png" />
                <meta property="og:url" content="https://www.birdviewmicroinsurance.com/service/personal-accident" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Personal Accident Insurance - Birdview MicroInsurance" />
                <meta name="twitter:description" content="Explore Birdview MicroInsurance's Personal Accident Insurance for fixed payouts on death, permanent disablement, and medical expenses due to accidents. Coverage from Kshs. 50,000 to Kshs. 500,000." />
                <meta name="twitter:image" content="https://www.birdviewmicroinsurance.com/assets/personal-accident-C4RauQRr.png" />
            </Head>

            <MainNavigation />
            <PersonalAccident />
            <Footer />
        </>
    );
}

export default MainPersonalAccident;
