import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Box from '@mui/material/Box';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import BackgroundImage from '../components/BackgroundImage';
import AnimationDownToUp from './components/Animation/AnimationDownToUp';
import AnimationRightToLeft from './components/Animation/AnimationRightToLeft';

// Blog data
const blogs = [
  {
    title: 'Evacuation & Repatriation Insurance for Kenyans Abroad',
    author: 'Birdview',
    content: `Evacuation and repatriation insurance is essential for Kenyans abroad, offering financial and logistical support for emergencies like medical evacuations, deportations, and repatriating remains, ensuring peace of mind and a dignified return home in times of crisis.`,
    slug: 'Evacuation & Repatriation Insurance for Kenyans Abroad',          
  },
  {
    title: 'How Digital Innovation Is Making Insurance More Accessible in Kenya & Beyond',
    author: 'Birdview',
    content: `Digital innovation, particularly through mobile platforms, QR codes, and automation, is making insurance more accessible, affordable, and efficient in Kenya and beyond, with companies like Birdview Microinsurance leading the way by offering instant, paperless coverage and fast, transparent claims processing`,
    slug: 'How Digital Innovation Is Making Insurance More Accessible in Kenya & Beyond',
  },
  {
    title: 'Affordable Insurance Solutions for Migrant Workers & Kenyans in the Diaspora',
    author: 'Birdview',
    content: `Birdview Microinsurance offers affordable, tailored insurance solutions for Kenyan migrant workers and the diaspora, providing essential coverage for unexpected risks such as job loss, deportation, medical emergencies, and repatriation. With plans that include evacuation and repatriation coverage, last expense assistance, medical insurance for loved ones back home, and travel/job security support, Birdview ensures that migrant workers have a safety net in times of crisis. Designed to be flexible and affordable, these plans offer peace of mind, fast claims processing, and a commitment to protecting both the individual and their family, no matter where they are in the world.`,
    slug: 'Affordable Insurance Solutions for Migrant Workers & Kenyans in the Diaspora',
  },
  {
    title: 'Why Birdview Exists: A Story of Purpose, Protection, and Kenyan Resilience',
    author: 'Birdview',
    content: `At Birdview Insurance, we believe that protection should be simple, affordable, and accessible—especially when it matters most.`,
    slug: 'Why Birdview Exists: A Story of Purpose, Protection, and Kenyan Resilience',
  },
  {
    title: 'Case Study: The Emotional and Financial Toll of Repatriation – A Call for Preparedness',
    author: 'Birdview',
    content: `For many Kenyans living and working abroad, the desire to be laid to rest at home remains a deeply emotional and cultural priority. However, the reality of repatriating a body from a foreign country is not only logistically complex—it is also financially crippling.`,
    slug: 'Case Study: The Emotional and Financial Toll of Repatriation – A Call for Preparedness',
  },
  {
    title: 'Why Traditional Insurance Isn’t Built for Everyone—and How Microinsurance Is Changing the Game',
    author: 'Birdview',
    content: `Insurance is supposed to offer peace of mind during life’s most uncertain moments. But for many people, especially in low- and middle-income communities, traditional insurance simply doesn’t work. It’s not affordable. It’s not accessible. And it doesn’t reflect the realities of everyday life for millions of families.`,
    slug: 'Why Traditional Insurance Isn’t Built for Everyone—and How Microinsurance Is Changing the Game',
  },
];

const BlogList = () => {
  const router = useRouter();

  // Function to redirect to blog post page
  const handleRedirect = (blog) => {
    router.push(`/blog/${blog.slug}`);
  };  

  return (
    <div className="relative bg-gray-100">
      <BackgroundImage />

      <div className="relative top-[-40px] left-0 right-0 flex justify-center">
        <div className="bg-white w-full max-w-[calc(100%-2rem)] p-2 flex flex-col items-center justify-start overflow-visible rounded-3xl">
          <Box sx={{ padding: 1, width: '100%' }}>
            <span className="flex items-center">
              <DoubleArrowIcon className="text-redCustom" />
              Blog Posts
            </span>
          </Box>

          {/* Blog List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.map((blog, index) => (
              <AnimationDownToUp key={blog.slug} index={index}>
                <div
                  className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4 cursor-pointer"
                  onClick={() => handleRedirect(blog)} // Redirect on click
                  style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }}
                >
                  <div className="flex flex-col md:flex-row items-center">
                 
                    <AnimationRightToLeft index={4}>
                      <div className="flex flex-col border-l-4 border-red-500 p-1">
                        <h2 className="text-gray-700 text-lg font-bold hover:text-red-500">
                          {blog.title}
                        </h2>
                        <p className="text-gray-600 italic">By {blog.author}</p>
                        <p className="text-gray-700 mt-2">{blog.content.substring(0, 100)}...</p>
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

export default BlogList;
