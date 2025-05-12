import React, { useState, useRef } from 'react';
// Files import 
import AnimationRightToLeft from '../Animation/AnimationRightToLeft';
import AnimationDownToUp from '../Animation/AnimationDownToUp';

// MUI imports
import Button from '@mui/material/Button';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import FolderIcon from '@mui/icons-material/Folder';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import AutoModeIcon from '@mui/icons-material/AutoMode';


const ClaimsSubMenu = ({ buttonLabel,setActiveComponent }) => {
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
const handleClaimsNow = () => {
  // Navigate to the claims page
  window.location.href = 'https://portal.birdviewinsurance.com';
}
  

  return (
    <>

    <div className="relative inline-block"> {/* Parent div with relative positioning */}
          {/* MUI Button with Tailwind classes */}
          <Button
            startIcon={<AddTaskIcon sx={{ color: 'white' }} />}
            onMouseEnter={handleMouseEnterButton}
            onMouseLeave={handleMouseLeaveBoth}
            sx={{ color: 'white' }}
          
          >
            {buttonLabel} {/* Set button label from props */}
          </Button>
      {/* Red border styled div, conditionally rendered */}
       {showPopup && (
        <div className="absolute top-full left-0 w-full h-1 bg-redCustom   z-40"></div>
      )}

          
        </div>

    {showPopup && (

        <div style={{top:"187px"}}
        className="absolute   left-1/2 transform -translate-x-1/2 w-full max-w-6xl bg-white rounded-lg shadow-lg z-50 p-4"  
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
                        <FolderIcon  className='text-redCustom' />
                      </ListItemIcon>
                      <ListItemText primary="Evacuation and Repatriation" />
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
                      <ListItemText primary="Last Expense" />
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
                      <ListItemText primary="Medical" />
                    </ListItemButton>
                  <Divider />
                    </AnimationDownToUp>
                    <AnimationDownToUp  index={0}> 
                    <ListItemButton
                      selected={selectedIndex === 3}
                      sx={{ whiteSpace: 'nowrap' }}
                      onClick={(event) => handleListItemClick(event, 3)}
                    >
                      <ListItemIcon>
                        <FolderIcon  className='text-redCustom' />
                      </ListItemIcon>
                      <ListItemText primary="Hospital Cash" />
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
                        <FolderIcon  className='text-redCustom'  />
                      </ListItemIcon>
                      <ListItemText primary="Personal Accident" />
                    </ListItemButton>
                    </AnimationDownToUp> 
                  </List>
                </Box>
              </div>

           {/* Evacuation and Repatriation */}
            {(selectedIndex === 0) && (
              <AnimationRightToLeft index={0}>
                <div className='text-gray-900 bg-white p-6 flex-1'>
                  <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                    <h2 className="text-2xl font-bold mb-2">Evacuation and Repatriation</h2>
                    <p className="text-gray-700 mb-4">
                      Follow these steps to make a claim:
                      <br />
                      1. Input your membership number
                      <br />
                      2. Select the Evacuation and Repatriation
                      <br />
                      3. Indicate the date of loss
                      <br />
                      4. Submit supporting documents
                    </p>
                    <div className='flex justify-end'>
                      <Button onClick={() => { window.location.href = "/claims"  }} startIcon={<ReadMoreIcon />} size="small" style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}>
                        Read procedure
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimationRightToLeft>
            )}

            {(selectedIndex === 0) && (
              <AnimationRightToLeft index={1}>
                <div className='text-gray-900 bg-white p-6 flex-1'>
                  <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                    <p className="text-gray-700 mb-4">
                      Ready to start your claim? Click below.
                    </p>
                    <div className='flex justify-end'>
                      <Button onClick={handleClaimsNow} size="small" endIcon={<AutoModeIcon />} style={{ backgroundColor: '#157EBC', color: 'white', padding: '3px', textTransform: 'none' }}>
                        Claim now
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimationRightToLeft>
            )}


         {/* Last Expense */}
          {(selectedIndex === 1) && (
            <AnimationRightToLeft index={0}>
              <div className='text-gray-900 bg-white p-6 flex-1'>
                <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                  <h2 className="text-2xl font-bold mb-2">Last Expense</h2>
                  <p className="text-gray-700 mb-4">
                    Follow these steps to make a claim:
                    <br />
                    1. Input your membership number
                    <br />
                    2. Select Last Expense from the options
                    <br />
                    3. Indicate the date of loss
                    <br />
                    4. Submit any supporting documents
                  </p>
                  <div className='flex justify-end'>
                    <Button onClick={() => { window.location.href = "/claims"  }} startIcon={<ReadMoreIcon />} size="small" style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}>
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </AnimationRightToLeft>
          )}

          {(selectedIndex === 1) && (
            <AnimationRightToLeft index={1}>
              <div className='text-gray-900 bg-white p-6 flex-1'>
                <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                  <p className="text-gray-700 mb-4">
                    Ready to start your claim? Click below.
                  </p>
                  <div className='flex justify-end'>
                    <Button onClick={handleClaimsNow} size="small" endIcon={<AutoModeIcon />} style={{ backgroundColor: '#157EBC', color: 'white', padding: '3px', textTransform: 'none' }}>
                      Claim now
                    </Button>
                  </div>
                </div>
              </div>
            </AnimationRightToLeft>
          )}

             {/* Medical */}
              {(selectedIndex === 2) && (
                <AnimationRightToLeft index={0}>
                  <div className='text-gray-900 bg-white p-6 flex-1'>
                    <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                      <h2 className="text-2xl font-bold mb-2">Medical</h2>
                      <p className="text-gray-700 mb-4">
                        Follow these steps to make a claim:
                        <br />
                        1. Input your membership number
                        <br />
                        2. Select Medical from the options
                        <br />
                        3. Indicate the date of service
                        <br />
                        4. Submit any supporting documents
                      </p>
                      <div className='flex justify-end'>
                        <Button onClick={() => { window.location.href = "/claims"  }} startIcon={<ReadMoreIcon />} size="small" style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}>
                          Read more
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimationRightToLeft>
              )}

              {(selectedIndex === 2) && (
                <AnimationRightToLeft index={1}>
                  <div className='text-gray-900 bg-white p-6 flex-1'>
                    <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                      <p className="text-gray-700 mb-4">
                        Ready to start your claim? Click below.
                      </p>
                      <div className='flex justify-end'>
                        <Button onClick={handleClaimsNow} size="small" endIcon={<AutoModeIcon />} style={{ backgroundColor: '#157EBC', color: 'white', padding: '3px', textTransform: 'none' }}>
                          Claim now
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimationRightToLeft>
              )}


             {/* Hospital Cash */}
              {(selectedIndex === 3) && (
                <AnimationRightToLeft index={0}>
                  <div className='text-gray-900 bg-white p-6 flex-1'>
                    <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                      <h2 className="text-2xl font-bold mb-2">Hospital Cash</h2>
                      <p className="text-gray-700 mb-4">
                        Follow these steps to make a claim:
                        <br />
                        1. Input your membership number
                        <br />
                        2. Select Hospital Cash from the options
                        <br />
                        3. Indicate the date of hospital stay
                        <br />
                        4. Submit any supporting documents
                      </p>
                      <div className='flex justify-end'>
                        <Button onClick={() => { window.location.href = "/claims"  }} startIcon={<ReadMoreIcon />} size="small" style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}>
                          Read more
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimationRightToLeft>
              )}

              {(selectedIndex === 3) && (
                <AnimationRightToLeft index={1}>
                  <div className='text-gray-900 bg-white p-6 flex-1'>
                    <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                      <p className="text-gray-700 mb-4">
                        Ready to start your claim? Click below.
                      </p>
                      <div className='flex justify-end'>
                        <Button onClick={handleClaimsNow} size="small" endIcon={<AutoModeIcon />} style={{ backgroundColor: '#157EBC', color: 'white', padding: '3px', textTransform: 'none' }}>
                          Claim now
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimationRightToLeft>
              )}


           {/* Personal Accident */}
            {(selectedIndex === 4) && (
              <AnimationRightToLeft index={0}>
                <div className='text-gray-900 bg-white p-6 flex-1'>
                  <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                    <h2 className="text-2xl font-bold mb-2">Personal Accident</h2>
                    <p className="text-gray-700 mb-4">
                      Follow these steps to make a claim:
                      <br />
                      1. Input your membership number
                      <br />
                      2. Select Personal Accident from the options
                      <br />
                      3. Provide details of the accident
                      <br />
                      4. Submit any required supporting documents
                    </p>
                    <div className='flex justify-end'>
                      <Button onClick={() => { window.location.href = "/claims"  }} startIcon={<ReadMoreIcon />} size="small" style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}>
                        Read more
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimationRightToLeft>
            )}

            {(selectedIndex === 4) && (
              <AnimationRightToLeft index={1}>
                <div className='text-gray-900 bg-white p-6 flex-1'>
                  <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                    <p className="text-gray-700 mb-4">
                      Ready to start your claim? Click below.
                    </p>
                    <div className='flex justify-end'>
                      <Button onClick={handleClaimsNow} size="small" endIcon={<AutoModeIcon />} style={{ backgroundColor: '#157EBC', color: 'white', padding: '3px', textTransform: 'none' }}>
                        Claim now
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimationRightToLeft>
            )}

           </div>

       </div>

      )}
    
    </>
  );
};

export default ClaimsSubMenu;
