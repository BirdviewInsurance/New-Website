import React, { useState, useRef, useEffect } from 'react';

// MUI imports
import { Tabs, Tab, Box, Typography, Button, Card, CardContent, CardMedia, Modal } from '@mui/material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { ImageList, ImageListItem } from "@mui/material";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import { IconButton, Badge} from "@mui/material";
import ContactsIcon from '@mui/icons-material/Contacts';
import HomeIcon from '@mui/icons-material/Home';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// Custom Components
import BackgroundImage from '../components/BackgroundImage';
import { Subtitles } from '@mui/icons-material';

const Press = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const videoRef = useRef(null);  // Define the videoRef

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
    setImageModalOpen(true);
  }

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handlePlayClick = (url) => {
    setVideoUrl(url);  // Set the URL when play button is clicked
    setVideoLoaded(true); // Mark the video as loaded
  };


  const TABS = [
    {
      label: "Latest Media Features",
      data: [
        {
          title: "Evacuation & Repatriation Dinner",
          description: "The Dinner was held on the 10th March 2025 at Radisson Blu Hotel in collaboration with the Kenya National Chamber of Commerce & Industry (KNCCI)",
          image: "/assets/noticeBoard/Evac Conference.jpeg",
          details: "The Dinner was held on the 10th March 2025 at Radisson Blu Hotel in collaboration with the Kenya National Chamber of Commerce & Industry (KNCCI)",
        },
        {
          title: "Ensuring Safe Returns: Evacuation, Repatriation & Last Expense Cover for Kenyans Working Abroad",
          description: "We are excited to announce our new insurance product tailored for Kenyans living abroad.",
          image: "https://img.youtube.com/vi/-COQI7Itdu4/hqdefault.jpg",
          video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/-COQI7Itdu4?si=zLzIzdTPLKLzb43R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
          details: "Ensuring Safe Returns: Evacuation, Repatriation & Last Expense Cover for Kenyans Working AbroadThis product provides comprehensive coverage and peace of mind for Kenyans residing overseas. Stay tuned for more details and how you can benefit from this exclusive offer."
        },               
          
      ],
    },
    {
      label: "Press Releases",
      data: [
        {
          title: 'Recruitment agencies partner with an insurance firm to develop cover for Kenyans working in diaspora',
          image: 'https://img.youtube.com/vi/uIpPSzLgghY/hqdefault.jpg',
          video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/uIpPSzLgghY?si=m-irU0AQVVOh_pL_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          title: '#MohoroGitau',
          image: 'https://img.youtube.com/vi/4qIBk5G_BfU/hqdefault.jpg',
          video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4qIBk5G_BfU?si=gTXuwW7Lj0u7oL-3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          title: 'Protecting Kenyans abroad: Plan for compulsory insurance hatched',
          image: 'https://img.youtube.com/vi/ev3_ffJBQzA/hqdefault.jpg',
          video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ev3_ffJBQzA?si=hxufZBySbQcZf9bI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        },
        {
          title: 'KNCCI partners to enhance financial protection for Kenyans working abroad',
          image: 'https://img.youtube.com/vi/rgjmdpy79KM/hqdefault.jpg',
          video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/rgjmdpy79KM?si=vfnZVMrXW15tmq5h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        }
      ],
    },
    { 
      label: "Event Highlights",
      data: [   
        { 
          title: "Our Staff at the Dinner Event",
          description: "Our Staff looking so executive during our dinner event held on 10th of March at Radisson Blu Hotel",
          image: "/Events/Staff.jpeg",
          gallery: [ 
            "/Events/Staff1.jpeg",
            "/Events/staff2.jpeg",
            "/Events/staffs.jpeg",
            "/Events/staffe.jpeg",
            "/Events/SLVA8021.jpg",
            "/Events/SLVA8033.jpg",
          ],
        },
        { 
          title: "Dinner Event Highlights",
          description: "Some of the moments during our Dinner Event",
          image: "/Events/SLVA8400.jpg",
          gallery: [
            "/Events/SLVA8289.jpg", 
            "/Events/SLVA8339.jpg", 
            "/Events/SLVA8397.jpg", 
            "/Events/SLVA8292.jpg", 
            "/Events/SLVA8274.jpg", 
            "/Events/SLVA8273.jpg", 
            "/Events/SLVA8334.jpg",
            "/Events/SLVA8028.jpg",  
            "/Events/SLVA8026.jpg", 
            "/Events/SLVA8042.jpg", 
            "/Events/SLVA8048.jpg", 
            "/Events/SLVA8056.jpg", 
            "/Events/SLVA8065.jpg", 
            "/Events/SLVA8069.jpg", 
            "/Events/SLVA8061.jpg", 
            "/Events/SLVA8071.jpg", 
            "/Events/SLVA8074.jpg", 
            "/Events/SLVA8076.jpg", 
            "/Events/SLVA8077.jpg", 
          ],
        }
      ], 
    },
    { 
      label: "Contact for Media Inquiries",
      data: [
        {
          title: "Media Contact",
          description: (
            <div className="flex items-center">
                  <ContactsIcon sx={{ color: "#F57C00", fontSize: "10rem" }} />
              <span className="ml-4 text-sm text-gray-600">
                For inquiries, reach us at <a href="mailto:Marketing@birdviewinsurance.com" className="text-blue-600">Smedia@birdviewinsurance.com</a> or call <a href="tel:+254112072445" className="text-blue-600">+254 112 072 445</a>.
              </span>
            </div>
          ),
        }

      ], 
    },
  ];

  useEffect(() => {
    // Autoplay video when modal is opened
    if (open && videoRef.current) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [open]);

  return (
    
    <div className="relative bg-gray-100">
      {/* Background Image */}
      <BackgroundImage />

      {/* Main Container */}
      <div className="relative top-[-40px] flex justify-center">
        <div className="bg-white w-full max-w-[calc(100%-2rem)] p-4 flex flex-col items-center rounded-3xl">
          
          {/* Scrollable Tabs */}
          <Box sx={{ width: '100%', marginBottom: 4 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={activeTab} onChange={handleChange} aria-label="press tabs" variant="scrollable" scrollButtons="auto">
                {TABS.map((tab, index) => (
                  <Tab key={index} label={tab.label} className="text-gray-700 font-semibold" />
                ))}
              </Tabs>
            </Box>
          </Box>

          {/* Notices Grid */}
          <div className="container mx-auto py-10 px-4">
            <div className="py-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TABS[activeTab].data && TABS[activeTab].data.length > 0 ? (
                TABS[activeTab].data.map((item, index) => (
                  <Card key={index} className="shadow-lg rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition" onClick={() => handleOpen(item)}>
                    {item.image && (
                      <CardMedia component="img" className="w-full h-48 object-cover" image={item.image} alt={item.title} />
                    )}
                    <CardContent className="p-4">
                      <Typography variant="h6" className="text-lg font-bold text-gray-800">{item.title}</Typography>
                      <Typography variant="body2" className="text-gray-600 mt-2">{item.description}</Typography>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <>
                {[1, 2, 3].map((_, index) => (
                  <Stack key={index} spacing={2} alignItems="center" sx={{ position: 'relative' }}>
                    {/* Title for each video */}
                    <Skeleton variant="text" sx={{ fontSize: '1rem', width: '60%' }} />
              
                    {/* Skeleton for Video Placeholder */}
                    {!videoLoaded && (
                      <Skeleton variant="rectangular" width="100%" height={180} sx={{ borderRadius: 1 }} />
                    )}
              
                    {/* Play button on top of the skeleton */}
                    {!videoLoaded && (
                      <IconButton
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                        onClick={() => handlePlayClick(null)} // Set URL to null
                      >
                        <PlayArrowIcon sx={{ color: 'white' }} />
                      </IconButton>
                    )}
              
                    {/* YouTube video embed with null URL */}
                    {videoLoaded && (
                      <iframe
                        width="100%"
                        height="180"
                        src={null} // Set URL to null
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={handleVideoLoad}
                      />
                    )}
              
                    {/* Skeleton for video title */}
                    <Skeleton variant="text" sx={{ fontSize: '1rem', width: '60%' }} />
                    {/* Skeleton for video description */}
                    <Skeleton variant="text" sx={{ fontSize: '0.875rem', width: '80%' }} />
                  </Stack>
                ))}
              </>
              

              )}



            </div>
          </div>

          {/* Modal for Item Details */}
          <Modal 
              open={open} 
              onClose={handleClose}
              aria-labelledby="event-modal-title"
              aria-describedby="event-modal-description"
            >
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[400px] md:max-w-[600px] lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1200px] max-h-[90vh] overflow-y-auto">
                <div className="bg-white p-6 rounded-xl shadow-xl w-96 sm:w-[500px] lg:w-[800px] xl:w-[1000px] 2xl:w-[1200px] max-w-full">
                  {selectedItem && (
                    <>
                      {/* Video Section */}
                      {selectedItem.video && (
                        <div className="w-full mb-4">
                          {/* Render the iframe directly */}
                          <div 
                            dangerouslySetInnerHTML={{ __html: selectedItem.video }}
                          />
                        </div>
                      )}

                      {/* Main Image Section */}
                      {selectedItem.image && !selectedItem.video && (
                        <img 
                          src={selectedItem.image} 
                          alt="Event Image" 
                          className="w-full h-auto rounded-lg mb-4 cursor-pointer"
                          onClick={() => handleImageClick(selectedItem.image)}
                        />
                      )}
                      
                      {/* Photo Gallery */}
                      {selectedItem.gallery && selectedItem.gallery.length > 0 && (
                        <div className="mb-4">
                          <Typography variant="h6" className="text-lg font-semibold text-gray-800 mb-2">
                            Photo Gallery
                          </Typography>
                          <ImageList cols={3} gap={8} className="w-full">
                            {selectedItem.gallery.map((imgSrc, index) => (
                              <ImageListItem key={index}>
                                <img 
                                  src={imgSrc} 
                                  alt={`Gallery Image ${index + 1}`} 
                                  className="w-full h-auto rounded-lg mb-4 cursor-pointer"
                                  onClick={() => handleImageClick(imgSrc)}
                                />
                              </ImageListItem>
                            ))}
                          </ImageList>
                        </div>
                      )}

                      {/* Title & Description */}
                      <Typography variant="h6" className="text-xl font-bold text-gray-800 mb-4">
                        {selectedItem.title}
                      </Typography>

                      {selectedItem.content ? (
                        <div dangerouslySetInnerHTML={{ __html: selectedItem.content }} className="text-gray-600" />
                      ) : (
                        <Typography variant="body2" className="text-gray-600">
                          {selectedItem.details || selectedItem.description}
                        </Typography>
                      )}
                    </>
                  )}
                </div>
              </div>
            </Modal>

          {/* Image Pop-up Modal */}
          <Modal open={imageModalOpen} onClose={() => setImageModalOpen(false)}>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg">
              <img src={selectedImage} alt="Selected" className="max-w-full max-h-[80vh] rounded-lg" />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Press;
