import React, { useState, useEffect, useRef } from 'react';
import Tooltip from '@mui/material/Tooltip';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Button from '@mui/material/Button';

import BackgroundImage from '../components/BackgroundImage';
import AnimationDownToUp from './components/Animation/AnimationDownToUp';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';

const VideoSlider = ({ featuredSlide, otherSlides, openVideoModal }) => {
  const sliderRef = useRef(null);
  const totalSlides = [featuredSlide, ...otherSlides].length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollTo = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const cardWidth = container.firstChild?.offsetWidth || 300;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    if (direction === 'next') {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div className="w-full relative px-4">
      <div
        ref={sliderRef}
        className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth snap-x snap-mandatory"
      >
        {[featuredSlide, ...otherSlides].map((video) => (
          <div
            key={video.videoId}
            className="relative snap-start min-w-[95%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[30%] h-64 bg-black rounded-xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl"
            onClick={() => openVideoModal(video.videoId)}
          >
            <img
              src={video.image}
              alt={video.title}
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition rounded-xl">
              <div className="bg-white text-black p-3 rounded-full shadow-md hover:scale-105 transform transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-3 py-2 text-white text-sm font-semibold">
              {video.title}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-6 mt-6">
        <button
          onClick={() => scrollTo('prev')}
          className="px-3 py-1 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          Prev
        </button>
        <button
          onClick={() => scrollTo('next')}
          className="px-3 py-1 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 disabled:opacity-50"
          disabled={currentIndex >= totalSlides - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};


const Home = () => {
  const [tooltipMessage, setTooltipMessage] = useState("SHARE QR CODE");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const matches = useMediaQuery('(max-width:950px)');

  useEffect(() => {
    setIsSmallScreen(matches);
  }, [matches]);

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
          files: [file],
          url: imageUrl,
        });
        console.log("Shared successfully");
      } catch (error) {
        console.error("Error sharing", error);
      }
    } else {
      alert("Your browser does not support Web Share API.");
    }
  };

  const featuredSlide = {
    title: 'Recruitment agencies partner with an insurance firm to develop cover for Kenyans working in diaspora',
    image: 'https://img.youtube.com/vi/uIpPSzLgghY/maxresdefault.jpg',
    videoId: 'uIpPSzLgghY',
    path: '/service/recruitment-agencies',
    date: '2025-04-06',
  };

  const otherSlides = [
    {
      title: 'Barriers of Buying Insurance in Kenya',
      image: 'https://img.youtube.com/vi/KaiVifF9gO4/maxresdefault.jpg',
      videoId: 'KaiVifF9gO4',
      path: '/service/new-video',
      date: '2025-04-08',
    },
    {
      title: 'Protecting Kenyans abroad: Plan for compulsory insurance hatched',
      image: 'https://img.youtube.com/vi/ev3_ffJBQzA/maxresdefault.jpg',
      videoId: 'ev3_ffJBQzA',
      path: '/service/protecting-kenyans-abroad',
      date: '2025-03-28',
    },
    {
      title: 'KNCCI partners to enhance financial protection for Kenyans working abroad',
      image: 'https://img.youtube.com/vi/rgjmdpy79KM/maxresdefault.jpg',
      videoId: 'rgjmdpy79KM',
      path: '/service/kncci-partners',
      date: '2025-03-20',
    },
  ];

  const openVideoModal = (videoId) => setSelectedVideo(videoId);
  const closeVideoModal = () => setSelectedVideo(null);

  return (
    <div className="relative bg-gray-100">
      <BackgroundImage />

      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full px-3 py-1"
              onClick={closeVideoModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}

<div className="relative top-[-30px] flex justify-center">
        <div className="bg-white w-full max-w-[calc(100%-2rem)] flex flex-col items-center justify-start overflow-visible rounded-3xl">
          {/* Cards and QR Code Section */}
          <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 p-1">
            {[
              {
                title: "Evacuation and Repatriation",
                img: "/assets/productsPhotos/Evacuation-and-Repatriation.png",
                desc: "This cover is crafted to intervene and rescue situations of citizens being either stranded or deceased abroad.",
                path: "/service/evacuation-and-repatriation",
              },
              {
                title: "Last Expense",
                img: "/assets/productsPhotos/last-expenses.png",
                desc: "Our last expense/funeral expense cover pays a specified cash amount within 48 hours of notification of death.",
                path: "/service/last-expense",
              },
              {
                title: "Medical",
                img: "/assets/productsPhotos/medical.png",
                desc: "Our medical insurance products include inpatient (including Maternity), Outpatient, Dental, and Optical.",
                path: "/service/medical",
              },
              {
                title: "Hospital Cash",
                img: "/assets/productsPhotos/hospital-cash.png",
                desc: "Daily payments for insureds admitted in hospital for up to a maximum of 10 payments per year or admission.",
                path: "/service/hospital-cash",
              },
              {
                title: "Personal Accident",
                img: "/assets/productsPhotos/personal-accident.png",
                desc: "Plan provides fixed sum payout on death, permanent disablement, and medical expenses arising because of an accident.",
                path: "/service/personal-accident",
              },
            ].map((item, i) => (
              <AnimationDownToUp key={i} index={i}>
                <div
                  style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }}
                  className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-1/2">
                      <Image
                        width={720}
                        height={320}
                        src={item.img}
                        alt={item.title}
                        className="w-full h-[320px] object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-2 flex flex-col justify-between">
                      <div>
                        <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                        <p className="text-gray-700 mb-4">{item.desc}</p>
                      </div>
                      <div className="flex justify-end mt-auto">
                        <Button
                          onClick={() => {
                            window.location.href = item.path;
                          }}
                          startIcon={<ReadMoreIcon />}
                          size="small"
                          style={{
                            backgroundColor: '#E42D2C',
                            color: 'white',
                            padding: '3px',
                            textTransform: 'none',
                          }}
                        >
                          Read more
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimationDownToUp>
            ))}

            {/* QR Code Card */}
            <AnimationDownToUp index={5}>
              <div
                style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }}
                className="max-w-3xl mx-auto bg-blueCustom rounded-lg shadow-md mb-4 p-4 flex justify-center items-center h-auto md:h-80"
              >
                <div className="p-4 text-center text-white space-y-4 flex flex-col items-center justify-center">
                  <p className="text-lg md:text-xl font-medium">EXCEEDING YOUR EXPECTATION</p>
                  <h5 className="w-full max-w-md text-2xl md:text-3xl font-bold text-center font-cursive md:font-sans">
                    Insurance Made Simple, Accessible, and Affordable.
                  </h5>
                  <p className="text-sm md:text-base">
                    We offer a range of comprehensive insurance products for Kenyans in the diaspora and within Kenya.
                  </p>

                  <Tooltip title={tooltipMessage} arrow open>
                    <Image
                      onClick={copyImage}
                      width={120}
                      height={120}
                      src="/assets/logo/qrCode.png"
                      alt="QR Code"
                      className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-cover cursor-pointer"
                      priority
                    />
                  </Tooltip>
                </div>
              </div>
            </AnimationDownToUp>
          </div>
        </div>
      </div>
      {/* Video Slider Footer Section */}
      <footer className="bg-gradient-to-br from-[#f0f4f8] via-white to-[#e5ecf5] pt-0 py-16 border-t border-gray-200">
          <div className="w-full flex justify-center mb-12 px-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800 px-4 relative inline-block after:content-[''] after:block after:w-16 after:h-[4px] after:mx-auto after:bg-gradient-to-r after:from-blue-600 after:to-blue-700 after:rounded-full">
              Press Releases
            </h2>
          </div>
          <VideoSlider
            featuredSlide={featuredSlide}
            otherSlides={otherSlides}
            openVideoModal={openVideoModal}
          />
        </footer>
    </div>
  );
};

export default Home;
