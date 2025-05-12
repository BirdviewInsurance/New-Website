import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Button, Dialog, IconButton, Pagination, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoSlider = () => {
  const [tooltipMessage, setTooltipMessage] = useState("SHARE QR CODE");
  const sliderRef = useRef(null);
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const slides = [
    {
      title: 'Recruitment agencies partner with an insurance firm to develop cover for Kenyans working in diaspora',
      image: 'https://img.youtube.com/vi/uIpPSzLgghY/maxresdefault.jpg',
      videoId: 'uIpPSzLgghY',
      path: '/service/recruitment-agencies',
      date: '2025-04-06',
    },
    {
      title: '#MohoroGitau',
      image: 'https://img.youtube.com/vi/4qIBk5G_BfU/maxresdefault.jpg',
      videoId: '4qIBk5G_BfU',
      path: '/service/mohoro-gitau',
      date: '2025-04-07',
    },
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
    }
  
  ];

  slides.sort((a, b) => new Date(b.date) - new Date(a.date));

  const handlePlayClick = (videoId) => {
    setActiveVideoId(videoId);
    setOpenVideoModal(true);
  };

  const handlePaginationChange = (_, newPage) => {
    setCurrentSlide(newPage - 1);
    sliderRef.current.slickGoTo(newPage - 1);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    fade: true,
    afterChange: (current) => setCurrentSlide(current),
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    if (typeof window !== 'undefined') {
      handleResize();
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full">
      <Slider ref={sliderRef} {...sliderSettings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="relative w-full h-[450px] bg-black overflow-hidden rounded-md">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />

              <div
                onClick={() => handlePlayClick(slide.videoId)}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 transition-all cursor-pointer"
              >
                <div className="bg-white p-4 rounded-full shadow-xl transform scale-105 hover:scale-110 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-0 w-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-60 p-3">
                <h6 className="text-white text-lg font-bold text-center">{slide.title}</h6>
                <div className="flex justify-center items-center mb-8 mt-2 space-x-4">
                  {/* <Button
                    onClick={() => (window.location.href = slide.path)}
                    startIcon={<ReadMoreIcon />}
                    size="small"
                    style={{
                      backgroundColor: '#E42D2C',
                      color: 'white',
                      textTransform: 'none',
                    }}
                  >
                    Read More
                  </Button> */}
                </div>
              </div> 
            </div>
          </div>
        ))}
      </Slider>

      <Dialog open={openVideoModal} onClose={() => setOpenVideoModal(false)} maxWidth="md" fullWidth>
        <div className="relative pt-[56.25%] bg-black">
          <IconButton
            onClick={() => setOpenVideoModal(false)}
            className="absolute top-2 right-2 z-10"
            style={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
          {activeVideoId && (
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          )}
        </div>
      </Dialog>

      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 flex items-center justify-center">
        <Pagination
          count={slides.length}
          page={currentSlide + 1}
          onChange={handlePaginationChange}
          sx={{
            '& .MuiPaginationItem-root': {
              color: 'white',
              transition: 'transform 0.3s ease, opacity 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
              fontSize: '0.68rem',
              fontWeight: 'bold',
              borderRadius: '50%',
              padding: '10px',
              backgroundColor: 'rgba(0,0,0,0.3)',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                backgroundColor: '#E42D2C',
                transform: 'scale(0.70)',
                opacity: 1,
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
              },
            },
            '& .MuiPaginationItem-root.Mui-selected': {
              backgroundColor: '#0D4F8B',
              color: 'white',
              transform: 'scale(1.25)',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
            },
            '& .MuiPaginationItem-root.Mui-selected:hover': {
              backgroundColor: '#E42D2C',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)',
            },
            '& .MuiPaginationItem-root.Mui-next, & .MuiPaginationItem-root.Mui-previous': {
              fontSize: '1.5rem',
              backgroundColor: '#0D4F8B',
              borderRadius: '50%',
              padding: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                backgroundColor: '#E42D2C',
                transform: 'scale(1.2)',
                opacity: 1,
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
              },
            },
          }}
        />
      </div>

      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex items-center justify-center">
        <Tooltip title={tooltipMessage} open={!isSmallScreen} arrow>
          <div className="image-container border-2 border-solid border-gray-300 p-1 rounded-md shadow-lg">
            <Image
              onClick={() => alert('QR Code clicked!')}
              width={100}
              height={100}
              className="image object-cover"
              src="/assets/logo/qrCode-BgRM.png"
              alt="QR Code"
            />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default VideoSlider;
