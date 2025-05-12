import React from 'react';

// Mui inports 
 
import Image from 'next/image';
import BackgroundImage from '../components/BackgroundImage';
import AnimationDownToUp from  './components/Animation/AnimationDownToUp';

 

const AboutUs = () => {

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
         

          

          {/* Components  */}
          <div className='bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 '>  
          <>
          <AnimationDownToUp index={0} >
            
           <div style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }} className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4 h-full flex-grow">
           <h2 className="text-lg font-bold mb-2">About Birdview</h2>
            <div className="relative">
            <Image
                width={450 }
                height={320}
                src="/assets/logo/logo1.png"
                alt="Birdview Logo"
                className="w-full max-w-xs h-auto float-left mr-4 mb-2 object-cover"
              />
                <h2 className="text-lg font-bold ">Our Story: Why Birdview Was Born</h2>
                <p className="text-gray-700 mb-4 text-justify">
                Birdview Insurance was founded to address the urgent and often overwhelming challenges faced by families during medical emergencies, cross-border crises, and end-of-life arrangements. Too often, Kenyans struggle with the emotional and financial burden of securing emergency evacuation or repatriation, with no clear starting point. Our goal is to bridge this gap by offering reliable, compassionate, and professional support when it matters most.
                </p>
                <p className="text-gray-700 mb-4 text-justify">
                By working closely with trusted medical, transport, and diplomatic partners, we ensure that no family has to navigate these critical moments alone. Our solutions are built with a deep understanding of the logistical complexities involved, allowing us to provide fast, seamless, and dignified assistance to those in need.  
                </p>
                <h2 className="text-lg font-bold ">Our Mission</h2>
                <p className="text-gray-700 mb-4 text-justify">
                To provide accessible, affordable, and comprehensive insurance solutions to Kenyans both locally and in diaspora countries, ensuring peace of mind and financial security in times of need.
                </p>
            
            <h2 className="text-lg font-bold ">Our Vision</h2>
                <p className="text-gray-700 mb-4 text-justify">
                To be the leading provider of insurance solutions in Kenya, recognized for our commitment to customer satisfaction, innovation, and social responsibility, while extending our reach and impact to Kenyan communities across the globe.
                </p>
            </div>
           
            </div>

        </AnimationDownToUp>
       </>
    
          <>
          <AnimationDownToUp index={0} >
            <div style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }} className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4 h-full flex-grow">
                            <div className="relative">
                    <Image
                    width={800}
                    height={600}
                    src="/assets/pagesPhotos/About-maasai.jpg"
                    alt="Card Image"
                    className="w-64 h-auto float-left mr-4 mb-2 object-cover"
                    />
                     <h2 className="text-lg font-bold mb-2">Accessible, affordable, and comprehensive insurance solutions</h2>
                     <p className="text-gray-700 mb-4 text-justify">
                Birdview Insurance is a Kenyan initiative driven by the desire to provide essential financial security to Kenyans at home and in the diaspora, particularly during challenging times. We provide professional, affordable, and compassionate solutions in evacuation and repatriation, medical insurance and last expense services - ensuring that when crisis strikes, help is available, reliable, and dignified.
                Our approach is simple: act fast, serve with heart, and restore dignity. We are not just building a company — we are building a lifeline.
                </p>
                <h2 className="text-lg font-bold ">Our commitment to financial security</h2>
                    <p className="text-gray-700 mb-4 text-justify">
                        Our mission is rooted in the commitment to providing financial security and peace of mind to our customers during times of need. Through user-friendly platforms and strategic partnerships, we strive to make insurance accessible and affordable to all, ensuring that every Kenyan can protect what matters most.
                    </p>
                </div>
                
                </div>
          </AnimationDownToUp>
          </>
          <>
          <AnimationDownToUp index={0} >
          {value == 4 && (
              <div className="  w-full h-1 bg-redCustom   "></div>
            )}
        
       <div style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }} className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4 h-full flex-grow">      
        <h2 className="text-lg font-bold ">Objectives</h2>
            <p className="text-gray-700 mb-4 text-justify">
            <b className='text-blueCustom'>Accessibility:</b> To make insurance products easily accessible to all Kenyans, including those in remote areas and the diaspora, through digital platforms, mobile solutions, and strategic distribution channels.
            </p>
            <p className="text-gray-700 mb-4 text-justify">
            <b className='text-blueCustom'>Affordability:</b> To develop and offer cost-effective insurance products that cater to the specific needs and financial capabilities of our target market, ensuring that insurance remains within reach for everyone.
            </p>
            <p className="text-gray-700 mb-4 text-justify">
            <b className='text-blueCustom'>Innovation:</b> To continuously innovate our insurance products and services, leveraging technology advancements such as artificial intelligence, data analytics, and blockchain, to enhance efficiency, effectiveness, and customer experience.
            </p>
            <p className="text-gray-700 mb-4 text-justify">
            <b className='text-blueCustom'>Customer-Centricity:</b> To prioritize customer needs and satisfaction by providing personalized and responsive service, transparent communication, and timely claims processing, thereby building long-lasting relationships based on trust and reliability.
            </p>
            <p className="text-gray-700 mb-4 text-justify">
            <b className='text-blueCustom'>Market Leadership:</b> To establish Birdview Microinsurance Limited as the foremost microinsurance provider in Kenya, capturing a significant market share and setting industry standards for excellence and social impact.
            </p>
        </div>
        </AnimationDownToUp>
      </>
      

      </div>
        </div>

      </div>
      


     

    </div>
  );
};

export default AboutUs;
