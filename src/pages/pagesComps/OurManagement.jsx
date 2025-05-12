import React  from 'react';

// Mui imports
import Box from '@mui/material/Box';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import { useRouter } from 'next/router';

import BackgroundImage from '../components/BackgroundImage'; 
import AnimationDownToUp from './components/Animation/AnimationDownToUp';
import AnimationRightToLeft from './components/Animation/AnimationRightToLeft';
import Image from 'next/image';

// Leader data with slug added

const leaders = [
  {
    name: 'Mr. James Kimani',
    title: 'CEO & Principal Officer',
    image: "/assets/managementPhotos/James-Kimani.png",
    description: 'James Kimani assumes the role of Director and Chief Executive Officer at Birdview, bringing with him extensive experience and expertise in the insurance sector. With a degree in Mathematics, an MBA in Strategic Management from the University of Nairobi, and accreditation as an Associate of the Insurance Institute of London, James boasts a strong educational foundation. His 25-year tenure in insurance, particularly his two-decade journey at Britam, showcases his remarkable ascent from a management trainee to a senior manager in Microinsurance. James has held diverse managerial positions, including Business Development Manager, Research and Innovation Manager, and Underwriting Manager, demonstrating his versatility and leadership acumen. His strategic vision and wealth of industry knowledge position him well to lead Birdview towards continued success and growth in the insurance market.',
    slug: 'james-kimani-',
  },
  {
    name: 'Ms. Mary Mundia',
    title: 'Finance Manager',
    image: "/assets/managementPhotos/Mary-Mundia.png",
    description: 'Mary Mundia is the Finance Manager at Birdview, where she leads the company’s financial operations and ensures its financial health. She holds a bachelor’s degree in finance and business management, in addition to being a Certified Public Accountant (CPAK). With over 15 years of experience in financial management and accounting, Mary brings a wealth of expertise to her role. Prior to joining Birdview, she served as the Head of Finance for the General Insurance Business at a leading insurance firm. In this role, she developed deep expertise in financial operations, budgeting, forecasting, and financial reporting. Her strong analytical skills and strategic approach play a crucial role in driving effective financial decision-making at Birdview.',
    slug: 'mary-mundia',
  },
  {
    name: 'Ms. Mercy Andaro',
    title: 'Claims Manager',
    image: "/assets/managementPhotos/Mercy-Andaro.png",
    description: 'Mercy Andaro serves as the Claims Manager at Birdview, where she leads the claims processing team to ensure efficient and fair claim settlements for clients. She holds a bachelor’s degree from Jomo Kenyatta University of Agriculture and Technology (JKUAT) and an Advance Diploma in Insurance(ACII) from the Chartered Insurance Institute of London. With over 10 years of experience in Claims Management, Mercy has a proven track record in handling complex claims and providing exceptional customer service. Her commitment to resolving client issues and her expertise in risk assessment play a crucial role in maintaining client trust and satisfaction at Birdview.',
    slug: 'mercy-andaro',
  },
  {
    name: 'Mr. Patrick Kihuria',
    title: 'Underwriting Manager',
    image: "/assets/managementPhotos/Patrick-Kihuria.png",
    description: 'He holds a degree in Business Administration and Marketing, a Diploma in Insurance, and is a Certified Expert in Microinsurance. He has over 20 years of experience in underwriting within the insurance industry.',
    slug: 'patrick-kihuria',
  }
  
];

const OurManagement = () => {
  const router = useRouter();
  

  const handleRedirect = (leader) => {
    router.push(`/team/${leader.slug}`);
  };

  return (
    <div className="relative bg-gray-100">
      {/* Top Div with Background Image */}
      <BackgroundImage />

      {/* Container for Bottom Div */}
      <div className="relative top-[-40px] left-0 right-0 flex justify-center">
        <div className="bg-white w-full max-w-[calc(100%-2rem)] p-2 flex flex-col items-center justify-start overflow-visible rounded-3xl">
           
 

          <Box sx={{ padding: 1, width: '100%' }}>
            <span className="flex items-center">
              <DoubleArrowIcon className="text-redCustom" />
              Our Management
            </span>
          </Box>

          {/* Management Cards */}
          <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {leaders.map((leader, index) => (
              <AnimationDownToUp key={leader.slug || leader.name} index={index}>
                <div
                  style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }}
                  className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4 h-full flex-grow"
                >
                  <div className="flex flex-col md:flex-row items-center">
                    <Image
                      width={250}
                      height={100}
                      src={leader.image}
                      alt={`Photo of ${leader.name}`}
                      className="sm:w-48 h-64 md:h-auto object-cover mb-4 mr-4"
                    />

                    <div className="flex flex-col border-l-4 border-red-500 p-3">
                      <AnimationRightToLeft index={4}>
                        <p
                          className="text-gray-700 text-lg font-bold cursor-pointer hover:text-red-500"
                          onClick={() => handleRedirect(leader)}
                        >
                          {leader.title}
                        </p>
                        <p
                          className="text-gray-700 cursor-pointer hover:text-red-500"
                          onClick={() => handleRedirect(leader)}
                        >
                          {leader.name}
                        </p>
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

export default OurManagement;
