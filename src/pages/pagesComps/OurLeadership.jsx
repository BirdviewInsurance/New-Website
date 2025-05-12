import React from 'react';

// Mui imports
import Box from '@mui/material/Box';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Image from 'next/image';

import { useRouter } from 'next/router';

import BackgroundImage from '../components/BackgroundImage';

import AnimationDownToUp from './components/Animation/AnimationDownToUp';
import AnimationRightToLeft from './components/Animation/AnimationRightToLeft';

// Leader data
const leaders = [
  {
    name: 'Mr. Richard Muiru',
    title: 'Director',
    image: "/assets/managementPhotos/Richard-Muiru.png",
    description: `Mr. Richard Muiru serves as a Director at Birdview. Richard joined Birdview out of his strong passion to support Kenyans in the diaspora, driven by a commitment to providing accessible and reliable insurance solutions. His entrepreneurial journey and extensive experience in both Kenyan and UK markets position him as a vital asset to the company. With over three decades of experience in various industries, Richard's business acumen and leadership skills are well-recognize in Kenya and UK. He is the driving force behind several thriving enterprises. Richard's diverse educational background equips him with a unique blend of skills and knowledge. He holds a Bachelors Degree in Leadership and Management from Phoenix University USA, a Diploma in Air Traffic and Control Services from Kenya Airforce and Aviation School, a Diploma in Social Services from the UK, enhancing his understanding of community needs and social support mechanisms. Richard also possesses a Certificate of Proficiency (COP) in Insurance, further broadening his expertise in risk management and financial services.`,
    slug: 'richard-muiru',  
  },
  {
    name: 'Mr. Geoffrey Kangwana',
    title: 'Chairman - Board of Directors',
    image: "/assets/managementPhotos/Geoffrey-Kangwana.png",
    description: `Mr. Geoffrey Kangwana serves as the Chairman of the Board of Directors, bringing a wealth of actuarial expertise to the role. With a distinguished background that includes being a Fellow of the Institute and Faculty of Actuaries in the UK, Geoffrey holds both bachelor's and master's degrees in Actuarial Science. Geoffrey is an insurance expert, having held significant positions such as Head of Actuarial at Jubilee Health Insurance Kenya and Senior Consultant at Deloitte UK. Geoffrey’s combination of academic achievements and practical experience positions him well to contribute to Birdview’s strategic initiatives and ongoing success in the insurance sector.`,
    slug: 'geoffrey-kangwana',
  },
 
  {
    name: 'Mr. James Kimani',
    title: 'Director and CEO',
    image: "/assets/managementPhotos/James-Kimani.png",
    description: 'James Kimani assumes the role of Director and Chief Executive Officer at Birdview, bringing with him extensive experience and expertise in the insurance sectorr. With a degree in Mathematics, an MBA in Strategic Management from the University of Nairobi, and accreditation as an Associate of the Insurance Institute of London, James boasts a strong educational foundation. His 25-year tenure in insurance, particularly his two-decade journey at Britam, showcases his remarkable ascent from a management trainee to a senior manager in Microinsurance. James has held diverse managerial positions, including Business Development Manager, Research and Innovation Manager, and Underwriting Manager, demonstrating his versatility and leadership acumen. His strategic vision and wealth of industry knowledge position him well to lead Birdview towards continued success and growth in the insurance market.',
    slug: 'james-kimani',
  },
 
  {
    name: 'Mr. Obed Menjeri',
    title: 'Director',
    image: "/assets/managementPhotos/Obed-Menjeri.png",
    description: 'Mr. Obed Menjeri serves as a Director and Head of Business Development, bringing over a decade of experience in fostering strategic partnerships, expanding market presence, and driving sustainable growth. With a background spanning esteemed organizations such as the Insurance Regulatory Authority, Kenya Commercial Bank, and ICEA Lion, he has demonstrated prowess in revenue generation, product launches, and collaborative ventures. Holding a Masters Degree in Actuarial Science and various certifications, Obed is committed to continuous learning and innovation. In his new role, he will spearhead growth initiatives, forge strategic alliances, and drive expansion efforts, positioning Birdview Microinsurance for success in realizing its vision and maximizing value for stakeholders',
    slug: 'obed-menjeri',
  },
  {
    name: 'Mr. James Nyakundi',
    title: 'Director',
    image: "/assets/managementPhotos/James-Nyakundi.png",
    description: 'Mr. James Nyakundi is a Director at Birdview .He is a dynamic professional with a diverse educational background, holding a degree in Economics, a Masters in Research and Public Policy, a Higher Diploma in Human Resources, and being a Certified Public Accountant (CPA) finalist. With over 8 years of experience in project management and human resource transformation.James has demonstrated his expertise in driving organizational success. Previously, he held pivotal roles at PwC as an Associate Manager and at AH Consulting as the Chief Consulting Officer for East Africa. James brings a wealth of knowledge and leadership to his new position at Birdview, where he is poised to contribute significantly to the company’s strategic initiatives and continued growth.',
    slug: 'james-nyakundi',
  },
];

const OurLeadership = () => {
  const router = useRouter();
  

  const handleRedirect = (leader) => {
    router.push(`/team/${leader.slug}`); // Redirect based on leader's slug
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
              Our Leadership
            </span>
          </Box>

          {/* Leader Cards */}
          <div className='bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>


            {leaders.map((leader, index) => (
              <AnimationDownToUp key={leader.slug} index={index}>
                <div
                  style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }}
                  className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4 h-full flex-grow"
                >
                  <div className="flex flex-col md:flex-row items-center">
                    <Image
                      width={250}
                      height={100}
                      src={leader.image}
                      alt={leader.title}
                      className="sm:w-48 h-64 md:h-auto object-cover mb-4 mr-4"
                    />
                      <AnimationRightToLeft index={4}>
                    <div className="flex flex-col border-l-4 border-red-500 h-full p-1">
                        <p
                          className="text-gray-700 text-lg font-bold cursor-pointer hover:text-red-500"
                          onClick={() => handleRedirect(leader)} // Redirect to dynamic page
                        >
                          {leader.title}
                        </p>
                        <p
                          className="text-gray-700 cursor-pointer hover:text-red-500"
                          onClick={() => handleRedirect(leader)} // Open modal for details
                        >
                          {leader.name}
                        </p>
                    </div>
                    </AnimationRightToLeft>

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

export default OurLeadership;
