import React from 'react';

// Mui inports 
import Box from '@mui/material/Box';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import BackgroundImage from '../components/BackgroundImage'; 
import AnimationDownToUp from  './components/Animation/AnimationDownToUp';
import AnimationRightToLeft from './components/Animation/AnimationRightToLeft';
 

const PrivacyPolicy = () => {
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
       
          <Box sx={{ padding:1, width:'100%' }}>
            <span className="flex items-center">
              <DoubleArrowIcon className="text-redCustom" />
              Privacy Policy
            </span>
          </Box>

          {/* Components  */}
      <div className='bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 '> 
          <>
          <AnimationDownToUp index={0} >
          
           <div style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }} className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4 h-full flex-grow ">
           <h2 className="text-lg font-bold mb-2">Privacy Policy for BirdView Microinsurance Ltd</h2>
            <div className="relative">
                <p className="text-gray-700 mb-4 text-justify">
                At BirdView Microinsurance Ltd, we are committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, and protect the personal data you provide when using the BirdView Microinsurance Ltd website (hereinafter referred to as the “Website”).
                </p>
            </div>
            <AnimationRightToLeft index={2} >
           
            <h2 className="text-lg font-bold ">Personal Information</h2>
                <p className="text-gray-700 mb-4 text-justify">
                When you visit the Website, we may collect certain personally identifiable information that you voluntarily provide to us. This may include your name, email address, phone number, postal address, and any other information you choose to provide.
                </p>
            
            </AnimationRightToLeft>
            <AnimationRightToLeft index={3} >
            <h2 className="text-lg font-bold ">Automatically Collected Information</h2>
                <p className="text-gray-700 mb-4 text-justify">
                We may also collect certain information automatically when you visit the Website. This may include your IP address, browser type, operating system, referring URLs, date and time of visits, and other usage details.
                </p>
            </AnimationRightToLeft>
            <AnimationRightToLeft index={4} >
            <h2 className="text-lg font-bold ">Cookies</h2>
                <p className="text-gray-700 mb-4 text-justify">
                You have the right to access, update, correct, and delete your personal information. If you would like to exercise any of these rights, please contact us using the information provided below.
                </p>
            </AnimationRightToLeft>
            </div>

        </AnimationDownToUp>
       </>
    
          <>
          <AnimationDownToUp index={0} >
            <div style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }} className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4 h-full flex-grow ">
            <h2 className="text-lg font-bold mb-2">How We Use Your Information</h2>

            <AnimationDownToUp index={0} >
            <p className="text-gray-700 mb-4 text-justify">
            We may use the information we collect for various purposes, including:
            </p>
            </AnimationDownToUp>
            <AnimationDownToUp index={2} >
            <p className="text-gray-700 mb-4 text-justify">
               <PlayArrowIcon className='text-redCustom' /> To provide, maintain, and improve the Website and our services.
            </p>
            </AnimationDownToUp>
            <AnimationDownToUp index={3} >

            <p className="text-gray-700 mb-4 text-justify">
              <PlayArrowIcon className='text-redCustom' /> To respond to your inquiries, requests, and customer service needs.
            </p>
            </AnimationDownToUp>
            <AnimationDownToUp index={4} > 
            <p className="text-gray-700 mb-4 text-justify">
              <PlayArrowIcon className='text-redCustom' /> To detect, prevent, and address technical issues and security vulnerabilities.
            </p>
            </AnimationDownToUp>
            <AnimationDownToUp index={5} >
            <p className="text-gray-700 mb-4 text-justify">
            <PlayArrowIcon className='text-redCustom' /> To send you updates, newsletters, marketing communications, and other information related to our products and services.
            </p>
            </AnimationDownToUp>

            
           
            <AnimationRightToLeft index={4} >
            <h2 className="text-lg font-bold ">Changes to this Privacy Policy</h2>
                <p className="text-gray-700 mb-4 text-justify">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>
            </AnimationRightToLeft>
            </div>

              
          </AnimationDownToUp>
          </>
          <>
          <AnimationDownToUp index={0} >
         
          <div style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }} className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4 h-full flex-grow ">
            <h2 className="text-lg font-bold ">Data Security</h2>
            <p className='text-gray-700 mb-4 text-justify' >
            We take the security of your personal information seriously and implement appropriate technical and organizational measures to protect it from unauthorized access, disclosure, alteration, or destruction.
            </p>

            <AnimationRightToLeft index={2} >
            <h2 className="text-lg font-bold ">Sharing Your Information</h2>
                <p className="text-gray-700 mb-4 text-justify">
                We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted third-party service providers who assist us in operating the Website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
                </p>
            </AnimationRightToLeft >

            <AnimationRightToLeft index={3} >
            <h2 className="text-lg font-bold ">Your Rights</h2>
                <p className="text-gray-700 mb-4 text-justify">
                You have the right to access, update, correct, and delete your personal information. If you would like to exercise any of these rights, please contact us using the information provided below.
                </p>
            </AnimationRightToLeft>

            <AnimationRightToLeft index={4} >
            <h2 className="text-lg font-bold ">Children’s Privacy</h2>
                <p className="text-gray-700 mb-4 text-justify">
                The Website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that we may have collected information from your child, please contact us immediately.
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

export default PrivacyPolicy;
