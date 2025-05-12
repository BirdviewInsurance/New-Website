import React from 'react';

// Mui inports 
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
 
import BackgroundImage from '../components/BackgroundImage';
import AnimationDownToUp from  './components/Animation/AnimationDownToUp';
import AnimationRightToLeft from './components/Animation/AnimationRightToLeft';
import Image from 'next/image';
 

const Claims = () => {
 
  // Tab Control
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
          {/* Bottom Div Content */}
          
          

          {/* Components  */}
      <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-8 mb-4 '> 
         
          <>
          <AnimationDownToUp index={0} >
            <div style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }} className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4">
            <h2 className="text-lg font-bold mb-2">Claims Process Steps</h2>
            
                <div className="relative">
                    <Image
                    width={100}
                    height={100}
                    src="/assets/pagesPhotos/claimsLady.jpg"
                    alt="Card Image"
                    className="w-64 h-auto float-left mr-4 mb-2 object-cover"
                    />
                    <AnimationRightToLeft index={2} >
                    <p className="text-gray-700 mb-4 text-justify">
                        To make a claim, visit our website and locate the Claims tab. From there, navigate to the product you wish to claim under, and you will be directed to the portal login page. Once logged in, follow the steps outlined in the claims process. 
                    </p>
                    </AnimationRightToLeft>

                </div>
                </div>
          </AnimationDownToUp>
          </>
          <>
          <AnimationDownToUp index={0} >
          {value == 4 && (
              <div className="  w-full h-1 bg-redCustom   "></div>
            )}
        
        <div style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }} className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4">
          <h2 className="text-lg font-bold">Follow these steps:</h2>
          <AnimationDownToUp index={2} >
          <p className="text-gray-700 mb-4 text-justify">
            <b className='text-redCustom'>Step 1:</b> Input your membership number
          </p>
          </AnimationDownToUp>
          <AnimationDownToUp index={3} >

          <p className="text-gray-700 mb-4 text-justify">
            <b className='text-redCustom'>Step 2:</b> Select the policy you would wish to make a claim under
          </p>
          </AnimationDownToUp>
          <AnimationDownToUp index={4} > 
          <p className="text-gray-700 mb-4 text-justify">
            <b className='text-redCustom'>Step 3:</b> Select the benefit type you are claiming, e.g., out-patient
          </p>
          </AnimationDownToUp>
          <AnimationDownToUp index={5} >
          <p className="text-gray-700 mb-4 text-justify">
            <b className='text-redCustom'>Step 4:</b> Indicate the date of loss
          </p>
          </AnimationDownToUp>
          <AnimationDownToUp index={6} > 
          <p className="text-gray-700 mb-4 text-justify">
            <b className='text-redCustom'>Step 5:</b> Indicate the amount you are claiming
          </p>
          </AnimationDownToUp>
          <AnimationDownToUp index={7} > 
          <p className="text-gray-700 mb-4 text-justify">
            <b className='text-redCustom'>Step 6:</b> Select the claims supporting documents you are attaching from the drop-down menu provided
          </p>
          </AnimationDownToUp>
          <AnimationDownToUp index={8} > 
          <p className="text-gray-700 mb-4 text-justify">
            <b className='text-redCustom'>Step 7:</b> Submit the claim
          </p>
          </AnimationDownToUp>
          <AnimationDownToUp index={9} > 
          <p className="text-gray-700 mb-4 text-justify">
            <b className='text-redCustom'>Step 8:</b> You will receive a Claim reference number and an acknowledgement note from us
          </p>
          </AnimationDownToUp>
          <AnimationDownToUp index={10} >
          <p className="text-gray-700 mb-4 text-justify">
            Visit our website, locate the <b className="text-redCustom">Claims</b> tab, and navigate to the targeted product. You will be directed to your portal login where you can follow the steps outlined above.
          </p>
          </AnimationDownToUp>
         
        </div>

        </AnimationDownToUp>
      </>
      

      </div>
        </div>

      </div>
      


     

    </div>
  );
};

export default Claims;
