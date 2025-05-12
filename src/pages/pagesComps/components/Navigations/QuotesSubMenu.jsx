import React, { useState, useRef } from 'react';
// Files import 
import AnimationRightToLeft from '../Animation/AnimationRightToLeft';
import AnimationDownToUp from '../Animation/AnimationDownToUp';

// MUI imports
import Button from '@mui/material/Button';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import FolderIcon from '@mui/icons-material/Folder';
import ShieldIcon from '@mui/icons-material/Shield';
import ReadMoreIcon from '@mui/icons-material/ReadMore';



const QuotesSubMenu = ({ buttonLabel }) => {
  const [showPopup, setShowPopup] = useState(false);  
  const showTimeoutRef = useRef(null);  
  const hideTimeoutRef = useRef(null);  
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  // Show the popup when hovering over the button with a delay
  const handleMouseEnterButton = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);  
    }
    showTimeoutRef.current = setTimeout(() => {
      setShowPopup(true);  
    }, 600);  
  };

  // Close the popup with a delay
  const handleMouseLeaveBoth = () => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);  
    }
    hideTimeoutRef.current = setTimeout(() => {
      setShowPopup(false); 
    }, 300);  
  };

  // Cancel closing when hovering on the popup
  const cancelClosing = () => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);  
    }
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);  
    }
  };


  const handleClickEvacAndReparetion = () => {
    window.location.href = "https://quote.birdviewinsurance.com/?ProductID=1";   
  };
  const handleClickLastExpsense = () => {
    window.location.href = "https://quote.birdviewinsurance.com/?ProductID=2";  
  };
  const handleClickMedical = () => {
    window.location.href = "https://quote.birdviewinsurance.com/?ProductID=3";   
  };
  const handleClickHospital = () => {
    window.location.href = "https://quote.birdviewinsurance.com/?ProductID=4";   
  };
  const handleClickPersonalAccident = () => {
    window.location.href = "https://quote.birdviewinsurance.com/?ProductID=5";  
  };

  return (
    <>

    <div className="relative inline-block">  
          {/* MUI Button with Tailwind classes */}
          <Button
            startIcon={<AddModeratorIcon sx={{ color: 'white' }} />}
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
                        <FolderIcon  className='text-redCustom' />
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
                    Our worldwide evacuation and repatriation cover assists citizens who are stranded or deceased abroad, alleviating the financial burden from governments and families.
                  </p>
                  <div className='flex justify-end'>
                    <Button  
                      onClick={() =>  window.location.href = "/service/evacuation-and-repatriation"  }
                      startIcon={<ReadMoreIcon />}
                      size="small"
                      style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </AnimationRightToLeft>
          )}

            {(selectedIndex === 0) &&
              < AnimationRightToLeft index={0} >
              <div className='text-gray-900 bg-white p-6 flex-1'>
                <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                  <p className="text-gray-700 mb-4">
                  Our cover limits range from Kshs. 50,000 to Kshs. 500,000, ensuring financial security in times of need.
                  </p>
                  <div className='flex justify-end'>
                  <Button size="small" onClick={handleClickEvacAndReparetion} endIcon={<ShieldIcon />} style={{backgroundColor:'#157EBC',color:'white',padding:'3px', textTransform: 'none'}} >
                    Get Quote
                  </Button>
                  </div>
                </div>
              </div>
              </AnimationRightToLeft>
                   }

          

           {/* Last Expense */}
                  {(selectedIndex === 1) && (
                    <AnimationRightToLeft index={0}>
                      <div className='text-gray-900 bg-white p-6 flex-1'>
                        <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                          <h2 className="text-2xl font-bold mb-2">Last Expense</h2>
                          <p className="text-gray-700 mb-4">
                            Our last expense/funeral expense cover pays a specified cash amount within 48 hours of notification of death and required documentation. Coverage limits range from Kshs. 50,000 to Kshs. 500,000.
                          </p>
                          <div className='flex justify-end'>
                            <Button
                              onClick={() =>  window.location.href = "/service/last-expense" }
                              startIcon={<ReadMoreIcon />}
                              size="small"
                              style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}
                            >
                              Read more
                            </Button>
                          </div>
                        </div>
                      </div>
                    </AnimationRightToLeft>
                  )}

            {(selectedIndex === 1) &&
              < AnimationRightToLeft index={0} >
              <div className='text-gray-900 bg-white p-6 flex-1'>
                <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                  <p className="text-gray-700 mb-4">
                  This product provides peace of mind during difficult times, ensuring timely financial assistance.
                  </p>
                  <div className='flex justify-end'>
                  <Button size="small" onClick={handleClickLastExpsense}  endIcon={<ShieldIcon />} style={{backgroundColor:'#157EBC',color:'white',padding:'3px', textTransform: 'none'}} >
                    Get Quote
                  </Button>
                  </div>
                </div>
              </div>
              </AnimationRightToLeft>
                   }

               {/* Medical */}
          {(selectedIndex === 2) && (
            <AnimationRightToLeft index={0}>
              <div className='text-gray-900 bg-white p-6 flex-1'>
                <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                  <h2 className="text-2xl font-bold mb-2">Medical</h2>
                  <p className="text-gray-700 mb-4">
                    Our medical insurance plan offers comprehensive coverage, including inpatient (with in-built Maternity and Last Expense), outpatient, dental, and optical services. Enjoy peace of mind knowing you have access to quality healthcare when you need it most.
                  </p>
                  <div className='flex justify-end'>
                    <Button
                      onClick={() => window.location.href = "/service/medical"}
                      startIcon={<ReadMoreIcon />}
                      size="small"
                      style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </AnimationRightToLeft>
          )}     

              {(selectedIndex === 2) &&
                < AnimationRightToLeft index={0} >
                <div className='text-gray-900 bg-white p-6 flex-1'>
                  <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                    <p className="text-gray-700 mb-4">
                    Our medical insurance plan is designed to provide comprehensive care, ensuring that you and your family are protected against unexpected health issues.
                    </p>
                    <div className='flex justify-end'>
                    <Button size="small" onClick={handleClickMedical}  endIcon={<ShieldIcon />} style={{backgroundColor:'#157EBC',color:'white',padding:'3px', textTransform: 'none'}} >
                      Get Quote
                    </Button>
                    </div>
                  </div>
                </div>
                </AnimationRightToLeft>
                    }

               {/* Hospital Cash */}
            {(selectedIndex === 3) && (
              <AnimationRightToLeft index={0}>
                <div className='text-gray-900 bg-white p-6 flex-1'>
                  <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                    <h2 className="text-2xl font-bold mb-2">Hospital Cash</h2>
                    <p className="text-gray-700 mb-4">
                      Our Hospital Cash plan provides a daily cash benefit for each day spent in the hospital, helping you cover additional expenses during your stay. Enjoy peace of mind knowing you have financial support when it matters most.
                    </p>
                    <div className='flex justify-end'>
                      <Button
                        onClick={() =>  window.location.href = "/service/hospital-cash" }
                        startIcon={<ReadMoreIcon />}
                        size="small"
                        style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimationRightToLeft>
            )}      

              {(selectedIndex === 3) &&
                < AnimationRightToLeft index={0} >
                <div className='text-gray-900 bg-white p-6 flex-1'>
                  <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                    <p className="text-gray-700 mb-4">
                    Our Hospital Cash plan ensures you receive cash benefits for your hospitalization, giving you the freedom to focus on recovery without worrying about additional costs.
                    </p>
                    <div className='flex justify-end'>
                    <Button size="small" onClick={handleClickHospital}  endIcon={<ShieldIcon />} style={{backgroundColor:'#157EBC',color:'white',padding:'3px', textTransform: 'none'}} >
                      Get Quote
                    </Button>
                    </div>
                  </div>
                </div>
                </AnimationRightToLeft>
                    }

               {/* Personal Accident */}
            {(selectedIndex === 4) && (
              <AnimationRightToLeft index={0}>
                <div className='text-gray-900 bg-white p-6 flex-1'>
                  <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                  <h2 className="text-2xl font-bold mb-2">Personal Accident</h2>
                    <p className="text-gray-700 mb-4">
                      Our Personal Accident coverage provides financial protection in case of accidents that result in injury or disability. This plan helps cover medical expenses, loss of income, and other related costs.
                    </p>
                    <div className='flex justify-end'>
                      <Button
                        onClick={() => window.location.href = "/service/personal-accident"}
                        startIcon={<ReadMoreIcon />}
                        size="small"
                        style={{ backgroundColor: '#E42D2C', color: 'white', padding: '3px', textTransform: 'none' }}
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimationRightToLeft>
            )}      

              {(selectedIndex === 4) &&
                < AnimationRightToLeft index={0} >
                <div className='text-gray-900 bg-white p-6 flex-1'>
                  <div className="border rounded-lg shadow-lg p-4 bg-white max-w-md">
                    <p className="text-gray-700 mb-4">
                    With our Personal Accident plan, you can enjoy peace of mind knowing that you and your loved ones are protected against unforeseen accidents and their financial implications.
                    </p>
                    <div className='flex justify-end'>
                    <Button size="small" onClick={handleClickPersonalAccident}  endIcon={<ShieldIcon />} style={{backgroundColor:'#157EBC',color:'white',padding:'3px', textTransform: 'none'}} >
                      Get Quote
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

export default QuotesSubMenu;
