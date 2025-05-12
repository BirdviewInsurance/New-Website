import React from 'react';
import EvacAndRepatriation from '../pagesComps/EvacAndRepatriation';
import MainNavigation from '../pagesComps/Dashboard';
import Footer from '../components/Footer';
import Head from 'next/head'; 

const MainEvacAndRepatriation = () => {
    return (
        <>
            <Head>
                {/* Page Title */}
                <title>Evacuation & Repatriation Insurance - Birdview MicroInsurance</title>

                {/* Meta Description for SEO */}
                <meta
                    name="description"
                    content="Secure your peace of mind with Birdview MicroInsurance's comprehensive evacuation and repatriation insurance plans. Tailored coverage designed for Kenyans living abroad, ensuring safe and reliable transport during emergencies."
                />

                {/* Meta Keywords for SEO */}
                <meta
                    name="keywords"
                    content="Evacuation Insurance, Birdview, Bird view , MicroInsurance,Insurance, Repatriation Insurance, Birdview MicroInsurance, Emergency Coverage, Affordable Insurance in Kenya, Diaspora Insurance, Safe Travel Insurance, Emergency Evacuation Plans"
                />

                {/* Open Graph Tags for Social Media Sharing */}
                <meta property="og:title" content="Evacuation & Repatriation Insurance - Birdview MicroInsurance" />
                <meta property="og:description" content="Discover reliable evacuation and repatriation insurance plans at Birdview MicroInsurance. We provide tailored coverage for Kenyans in the diaspora to ensure safe and effective emergency assistance." />
                <meta property="og:image" content="https://www.birdviewmicroinsurance.com/assets/Evacuation-and-Repatriation-CXCjwsmI.png" />
                <meta property="og:url" content="https://www.birdviewmicroinsurance.com/service/evacuation-and-repatriation" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Evacuation & Repatriation Insurance - Birdview MicroInsurance" />
                <meta name="twitter:description" content="Get peace of mind with Birdview MicroInsurance's evacuation and repatriation insurance. Comprehensive and affordable plans for Kenyans in the diaspora." />
                <meta name="twitter:image" content="https://www.birdviewmicroinsurance.com/assets/Evacuation-and-Repatriation-CXCjwsmI.png" />
            </Head>

            <MainNavigation />
            <EvacAndRepatriation />
            <Footer />
        </>
    );
}

export default MainEvacAndRepatriation;
