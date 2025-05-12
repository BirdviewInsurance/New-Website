import React, { useState } from 'react';

// MUI imports
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

// Custom animation imports
import AnimationDownToUp from './components/Animation/AnimationDownToUp';
import BackgroundImage from '../components/BackgroundImage'; 
import Image from 'next/image';
import Modal from '@mui/material/Modal';

const NoticeBoard = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpen = (notice) => {
    setSelectedNotice(notice);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedNotice(null);
  };

  const notices = [
    {
      title: "Evacuation & Repatriation Dinner",
      description: "The Dinner was held on the 10th March 2025 at Radisson Blu Hotel in collaboration with the Kenya National Chamber of Commerce & Industry (KNCCI)",
      image: "/assets/noticeBoard/Evac Conference.jpeg",
      slug: "Read More",
      details: "The Evacuation & Repatriation Dinner  served as a pivotal platform for discussing global insurance solutions for emergency evacuations. Industry experts shared valuable insights on best practices, emerging challenges, and innovative approaches to medical repatriation. The event brought together key stakeholders, including top agencies specializing in international workforce deployment."
    },    
    {
      title: "New Product Launch: Diaspora Insurance Coverage",
      description: "We are excited to announce our new insurance product tailored specifically for Kenyans living abroad. Our Diaspora Insurance Coverage ensures you and your loved ones back home have peace of mind with comprehensive medical and personal accident insurance."
    }, 
    {
      title: "Client Testimonials: Hear from our Customers!",
      description: "See what our satisfied customers have to say about our services. Visit our website to read real-life stories of how Birdview Microinsurance has made a difference in their lives."
    },
    {
      title: "24-Hour Customer Service",
      description: "Birdview Microinsurance is proud to offer 24-hour customer service to ensure that all your inquiries and claims are handled promptly, no matter the time of day."
    },
    {
      title: "Our Location: Visit Us!",
      description: "We are located at Ground Floor, Fidelity Center, Waiyaki Way, Westlands, Nairobi. Feel free to visit us for any assistance or inquiries about our insurance products."
    }
  ];
  
  return (
    <div className="relative bg-gray-100">
      {/* Top Div with Background Image */}
      <BackgroundImage />

      {/* Container for Bottom Div */}
      <div className="relative top-[-40px] left-0 right-0 flex justify-center">
        <div className="bg-white w-full max-w-[calc(100%-2rem)] p-4 flex flex-col items-center justify-start overflow-visible rounded-3xl">
          
          {/* Scrollable Tabs component */}
          <Box sx={{ width: '100%', marginBottom: 4 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="scrollable tabs example"
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab 
                  label={
                    <span className="flex items-center">
                      <DoubleArrowIcon className="text-redCustom" />
                      Notice Board
                    </span>
                  }
                />
              </Tabs>
            </Box>
          </Box>

          {/* Notices Grid */}
          <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4"> 
            {notices.map((notice, index) => (
              <AnimationDownToUp key={index} index={index}>
                <div 
                  style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }} 
                  className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4 h-full flex-grow"
                >
                  {notice.image && (
                    <div className="mb-3 flex justify-center">
                      <Image 
                        src={notice.image} 
                        alt={notice.title} 
                        width={400} 
                        height={250} 
                        className="rounded-lg object-cover"
                      />
                    </div>
                  )}
                  <h2 className="text-lg font-bold mb-2">{notice.title}</h2>
                  <p className="text-gray-700 mb-4 text-justify">{notice.description}</p>
                  
                  {notice.slug && notice.details && (
                    <button 
                      onClick={() => handleOpen(notice)} 
                      className="text-blue-500 hover:underline"
                    >
                      {notice.slug}
                    </button>
                  )}
                </div>
              </AnimationDownToUp>
            ))}
          </div>
        </div>
      </div>

      {/* Event Pop-up Modal (Now Bigger on Laptops) */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="event-modal-title"
        aria-describedby="event-modal-description"
      >
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[400px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] max-h-[90vh] overflow-y-auto">
          {selectedNotice && (
            <>
              {selectedNotice.image && (
                <div className="mb-4 flex justify-center">
                  <Image 
                    src={selectedNotice.image} 
                    alt={selectedNotice.title} 
                    width={500} 
                    height={300} 
                    className="rounded-lg object-cover"
                  />
                </div>
              )}
              <h2 id="event-modal-title" className="text-xl font-bold mb-2">
                {selectedNotice.title}
              </h2>
              <Typography id="event-modal-description" className="text-gray-700 mb-4">
                {selectedNotice.details}
              </Typography>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default NoticeBoard;
