import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';

// Mui inports 
 
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Button from '@mui/material/Button';

import BackgroundImage from '../components/BackgroundImage'; 
import AnimationDownToUp from  './components/Animation/AnimationDownToUp';
import Image from 'next/image';
 

const Home = ( ) => {

  const [tooltipMessage, setTooltipMessage] = useState("SHARE QR CODE");


  const copyImage = async () => {
         try {
           const imageUrl = '/assets/logo/qrCode.png';
           const image = new window.Image();
           image.crossOrigin = 'anonymous';
           image.src = imageUrl;
       
           image.onload = async () => {
             const canvas = document.createElement('canvas');
             canvas.width = image.width;
             canvas.height = image.height;
       
             const context = canvas.getContext('2d');
             context.drawImage(image, 0, 0);
       
             canvas.toBlob(async (blob) => {
               if (blob) {
                 const item = new ClipboardItem({ [blob.type]: blob });
                 await navigator.clipboard.write([item]);
                 setTooltipMessage("Copied and Shared!");
       
                 // Now trigger the share popup
                 shareImage(imageUrl, blob);
               } else {
                 setTooltipMessage("Failed to copy.");
               }
             }, 'image/png');
           };
       
           image.onerror = () => {
             setTooltipMessage("Failed to load the image.");
           };
         } catch (error) {
           console.error('Error copying image', error);
           setTooltipMessage("Error copying image.");
         }
       };
       
       const shareImage = async (imageUrl, blob) => {
         if (navigator.share) {
           try {
             const file = new File([blob], "qrCode.png", { type: blob.type });
       
             await navigator.share({
               title: "Check out this QR Code!",
               text: "Scan this QR Code now!",
               files: [file], // Sharing the image as a file
               url: imageUrl, // Fallback URL
             });
       
             console.log("Shared successfully");
           } catch (error) {
             console.error("Error sharing", error);
           }
         } else {
           alert("Your browser does not support Web Share API.");
         }
       };
       
 
  return (
    <div className="relative bg-gray-100">
      {/* Top Div with Background Image */}

      <BackgroundImage/>

      {/* Container for Bottom Div */}
      <div className="relative top-[-30px] left-0 right-0 flex justify-center">
        <div className="bg-white w-full max-w-[calc(100%-2rem)]   flex flex-col items-center justify-start overflow-visible rounded-3xl">
          
 

          {/* Components  */}
         
   <div className='bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 p-1 '> 

        {/* Evacuation and Repatriation */}
          <>
          <AnimationDownToUp index={0}>
            
              <div style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }} className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-1/2">
                  <Image   
                      width={800}
                      height={100} 
                      src="/assets/productsPhotos/Evacuation-and-Repatriation.png"
                      alt="Card Image"
                      className="w-[720px] h-[320px] object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-2 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-bold mb-2">Evacuation and Repatriation</h2>
                      <p className="text-gray-700 mb-4">
                        This cover is crafted to intervene and rescue situations of citizens being either stranded or deceased abroad.
                      </p>
                    </div>
                    <div className='flex justify-end mt-auto'>
                      <Button 
                        onClick={() => { 
                          window.location.href = "/service/evacuation-and-repatriation" 
                        }} 
                        startIcon={<ReadMoreIcon />} 
                        size="small" 
                        style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationDownToUp>
       </>
   
         {/* Last Expsense */}
       
          <>
          <AnimationDownToUp index={0}>
         
          <div style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }} className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4">
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2">
              <Image   
                  width={100}
                  height={100} 
                  src="/assets/productsPhotos/last-expenses.png"
                  alt="Card Image"
                  className="w-[720px] h-[320px] object-cover"
                />
              </div>
              <div className="md:w-1/2 p-2 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-bold mb-2">Last Expense</h2>
                  <p className="text-gray-700 mb-4">
                    Our last expense/funeral expense cover pays a specified cash amount within 48 hours of notification of death.
                  </p>
                </div>
                <div className="flex justify-end mt-auto">
                  <Button 
                    onClick={() => { 
                      window.location.href = "/service/last-expense" 
                    }} 
                    startIcon={<ReadMoreIcon />} 
                    size="small" 
                    style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimationDownToUp>
      </>
  
         {/* Medical */}
      
          <>
          <AnimationDownToUp index={0}>
           
            <div style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }} className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/2">
                <Image   
                    width={100}
                    height={100} 
                    src="/assets/productsPhotos/medical.png"
                    alt="Card Image"
                    className="w-[720px] h-[320px] object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-2 flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-bold mb-2">Medical</h2>
                    <p className="text-gray-700 mb-4">
                      Our medical insurance products include inpatient (including Maternity), Outpatient, Dental, and Optical.
                    </p>
                  </div>
                  <div className="flex justify-end mt-auto">
                    <Button 
                      onClick={() => { 
                        window.location.href = "/service/medical"; 
                      }} 
                      startIcon={<ReadMoreIcon />} 
                      size="small" 
                      style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </AnimationDownToUp>

          </>
     
          {/* Hospital Cash */}
    
          <>
          <AnimationDownToUp index={0}>
              
              <div style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }} className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-1/2">
                  <Image   
                      width={100}
                      height={100} 
                      src="/assets/productsPhotos/hospital-cash.png"
                      alt="Card Image"
                      className="w-[720px] h-[320px] object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-2 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-bold mb-2">Hospital Cash</h2>
                      <p className="text-gray-700 mb-4">
                        Daily payments for insureds admitted in hospital for up to a maximum of 10 payments per year or admission.
                      </p>
                    </div>
                    <div className="flex justify-end mt-auto">
                      <Button 
                        onClick={() => { 
                          window.location.href = "/service/hospital-cash"
                        }} 
                        startIcon={<ReadMoreIcon />} 
                        size="small" 
                        style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationDownToUp>

      </>
      
       {/* Persoanal Accident */}
      
          <>
          <AnimationDownToUp index={0}>
              
              <div style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }} className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-1/2">
                  <Image   
                      width={100}
                      height={100} 
                      src="/assets/productsPhotos/personal-accident.png"
                      alt="Card Image"
                      className="w-[720px] h-[320px] object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-2 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-bold mb-2">Personal Accident</h2>
                      <p className="text-gray-700 mb-4">
                        Plan provides fixed sum payout on death, permanent disablement, and medical expenses arising because of an accident.
                      </p>
                    </div>
                    <div className="flex justify-end mt-auto">
                      <Button 
                        onClick={() => { 
                          window.location.href = "/service/personal-accident"
                        }} 
                        startIcon={<ReadMoreIcon />} 
                        size="small" 
                        style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationDownToUp>

      </>
          
      <>
  <AnimationDownToUp index={0}>
    {/* Parent container with shadow and flex styles for centering */}
    <div
      style={{
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
      }}
      className="max-w-3xl mx-auto bg-blueCustom rounded-lg shadow-md mb-4 p-4 flex justify-center items-center h-auto md:h-80"
    >
      {/* Inner content container */}
      <div className="p-4 text-center text-white space-y-4 flex flex-col items-center justify-center">
        <p className="text-lg md:text-xl font-medium">EXCEEDING YOUR EXPECTATION</p>

        <h5 className="w-full max-w-md text-2xl md:text-3xl font-bold text-center font-cursive md:font-sans">
          Insurance Made Simple, Accessible, and Affordable.
        </h5>

        <p className="text-sm md:text-base">
          We offer a range of comprehensive insurance products for Kenyans in the diaspora and within Kenya.
        </p>

        <Tooltip title={tooltipMessage} arrow open={true} >
        <Image
          onClick={copyImage}
          width={800}
          height={100}
          src="/assets/logo/qrCode.png"
          alt="QR Code"
          className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-cover cursor-pointer"
          priority  
        />
      </Tooltip>
      </div>
    </div>
  </AnimationDownToUp>
</>


      </div>
        </div>

      </div>

    </div>
  );
};

export default Home;
