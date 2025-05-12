import React from 'react';

// Mui inports 
import Box from '@mui/material/Box';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import BackgroundImage from '../components/BackgroundImage';
import AnimationDownToUp from  './components/Animation/AnimationDownToUp';
import AnimationRightToLeft from './components/Animation/AnimationRightToLeft';
 

const CookiesPolicy = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="relative bg-gray-100">
      {/* Top Div with Background Image */}

      <BackgroundImage/>

      {/* Container for Bottom Div */}
      <div className="relative top-[-40px] left-0 right-0 flex justify-center">
        <div className="bg-white w-full max-w-[calc(100%-2rem)] p-2 flex flex-col items-center justify-start overflow-visible rounded-3xl">
          
       
          <Box sx={{ padding:1,width:'100%' }}>
            <span className="flex items-center">
              <DoubleArrowIcon className="text-redCustom" />
              Cookies Policy
            </span>
          </Box>
                
               

          {/* Components  */}
      <div className='bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 '> 

          <>
          <AnimationDownToUp index={0} >
          
           <div style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }} className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4 h-full flex-grow">
           <h2 className="text-lg font-bold mb-2">Cookies Policy for BirdView Microinsurance Ltd</h2>
            <div className="relative">
                <p className="text-gray-700 mb-4 text-justify">
                This Cookies Policy explains what cookies are and how we use them on the BirdView Microinsurance Ltd website (hereinafter referred to as the “Website”). By using the Website, you consent to the use of cookies in accordance with this Cookies Policy.
                </p>
            </div>
            <AnimationRightToLeft index={2} >
            <h2 className="text-lg font-bold ">What are Cookies</h2>
                <p className="text-gray-700 mb-4 text-justify">
                Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Website or a third-party to recognize you and make your next visit easier and the Website more useful to you.
                </p>
            </AnimationRightToLeft>
            <AnimationRightToLeft index={3} >
            <h2 className="text-lg font-bold ">Managing Cookies</h2>
                <p className="text-gray-700 mb-4 text-justify">
                We may update our Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page.
                </p>
            </AnimationRightToLeft>
            <AnimationRightToLeft index={4} >
            <h2 className="text-lg font-bold ">More Information</h2>
                <p className="text-gray-700 mb-4 text-justify">
                For more information about cookies and how to disable them, you can consult the information at www.allaboutcookies.org.
                </p>
            </AnimationRightToLeft>
            </div>

        </AnimationDownToUp>
       </>
    
          <>
          <AnimationDownToUp index={0} >
            <div style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }} className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4 h-full flex-grow">
            <h2 className="text-lg font-bold mb-2">How BirdView Microinsurance Ltd Uses Cookies</h2>

            <AnimationDownToUp index={0} >
            <p className="text-gray-700 mb-4 text-justify">
            When you use and access the Website, we may place a number of cookies files in your web browser. We use cookies for the following purposes:
            </p>
            </AnimationDownToUp>
            <AnimationDownToUp index={3} >
            <p className="text-gray-700 mb-4 text-justify">
               <PlayArrowIcon className='text-redCustom' /> Essential Cookies: These cookies are necessary for the Website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The Website cannot function properly without these cookies.
            </p>
            </AnimationDownToUp>
            <AnimationDownToUp index={4} >

            <p className="text-gray-700 mb-4 text-justify">
              <PlayArrowIcon className='text-redCustom' /> Analytics Cookies: These cookies help us understand how visitors interact with the Website by collecting and reporting information anonymously. We use this information to improve our Website and services.
            </p>
            </AnimationDownToUp>
            <AnimationDownToUp index={6} > 
            <p className="text-gray-700 mb-4 text-justify">
              <PlayArrowIcon className='text-redCustom' /> Preference Cookies: These cookies enable the Website to remember information that changes the way the Website behaves or looks, like your preferred language or the region that you are in.
            </p>
            </AnimationDownToUp>
            <AnimationDownToUp index={7} >
            <p className="text-gray-700 mb-4 text-justify">
            <PlayArrowIcon className='text-redCustom' /> Marketing Cookies: These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
            </p>
            </AnimationDownToUp>
                </div>
          </AnimationDownToUp>
          </>
          <>
          <AnimationDownToUp index={0} >
         
          <div style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }} className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4 h-full flex-grow ">
            <h2 className="text-lg font-bold ">Third-Party Cookies</h2>
            <p className='text-gray-700 mb-4 text-justify' >
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Website and deliver advertisements on and through the Website.
            </p>

            <AnimationRightToLeft index={2} >
            <h2 className="text-lg font-bold ">Managing Cookies</h2>
                <p className="text-gray-700 mb-4 text-justify">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit the Website and some services and functionalities may not work.
                </p>
            </AnimationRightToLeft >

            <AnimationRightToLeft index={3} >
            <h2 className="text-lg font-bold ">Changes to this Cookies Policy</h2>
                <p className="text-gray-700 mb-4 text-justify">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit the Website and some services and functionalities may not work.
                </p>
            </AnimationRightToLeft>
            
        </div>
        </AnimationDownToUp>
      </>
      

      </div>
        </div>

      </div>
      


     

    </div>
  );
};

export default CookiesPolicy;
