import React, { useState, useRef } from 'react';


// Files import 
import AnimationRightToLeft from '../Animation/AnimationRightToLeft';
import AnimationDownToUp from '../Animation/AnimationDownToUp';

// Mui imports
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import FolderIcon from '@mui/icons-material/Folder';
import ReadMoreIcon from '@mui/icons-material/ReadMore';


const HomeSubMenu = ({ buttonLabel,setActiveComponent }) => {
  const [showPopup, setShowPopup] = useState(false); // Track the visibility of the popup
  const showTimeoutRef = useRef(null); // Timeout reference for popup display
  const hideTimeoutRef = useRef(null); // Timeout reference for popup hiding
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  // Show the popup when hovering over the button with a delay
  const handleMouseEnterButton = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current); // Clear any existing hide timeout
    }
    showTimeoutRef.current = setTimeout(() => {
      setShowPopup(true); // Show popup after delay
    }, 300); // Add a 300ms delay before showing the popup
  };

  // Close the popup with a delay
  const handleMouseLeaveBoth = () => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current); // Clear the show timeout
    }
    hideTimeoutRef.current = setTimeout(() => {
      setShowPopup(false); // Hide popup after a short delay
    }, 300); // Add a 100ms delay before hiding the popup
  };

  // Cancel closing when hovering on the popup
  const cancelClosing = () => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current); // Prevent showing
    }
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current); // Prevent hiding
    }
  };

  return (
    <>

    <div className="relative inline-block"> {/* Parent div with relative positioning */}
          {/* MUI Button with Tailwind classes */}
          <Button
            startIcon={<HomeIcon sx={{ color: 'white' }} />}
        
            onMouseEnter={handleMouseEnterButton}
            onMouseLeave={handleMouseLeaveBoth}
            sx={{ color: 'white' }}
          >
            {buttonLabel} {/* Set button label from props */}
          </Button>
      {/* Red border styled div, conditionally rendered */}
       {showPopup && (
        <div className="absolute top-full left-0 w-full h-1 bg-redCustom z-40"></div>
      )}

          
        </div>

    {showPopup && (
        <div
        style={{top:"187px"}}
        className="absolute  left-1/2 transform -translate-x-1/2 w-full max-w-6xl bg-white rounded-lg shadow-lg z-50 p-4"  
          onMouseEnter={cancelClosing}
          onMouseLeave={handleMouseLeaveBoth}
        >
          <div className='flex'>
              <div className='text-gray-900 bg-white'>
                <Box sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper' }}>
                  <List component="nav" aria-label="main mailbox folders">
                    <AnimationDownToUp  index={0}>
                    <ListItemButton
                      selected={selectedIndex === 0}
                      onClick={(event) => handleListItemClick(event, 0)}
                      sx={{ whiteSpace: 'nowrap' }}
                    >
                      <ListItemIcon>
                        <FolderIcon className='text-redCustom' />
                      </ListItemIcon>
                      <ListItemText primary="About Us" />
                    </ListItemButton>
                    <Divider />
                    </AnimationDownToUp>
                    <AnimationDownToUp  index={0}>
                    <ListItemButton
                      selected={selectedIndex === 1}
                      onClick={(event) => handleListItemClick(event, 1)}
                      sx={{ whiteSpace: 'nowrap' }}
                    >
                      <ListItemIcon>
                        <FolderIcon  className='text-redCustom' />
                      </ListItemIcon>
                      <ListItemText primary="Our Leadership" />
                    </ListItemButton>
                   <Divider />
                    </AnimationDownToUp>
                    <AnimationDownToUp  index={0}>
                    <ListItemButton
                      selected={selectedIndex === 2}
                      onClick={(event) => handleListItemClick(event, 2)}
                      sx={{ whiteSpace: 'nowrap' }}
                    >
                      <ListItemIcon>
                        <FolderIcon  className='text-redCustom' />
                      </ListItemIcon>
                      <ListItemText primary="Our Management" />
                    </ListItemButton>
                  <Divider />
                    </AnimationDownToUp>
                    <AnimationDownToUp  index={0}> 
                    <ListItemButton
                      selected={selectedIndex === 3}
                      onClick={(event) => handleListItemClick(event, 3)}
                      sx={{ whiteSpace: 'nowrap' }}
                    >
                      <ListItemIcon>
                        <FolderIcon  className='text-redCustom' />
                      </ListItemIcon>
                      <ListItemText primary="Contact Us" />
                    </ListItemButton>
                  <Divider />
                    </AnimationDownToUp>
                    <AnimationDownToUp  index={0}> 
                    <ListItemButton
                      selected={selectedIndex === 4}
                      sx={{ whiteSpace: 'nowrap' }}
                      onClick={(event) => handleListItemClick(event, 4)}
                    >
                      <ListItemIcon>
                        <FolderIcon  className='text-redCustom' />
                      </ListItemIcon>
                      <ListItemText primary="Career" />
                    </ListItemButton>
                    </AnimationDownToUp> 
                  </List>
                </Box>
              </div>

           {/* About Us */}
            {(selectedIndex === 0) &&
              <AnimationRightToLeft index={0}>
                <div className='text-gray-900 bg-white p-6 flex-1'>
                  <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                    <h2 className="text-2xl font-bold mb-2">About Us</h2>
                    <p className="text-gray-700 mb-4">
                      Birdview Microinsurance is committed to delivering accessible and affordable insurance solutions tailored for Kenyans both at home and in the diaspora. We prioritize your peace of mind.
                    </p>
                  </div>
                </div>
              </AnimationRightToLeft>
            }

            {(selectedIndex === 0) &&
              <AnimationRightToLeft index={0}>
                <div className='text-gray-900 bg-white p-6 flex-1'>
                  <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                    <p className="text-gray-700 mb-4">
                      Our innovative products are designed to provide financial security during life's uncertainties. We are dedicated to meeting your insurance needs with integrity and transparency.
                    </p>
                    <div className='flex justify-end'>
                      <Button onClick={() => {window.location.href = "/about-us"}} startIcon={<ReadMoreIcon />} size="small" style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}>
                        Read more
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimationRightToLeft>
            }


        {/* Our Leadership */}
        {(selectedIndex === 1) &&
          <AnimationRightToLeft index={0}>
            <div className='text-gray-900 bg-white p-6 flex-1'>
              <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                <h2 className="text-2xl font-bold mb-2">Our Leadership</h2>
                <p className="text-gray-700 mb-4">
                  At Birdview Microinsurance, our leadership team is committed to guiding our mission of providing innovative and accessible insurance solutions tailored to Kenyans.
                </p>
              </div>
            </div>
          </AnimationRightToLeft>
        }

        {(selectedIndex === 1) &&
          <AnimationRightToLeft index={0}>
            <div className='text-gray-900 bg-white p-6 flex-1'>
              <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                <p className="text-gray-700 mb-4">
                  With a diverse background in insurance and finance, our leaders are dedicated to ensuring integrity and transparency in all operations, prioritizing customer satisfaction.
                </p>
                <div className='flex justify-end'>
                  <Button onClick={() => {window.location.href = "/our-leadership"}} startIcon={<ReadMoreIcon />} size="small" style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}>
                    Read more
                  </Button>
                </div>
              </div>
            </div>
          </AnimationRightToLeft>
        }

         {/* Our Management */}
        {(selectedIndex === 2) &&
          <AnimationRightToLeft index={0}>
            <div className='text-gray-900 bg-white p-6 flex-1'>
              <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                <h2 className="text-2xl font-bold mb-2">Our Management</h2>
                <p className="text-gray-700 mb-4">
                  Our management team at Birdview Microinsurance is dedicated to fostering a culture of innovation, integrity, and responsiveness in serving our clients.
                </p>
              </div>
            </div>
          </AnimationRightToLeft>
        }

        {(selectedIndex === 2) &&
          <AnimationRightToLeft index={0}>
            <div className='text-gray-900 bg-white p-6 flex-1'>
              <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                <p className="text-gray-700 mb-4">
                  With a wealth of experience in the insurance sector, our management ensures that we meet the diverse needs of Kenyans both locally and in the diaspora.
                </p>
                <div className='flex justify-end'>
                  <Button onClick={() => {window.location.href = "/team-members"}} startIcon={<ReadMoreIcon />} size="small" style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}>
                    Read more
                  </Button>
                </div>
              </div>
            </div>
          </AnimationRightToLeft>
        }


            {/* Contact Us */}
              {(selectedIndex === 3) &&
                <AnimationRightToLeft index={0}>
                  <div className='text-gray-900 bg-white p-6 flex-1'>
                    <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                      <p className="text-gray-700 mb-4">
                        At Birdview Microinsurance, we are here to assist you. Reach out to us for any inquiries or support regarding our services.
                      </p>
                    </div>
                  </div>
                </AnimationRightToLeft>
              }

              {(selectedIndex === 3) &&
                <AnimationRightToLeft index={0}>
                  <div className='text-gray-900 bg-white p-6 flex-1'>
                    <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                      <p className="text-gray-700 mb-4">
                        Our team is dedicated to providing you with the best assistance. Contact us via phone or email, and we will respond promptly to your needs.
                      </p>
                      <div className='flex justify-end'>
                        <Button onClick={() => { window.location.href = "/contact-us" }} startIcon={<ReadMoreIcon />} size="small" style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}>
                          Read more
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimationRightToLeft>
              }


            {/* Career */}
            {(selectedIndex === 4) &&
              <AnimationRightToLeft index={0}>
                <div className='text-gray-900 bg-white p-6 flex-1'>
                  <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                    <h2 className="text-2xl font-bold mb-2">Career</h2>
                    <p className="text-gray-700 mb-4">
                      At Birdview Microinsurance, we believe in nurturing talent and providing opportunities for growth.
                      Join our dynamic team and contribute to our mission of delivering exceptional insurance solutions.
                    </p>
                  </div>
                </div>
              </AnimationRightToLeft>
            }

            {(selectedIndex === 4) &&
              <AnimationRightToLeft index={0}>
                <div className='text-gray-900 bg-white p-6 flex-1'>
                  <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                    <p className="text-gray-700 mb-4">
                      Explore a range of career opportunities with us. We are committed to fostering a collaborative environment
                      where innovation and dedication thrive. Take the next step in your career with Birdview Microinsurance.
                    </p>
                    <div className='flex justify-end'>
                      <Button onClick={() => { window.location.href = "/careers" }} startIcon={<ReadMoreIcon />} size="small" style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}>
                        Read more
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimationRightToLeft>
            }

              </div>
        </div>
      )}
    
    </>
   

  );
};

export default HomeSubMenu;
