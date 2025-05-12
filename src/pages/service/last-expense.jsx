import React from 'react';
import LastExpenses from '../pagesComps/LastExpenses';
import MainNavigation from '../pagesComps/Dashboard';
import Footer from '../components/Footer';
import Head from 'next/head'; 

const MainLastExpense = () => {
    return (
        <>
            <Head>
                {/* Page Title */}
                <title>Last Expense Cover - Quick Payouts for Funeral Costs - Birdview MicroInsurance</title>

                {/* Meta Description for SEO */}
                <meta
                    name="description"
                    content="Birdview MicroInsurance offers a reliable Last Expense cover providing quick payouts within 48 hours of death notification. Coverage limits range from Kshs. 50,000 to Kshs. 500,000, ensuring peace of mind during difficult times."
                />

                {/* Meta Keywords for SEO */}
                <meta
                    name="keywords"
                    content="Last Expense Cover,Birdview,Bird view , MicroInsurance,Insurance, Funeral Expense Cover, Birdview MicroInsurance, Quick Funeral Payout, Affordable Funeral Cover Kenya, Funeral Cover for Kenyans in Diaspora, Financial Support for Funerals"
                />

                {/* Open Graph Tags for Social Media Sharing */}
                <meta property="og:title" content="Last Expense Cover - Quick Payouts for Funeral Costs - Birdview MicroInsurance" />
                <meta property="og:description" content="Get financial support for funeral expenses with Birdview MicroInsurance's Last Expense cover, offering payouts within 48 hours. Choose cover limits from Kshs. 50,000 to Kshs. 500,000 for your peace of mind." />
                <meta property="og:image" content="https://www.birdviewmicroinsurance.com/assets/Evacuation-and-Repatriation-CXCjwsmI.png" />
                <meta property="og:url" content="https://www.birdviewmicroinsurance.com/service/last-expense" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Last Expense Cover - Quick Payouts for Funeral Costs - Birdview MicroInsurance" />
                <meta name="twitter:description" content="Discover Birdview MicroInsurance's Last Expense cover, ensuring quick payouts for funeral costs within 48 hours. Coverage from Kshs. 50,000 to Kshs. 500,000." />
                <meta name="twitter:image" content="https://www.birdviewmicroinsurance.com/assets/Evacuation-and-Repatriation-CXCjwsmI.png" />
            </Head>

            <MainNavigation />
            <LastExpenses />
            <Footer />
        </>
    );
}

export default MainLastExpense;
