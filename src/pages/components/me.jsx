import React, { useRef, useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery, Pagination, Button } from '@mui/material';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Image from 'next/image';
import Tooltip from '@mui/material/Tooltip';

 

const BackgroundImage = () => {
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
      
     
    const [isSmallScreen, setIsSmallScreen] = useState(null);  
    const matches = useMediaQuery('(max-width:950px)');
    useEffect(() => {
         
        setIsSmallScreen(matches);
    }, [matches]);  

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,  
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,  
        fade: true,  
        afterChange: (current) => setCurrentSlide(current),  
    };
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const sliderRef = useRef(null);
    
    const handlePaginationChange = (event, value) => {
        sliderRef.current.slickGoTo(value - 1);  
    };

    if (isSmallScreen === null) return null; 

    return (
        <div className="relative bg-gray-300 overflow-hidden  ">

            
            {/* Slider Container */}
            <Slider ref={sliderRef} {...settings}>
             
                  {/* Evacuation And Repatriation */}
                    <div  >
                        <div className={`${!isSmallScreen ? 'hidden' : 'block'} relative h-100`}>
                            {/* Image as Background */}
                            <Image  width={500}  height={300}  className="h-80 w-full object-cover" src="/assets/backgroundPhotes/evac-Repatriation.jpg" alt="Evacuatotion" />

                            {/* small Screen */}
                            <div className="absolute bottom-0 flex flex-col mb-8 items-center justify-center bg-gray-500   bg-opacity-50 w-full p-2">
                                <h6
                                    
                                    className="text-sm sm:text-sm   lg:text-xl font-bold text-white text-center whitespace-normal"
                                >
                                     <span className='text-lg' >Evacuation & Repatriation</span>

                                </h6>
                                <Button 
                                    onClick={() => { 
                                        window.location.href = "/service/evacuation-and-repatriation";
                                    }} 
                                    startIcon={<ReadMoreIcon />} 
                                    size="small" 
                                    style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>
                            {/*Big Screen */}

                        <div className={`${isSmallScreen ? 'hidden' : 'flex'} justify-center items-center h-84 relative`}>
                            <Image  width={500}  height={300} className=" h-80 object-cover" src="/assets/backgroundPhotes/evac-Repatriation.png" alt="Evacuatotion" />

                             <div className="absolute left-20 flex flex-col items-center h-full   justify-center"> {/* Flexbox for vertical centering */}
                                <h6
                                    style={{ fontFamily: 'cursive' }}
                                    className="text-sm sm:text-sm mb-2 lg:text-xl font-bold text-red-500 bg-opacity-50 p-2  rounded text-center whitespace-normal"
                                >
                                    <span >Evacuation & Repatriation</span>
                                </h6>

                                <Button 
                                    onClick={() => { 
                                        window.location.href = "/service/evacuation-and-repatriation";
                                    }} 
                                    startIcon={<ReadMoreIcon />} 
                                    size="small" 
                                    style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}
                                >
                                    Learn more
                                </Button>

                                {/* Centered Pagination */}
                                <Pagination
                                    count={5}
                                    page={currentSlide + 1} // Make it 1-indexed for Pagination
                                    onChange={handlePaginationChange}
                                    sx={{ 
                                        '& .MuiPaginationItem-root': { color: 'white' }, // Change text color to white
                                        '& .MuiPaginationItem-root.Mui-selected': { backgroundColor: '#0D4F8B' }, // Selected color
                                        marginTop: 2 // Add some space between title and pagination
                                    }}
                                />
                            </div>
                                {/* QR CODE */}
                            <div className="absolute right-20 flex flex-col items-center h-full   justify-center   "> {/* Flexbox for vertical centering */}
                                <Tooltip  title={tooltipMessage} open={!isSmallScreen} arrow> 
                                    <div className="image-container">
                                        <Image  onClick={copyImage}  width={250} height={150}  className="image h-[100px] w-[100px] object-cover" src="/assets/logo/qrCode-BgRM.png" alt="Evacuation" />
                                    </div>
                                </Tooltip>  
                            </div>
                            
                        </div>

                    </div>

                    {/* Last Expense */}
                    <div  >
                        <div className={`${!isSmallScreen ? 'hidden' : 'block'} relative h-80`}>
                            {/* Image as Background */}
                            <Image  width={500}  height={300} className="h-80 w-full object-cover" src="/assets/backgroundPhotes/last-expense.png" alt="Last Expanse" />

                            {/* small Screen */}
                            <div className="absolute bottom-0 flex flex-col mb-8 items-center justify-center bg-gray-500  bg-opacity-50 w-full p-2">
                                <h6
                                    
                                    className="text-sm sm:text-sm mb-2 lg:text-xl font-bold text-white text-center whitespace-normal"
                                >
                               <span className='text-lg' >Last Expense Cover</span>

                                </h6>
                                <Button 
                                    onClick={() => { 
                                        window.location.href = "/service/last-expense" ;
                                    }} 
                                    startIcon={<ReadMoreIcon />} 
                                    size="small" 
                                    style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>

                            {/*Big Screen */}
                        <div className={`${isSmallScreen ? 'hidden' : 'flex'} justify-center items-center h-80 relative`}>
                          <Image  width={500}  height={500} style={{marginTop:'20px'}}  className="  object-cover" src="/assets/backgroundPhotes/last-expense.png" alt="Medical" />

                            <div className="absolute left-20 flex flex-col items-center h-full justify-center"> {/* Flexbox for vertical centering */}
                                <h6
                                    style={{ fontFamily: 'cursive' }}
                                    className="text-sm sm:text-sm mb-2 lg:text-xl font-bold text-red-500 bg-opacity-50 p-2 rounded text-center whitespace-normal"
                                >
                                    <span>Last Expense Cover</span>
                                </h6>

                                <Button 
                                    onClick={() => { 
                                        window.location.href = "/service/last-expense" ;
                                    }} 
                                    startIcon={<ReadMoreIcon />} 
                                    size="small" 
                                    style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}
                                >
                                    Learn more
                                </Button>

                                {/* Centered Pagination */}
                                <Pagination
                                    count={5}
                                    page={currentSlide + 1} // Make it 1-indexed for Pagination
                                    onChange={handlePaginationChange}
                                    sx={{ 
                                        '& .MuiPaginationItem-root': { color: 'white' }, // Change text color to white
                                        '& .MuiPaginationItem-root.Mui-selected': { backgroundColor: '#0D4F8B' }, // Selected color
                                        marginTop: 2 // Add some space between title and pagination
                                    }}
                                />
                            </div>

                            {/* QR CODE */}
                            <div className="absolute right-20 flex flex-col items-center h-full   justify-center"> {/* Flexbox for vertical centering */}
                                 <Tooltip  title={tooltipMessage} open={!isSmallScreen} arrow> 
                                    <div className="image-container">
                                        <Image  onClick={copyImage}  width={250} height={150}  className="image h-[100px] w-[100px] object-cover" src="/assets/logo/qrCode-BgRM.png" alt="Evacuation" />
                                    </div>
                                </Tooltip>  
                            </div>

                        </div>
                    </div>

                      {/* Medical */}
                      <div  >
                        <div className={`${!isSmallScreen ? 'hidden' : 'block'} relative h-80`}>
                            {/* Image as Background */}
                            <div className='flex justify-center' >
                            <Image  width={500}  height={300} className=" w-full h-80 object-cover" src="/assets/backgroundPhotes/welcomeImage.png" alt="Medical" />
                             </div>
                             
                            {/* small Screen */}
                            <div className="absolute bottom-0 flex flex-col mb-8 items-center justify-center bg-gray-500  bg-opacity-50 w-full p-2">
                                <h6
                                    
                                    className="text-sm sm:text-sm mb-2 lg:text-xl font-bold text-white text-center whitespace-normal"
                                >
                               <span className='text-lg' >Medical Cover</span>

                                </h6>
                                <Button 
                                    onClick={() => { 
                                        window.location.href ="/service/medical" ;
                                    }} 
                                    startIcon={<ReadMoreIcon />} 
                                    size="small" 
                                    style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>

                            {/*Big Screen */}
                        <div className={`${isSmallScreen ? 'hidden' : 'flex'} justify-center items-center h-80 relative`}>
                        <Image  width={500}  height={300}  style={{marginTop:'20px'}}  className=" object-cover" src="/assets/backgroundPhotes/welcomeImage.png" alt="Medical" />

                            <div className="absolute left-20 flex flex-col items-center h-full justify-center"> {/* Flexbox for vertical centering */}
                                <h6
                                    style={{ fontFamily: 'cursive' }}
                                    className="text-sm sm:text-sm mb-2 lg:text-xl font-bold text-red-500 bg-opacity-50 p-2 rounded text-center whitespace-normal"
                                >
                                    <span>Medical Cover</span>
                                </h6>

                                <Button 
                                    onClick={() => { 
                                        window.location.href = "/service/medical" ;
                                    }} 
                                    startIcon={<ReadMoreIcon />} 
                                    size="small" 
                                    style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}
                                >
                                    Learn more
                                </Button>

                                {/* Centered Pagination */}
                                <Pagination
                                    count={5}
                                    page={currentSlide + 1} // Make it 1-indexed for Pagination
                                    onChange={handlePaginationChange}
                                    sx={{ 
                                        '& .MuiPaginationItem-root': { color: 'white' }, // Change text color to white
                                        '& .MuiPaginationItem-root.Mui-selected': { backgroundColor: '#0D4F8B' }, // Selected color
                                        marginTop: 2 // Add some space between title and pagination
                                    }}
                                />
                            </div>

                             {/* QR CODE */}
                           <div className="absolute right-20 flex flex-col items-center h-full   justify-center"> {/* Flexbox for vertical centering */}
                                <Tooltip  title={tooltipMessage} open={!isSmallScreen} arrow> 
                                    <div className="image-container">
                                        <Image  onClick={copyImage}  width={250} height={150}  className="image h-[100px] w-[100px] object-cover" src="/assets/logo/qrCode-BgRM.png" alt="Evacuation" />
                                    </div>
                                </Tooltip>
                            </div>
    
                        </div>
                    </div>
            
                     {/* Hospital Cover */}
                     <div  >
                        <div className={`${!isSmallScreen ? 'hidden' : 'block'} relative h-80`}>
                            {/* Image as Background */}
                            <Image  width={500}  height={300} className="h-80 w-full object-cover" src="/assets/backgroundPhotes/hospital-Cash.png" alt="Hospital Cover" />

                            {/* small Screen */}
                            <div className="absolute bottom-0 flex flex-col mb-8 items-center justify-center bg-gray-500  bg-opacity-50 w-full p-2">
                                <h6
                                    
                                    className="text-sm sm:text-sm mb-2 lg:text-xl font-bold text-white text-center whitespace-normal"
                                >
                               <span className='text-lg' >Hospital Cash Cover</span>

                                </h6>
                                <Button 
                                    onClick={() => { 
                                        window.location.href ="/service/hospital-cash" ;
                                    }} 
                                    startIcon={<ReadMoreIcon />} 
                                    size="small" 
                                    style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>

                            {/*Big Screen */}
                        <div className={`${isSmallScreen ? 'hidden' : 'flex'} justify-center items-center h-80 relative`}>
                        <Image  width={500}  height={300} className="h-80 object-cover" src="/assets/backgroundPhotes/hospital-Cash.png" alt="Hospital Cover" />

                            <div className="absolute left-20 flex flex-col items-center h-full justify-center"> {/* Flexbox for vertical centering */}
                                <h6
                                    style={{ fontFamily: 'cursive' }}
                                    className="text-sm sm:text-sm mb-2 lg:text-xl font-bold text-red-500 bg-opacity-50 p-2 rounded text-center whitespace-normal"
                                >
                                    <span>Hospital Cash Cover</span>
                                </h6>

                                <Button 
                                    onClick={() => { 
                                        window.location.href ="/service/hospital-cash" ;
                                    }} 
                                    startIcon={<ReadMoreIcon />} 
                                    size="small" 
                                    style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}
                                >
                                    Learn more
                                </Button>

                                {/* Centered Pagination */}
                                <Pagination
                                    count={5}
                                    page={currentSlide + 1} // Make it 1-indexed for Pagination
                                    onChange={handlePaginationChange}
                                    sx={{ 
                                        '& .MuiPaginationItem-root': { color: 'white' }, // Change text color to white
                                        '& .MuiPaginationItem-root.Mui-selected': { backgroundColor: '#0D4F8B' }, // Selected color
                                        marginTop: 2 // Add some space between title and pagination
                                    }}
                                />
                            </div>

                                {/* QR CODE */}
                            <div className="absolute right-20 flex flex-col items-center h-full   justify-center"> {/* Flexbox for vertical centering */}
                                <Tooltip  title={tooltipMessage} open={!isSmallScreen} arrow> 
                                    <div className="image-container">
                                        <Image  onClick={copyImage}  width={250} height={150}  className="image h-[100px] w-[100px] object-cover" src="/assets/logo/qrCode-BgRM.png" alt="Evacuation" />
                                    </div>
                                </Tooltip>  
                            </div>

                        </div>
                    </div>
                 
                    {/* Personal Accident Cover */}
                    <div  >
                        <div className={`${!isSmallScreen ? 'hidden' : 'block'} relative h-80`}>
                            {/* Image as Background */}
                            <div className='flex justify-center' >
                            <Image  width={500}  height={300}className="h-[300px] w-[320px] object-cover" src="/assets/backgroundPhotes/personal-accident.png" alt="Personal Accident Cover" />
                            </div>

                            {/* small Screen */}
                            <div className="absolute bottom-0 flex flex-col mb-8 items-center justify-center bg-gray-500  bg-opacity-50 w-full p-2">
                                <h6
                                    
                                    className="text-sm sm:text-sm mb-2 lg:text-xl font-bold text-white text-center whitespace-normal"
                                >
                               <span className='text-lg' >Personal Accident Cover</span>

                                </h6>
                                <Button 
                                    onClick={() => { 
                                        window.location.href ="/service/personal-accident" ;
                                    }} 
                                    startIcon={<ReadMoreIcon />} 
                                    size="small" 
                                    style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>
  
                            {/*Big Screen */}
                        <div className={`${isSmallScreen ? 'hidden' : 'flex'} justify-center items-center h-80 relative`}>
                         <Image  width={500}  height={300}className="h-[300px] w-300px] object-cover" src="/assets/backgroundPhotes/personal-accident.png" alt="Personal Accident Cover" />

                            <div className="absolute left-20    flex flex-col items-center h-full justify-center"> {/* Flexbox for vertical centering */}
                                <h6
                                    style={{ fontFamily: 'cursive' }}
                                    className="text-sm sm:text-sm mb-2 lg:text-xl font-bold text-red-500 bg-opacity-50 p-2 rounded text-center whitespace-normal"
                                >
                                    <span>Personal Accident Cover</span>
                                </h6>

                                <Button 
                                    onClick={() => { 
                                        window.location.href ="/service/personal-accident" ;
                                    }} 
                                    startIcon={<ReadMoreIcon />} 
                                    size="small" 
                                    style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}
                                >
                                    Learn more
                                </Button>   

                                {/* Centered Pagination */}
                                <Pagination
                                    count={5}
                                    page={currentSlide + 1} // Make it 1-indexed for Pagination
                                    onChange={handlePaginationChange}
                                    sx={{ 
                                        '& .MuiPaginationItem-root': { color: 'white' }, // Change text color to white
                                        '& .MuiPaginationItem-root.Mui-selected': { backgroundColor: '#0D4F8B' }, // Selected color
                                        marginTop: 2 // Add some space between title and pagination
                                    }}
                                />
                            </div>

                              {/* QR CODE */}
                              <div className="absolute right-20 flex flex-col items-center h-full   justify-center"> {/* Flexbox for vertical centering */}
                                <Tooltip  title={tooltipMessage} open={!isSmallScreen} arrow> 
                                    <div className="image-container">
                                        <Image  onClick={copyImage}  width={250} height={150}  className="image h-[100px] w-[100px] object-cover" src="/assets/logo/qrCode-BgRM.png" alt="Evacuation" />
                                    </div>
                                </Tooltip> 
                            </div>
                        </div>

                          
                    </div>
            


            </Slider>
        </div>
    )
}

export default BackgroundImage;
