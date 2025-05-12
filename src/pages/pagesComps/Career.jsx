import React from 'react';

// Mui imports
import Box from '@mui/material/Box';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import BackgroundImage from '../components/BackgroundImage';
import AnimationDownToUp from './components/Animation/AnimationDownToUp';
import AnimationRightToLeft from './components/Animation/AnimationRightToLeft';
import { Button } from '@mui/material';
import Image from 'next/image';


const Career = () => {
  // Array of job objects
  const jobListings = [
    {
      id: 1,
      jobTitle: "Agent Position",
      jobType: "Full Time",
      company: "Birdview",
      location: "Worldwide",
      pageLink: "https://www.birdview.com/careers/agent-Registration"
    },
    {
      id: 2,
      jobTitle: "Coming Soon...",
      jobType: "Full Time",
      company: "Birdview",
      location: "Nairobi"
    },
    {
      id: 3,
      jobTitle: "Coming Soon...",
      jobType: "Part Time",
      company: "Birdview",
      location: "Nairobi"
    }
  ];

  return (
    <div className="relative bg-gray-100">
      
      {/* Top Div with Background Image */}
      <BackgroundImage />

      {/* Container for Bottom Div */}
      <div className="relative top-[-40px] left-0 right-0 flex justify-center">
        <div className="bg-white w-full max-w-[calc(100%-2rem)] p-4 flex flex-col items-center justify-start overflow-visible rounded-3xl">
          
          <Box sx={{   width: '100%' }}>
            <span className="flex items-center">
              <DoubleArrowIcon className="text-redCustom" />
              Career
            </span>
          </Box>

          {/* Job Listings */}
          <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 w-full">
            {jobListings.map((job, index) => (
              <AnimationDownToUp key={job.id} index={index + 1}>
                <div className="w-full h-1 bg-redCustom"></div>
                <div
                  style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }}
                  className="w-full bg-white rounded-lg shadow-md overflow-hidden p-4"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start">
                    {/* Responsive Image */}
                    <Image
                      width={100}
                      height={100} 
                      src="/assets/logo/logo.jpg"
                      className="w-32 h-auto object-cover mb-4 md:mb-0 md:mr-4"
                    />

                    <div className="flex flex-col md:border-l md:pl-4 w-full">
                      <AnimationRightToLeft index={index + 4}>
                        <p className="text-gray-700 p-3 bg-redCustom text-white">
                          {job.jobType}
                        </p>
                        <p className="text-gray-700 p-3">
                          {job.jobTitle}
                        </p>
                        <hr />
                        <div className="flex flex-wrap items-center">
                          <p className="text-gray-700 p-3">{job.company}</p>
                          <p className="text-gray-700 p-3 flex items-center">
                            <LocationOnIcon className="text-redCustom" /> {job.location}
                          </p>
                        </div>
                        <div className="flex justify-end w-full">
                          <Button onClick={(jobListings)=>{}}>Apply</Button>
                        </div>
                      </AnimationRightToLeft>
                    </div>
                  </div>
                </div>
              </AnimationDownToUp>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
