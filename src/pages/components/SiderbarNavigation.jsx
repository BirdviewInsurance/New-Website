import React, { useState } from 'react';
import {  ExpandLess,  ExpandMore, } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import HomeIcon from '@mui/icons-material/Home';  
import AboutIcon from '@mui/icons-material/Info';  
import LeadershipIcon from '@mui/icons-material/People';  
import ManagementIcon from '@mui/icons-material/Business';  
import ContactIcon from '@mui/icons-material/ContactMail';  
import CareerIcon from '@mui/icons-material/Work';  
import EvacuationIcon from '@mui/icons-material/LocalHospital';  
import LastExpensesIcon from '@mui/icons-material/MoneyOff';  
import MedicalIcon from '@mui/icons-material/HealthAndSafety';  
import HospitalCashIcon from '@mui/icons-material/MonetizationOn';  
import PersonalAccidentIcon from '@mui/icons-material/AccessibilityNew'; 
import ClaimsProcessIcon from '@mui/icons-material/Assessment';  
import DnsIcon from '@mui/icons-material/Dns';
import { Button } from '@mui/material';

const SidebarNavigation = ({ setActiveComponent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({
    home: false,
    products: false,
    claims: false,
    quotes: false,
  });

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  // Toggle submenu visibility
  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const homeMenuItems = [
    { name: 'Home', activeComponentName: 'Home', icon: <HomeIcon />, url: '/' },
    { name: 'About Us', activeComponentName: 'AboutUs', icon: <AboutIcon /> ,url: '/about-us' },
    { name: 'Our Leadership', activeComponentName: 'OurLeadership', icon: <LeadershipIcon /> ,url: '/our-leadership'},
    { name: 'Our Management', activeComponentName: 'OurManagement', icon: <ManagementIcon /> ,url: '/our-management' },
    { name: 'Contact Us', activeComponentName: 'ContactUs', icon: <ContactIcon /> ,url: '/contact-us'},
    { name: 'Career', activeComponentName: 'Career', icon: <CareerIcon />,url: '/careers' },
  ];

  const productAndServiceItems = [
    { name: 'Evacuation and Repatriation', activeComponentName: 'EvacAndRepatriation', icon: <EvacuationIcon /> ,url: '/service/evacuation-and-repatriation' },
    { name: 'Last Expenses', activeComponentName: 'LastExpenses', icon: <LastExpensesIcon /> ,url: '/service/last-expense' },
    { name: 'Medical', activeComponentName: 'Medical', icon: <MedicalIcon /> ,url: '/service/medical' },
    { name: 'Hospital Cash', activeComponentName: 'HospitalCash', icon: <HospitalCashIcon /> ,url: '/service/hospital-cash' },
    { name: 'Personal Accident', activeComponentName: 'PersonalAccident', icon: <PersonalAccidentIcon /> ,url: '/service/personal-accident'},
  ];
  
  const claimsItems = [
    { name: 'Claims Process', activeComponentName: 'Claims', icon: <ClaimsProcessIcon /> , url: '/claims' },
    { name: 'Evacuation and Repatriation', activeComponentName: 'EvacAndRepatriation', icon: <EvacuationIcon /> , url: 'https://portal.birdviewinsurance.com/login' },
    { name: 'Last Expenses', activeComponentName: 'LastExpenses', icon: <LastExpensesIcon /> , url: 'https://portal.birdviewinsurance.com/login' },
    { name: 'Medical', activeComponentName: 'Medical', icon: <MedicalIcon /> , url: 'https://portal.birdviewinsurance.com/login' },
    { name: 'Hospital Cash', activeComponentName: 'HospitalCash', icon: <HospitalCashIcon /> , url: 'https://portal.birdviewinsurance.com/login' },
    { name: 'Personal Accident', activeComponentName: 'PersonalAccident', icon: <PersonalAccidentIcon /> , url: 'https://portal.birdviewinsurance.com/login' },
  ];
  
  const QuotesItems = [
    { name: 'Evacuation and Repatriation', activeComponentName: 'EvacAndRepatriation', icon: <EvacuationIcon />, url: 'https://quote.birdviewinsurance.com/?ProductID=1' },
    { name: 'Last Expenses', activeComponentName: 'LastExpenses', icon: <LastExpensesIcon />, url: 'https://quote.birdviewinsurance.com/?ProductID=2' },
    { name: 'Medical', activeComponentName: 'Medical', icon: <MedicalIcon />, url: 'https://quote.birdviewinsurance.com/?ProductID=3' },
    { name: 'Hospital Cash', activeComponentName: 'HospitalCash', icon: <HospitalCashIcon />, url: 'https://quote.birdviewinsurance.com/?ProductID=4' },
    { name: 'Personal Accident', activeComponentName: 'PersonalAccident', icon: <PersonalAccidentIcon />, url: 'https://quote.birdviewinsurance.com/?ProductID=5' },
  ];

  return (
    <>
      <IconButton onClick={toggleSidebar} size="large" style={{ color: '#157EBC' }}>
        <MenuIcon style={{ color: '#157EBC' }} />
      </IconButton>
          <SwipeableDrawer
            anchor="left"
            open={isOpen}
            onClose={toggleSidebar}
            onOpen={toggleSidebar}
            sx={{ width: 300, flexShrink: 0 }}
          >
            <div className="flex w-300 h-screen bg-blueCustom  transition-width duration-300" style={{ width: '300px' }}>
              <div className={`flex flex-col ${isOpen ? 'block' : 'hidden'} transition-all duration-300 w-full`}>
                {/* Home Main Menu */}
                <div className="py-2 bg-blueCustom">
                  <div onClick={() => toggleMenu('home')} className="flex text-white p-2 w-full justify-between items-center">
                    <div className='flex items-center'>
                      <DnsIcon  className="mr-2" />
                      <span>Home</span>
                    </div>
                    <div className='flex items-center'>
                      {openMenus.home ? <ExpandLess fontSize="large"  /> : <ExpandMore fontSize="large"  />}
                    </div>
                  </div>

                  {openMenus.home && (
                  <div className="pl-4">
                      {homeMenuItems.map((item) => (
                        <>
                            <Button startIcon={item.icon} 
                                  style={{color:'white'}}
                                  key={item.name}
                                  className="flex items-center   pl-2 py-1 mb-3 mt-3   "
                                  onClick={() => window.open(item.url) }
                                >
                                  {item.name}
                               </Button>
                        <hr className="pl-2 py-1 mb-2 mt-2" ></hr >
                        </>
                      ))}
                    </div>
                
                  )}
                </div>

                {/* Product & Services Main Menu */}
                <div className="py-2 bg-blueCustom">
                  <div onClick={() => toggleMenu('products')} className="flex items-center text-white p-2 w-full justify-between">
                    <div className='flex items-center'>
                      <DnsIcon className="mr-2" />
                      <span>Product & Services</span>
                    </div>
                    <div className='flex items-center'>
                      {openMenus.products ? <ExpandLess fontSize="large"  /> : <ExpandMore fontSize="large"  />}
                    </div>
                  </div>

                  {openMenus.products && (
                    <div className="pl-4">
                    {productAndServiceItems.map((item) => (
                        <>
                       <Button startIcon={item.icon} 
                                  style={{color:'white'}}
                                  key={item.name}
                                  className="flex items-center   pl-2 py-1 mb-3 mt-3   "
                                  onClick={() => window.open(item.url)}
                                >
                                  {item.name}
                               </Button> 
                      <hr className="pl-2 py-1 mb-2 mt-2" ></hr >
                      </>
                    ))}
                  </div>
                  
                  )}
                </div>

                {/* Claims Main Menu */}
                <div className="py-2 bg-blueCustom">
                  <div onClick={() => toggleMenu('claims')} className="flex items-center text-white p-2 w-full justify-between">
                    <div className='flex items-center'>
                      <DnsIcon className="mr-2" />
                      <span>Claims</span>
                    </div>
                    <div className='flex items-center'>
                      {openMenus.claims ? <ExpandLess fontSize="large"  /> : <ExpandMore fontSize="large"  />}
                    </div>
                  </div>

                  {openMenus.claims && (
                   <div className="pl-4 ">
                   {claimsItems.map((item) => (
                    <>
                     <Button 
                         startIcon={item.icon} 
                         style={{color:'white'}}
                         key={item.name}
                         className="flex items-center   pl-2 py-1 mb-3 mt-3   "
                         onClick={() => { if(!item.url){setActiveComponent(item.activeComponentName); toggleSidebar()  }else{ window.location.href = `${item.url}`}}}
                                >
                        {item.name}
                       </Button>
                     <hr   className="pl-2 py-1 mb-2 mt-2" ></hr >
                     </>
                   ))}
                 </div>
                 
                  )}
                </div>

                {/* Quotes Main Menu */}
                <div className="py-2 bg-blueCustom">
                  <div onClick={() => toggleMenu('quotes')} className="flex items-center text-white p-2 w-full justify-between">
                    <div className='flex items-center'>
                      <DnsIcon className="mr-2" />
                      <span>Quotes</span>
                    </div>
                    <div className='flex items-center'>
                    {openMenus.quotes ? <ExpandLess fontSize="large"  /> : <ExpandMore fontSize="large" />}


                    </div>
                  </div>

                  {openMenus.quotes && (
                   <div className="pl-4 ">
                           {QuotesItems.map((item) => (
                            <>
                                <Button startIcon={item.icon} 
                                  style={{color:'white'}}
                                  key={item.name}
                                  className="flex items-center   pl-2 py-1 mb-3 mt-3   "
                                  onClick={() => window.open(item.url)}
                                >
                                  {item.name}
                               </Button>
                          <hr   className="pl-2 py-1 mb-2 mt-2   "  ></hr >
                          </>
                        ))}
                   </div>
                  )}
                </div>
              </div>
            </div>
          </SwipeableDrawer>

    </>
  );
};

export default SidebarNavigation;
