import React, { useState, useEffect } from 'react';
import SwipeableDrawer from '../components/SiderbarNavigation';
import HomeSubMenu from './components/Navigations/HomeSubMenu';
import ProductAndServiceSubMenu from './components/Navigations/ProductAndServiceSubMenu';
import QuotesSubMenu from './components/Navigations/QuotesSubMenu';
import ClaimsSubMenu from './components/Navigations/ClaimsSubMenu';
 


// MUI imports
import { Button, Divider } from '@mui/material';
import { Notifications as NotificationsIcon, } from "@mui/icons-material";
import { AppBar, Box, Toolbar, IconButton, Badge, Menu, MenuItem } from "@mui/material";
import { useMediaQuery } from '@mui/material';
import { Tooltip } from '@mui/material';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PublicIcon from '@mui/icons-material/Public';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';




import { WhatsApp } from "@mui/icons-material";

const Dashboard = () => {
 
   const [isSmallScreen, setIsSmallScreen] = useState(true);  

 
   const matches = useMediaQuery('(max-width:950px)');

   useEffect(() => {
      
       setIsSmallScreen(matches);
   }, [matches]); 

 
  const [activeComponent, setActiveComponent] = useState('');  

   
  useEffect(() => {
    const storedComponent = sessionStorage.getItem('activeComponent');
    if (storedComponent) {
      setActiveComponent(storedComponent);  
    } else {
      setActiveComponent('Home'); 
    }
  }, []); 

  
  useEffect(() => {
    if (activeComponent) {
      sessionStorage.setItem('activeComponent', activeComponent);
    }
  }, [activeComponent]);
  
  const [anchorElPortal, setAnchorElPortal] = React.useState(null);
  const [copiedPhoneNumber, setCopiedPhoneNumber] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const handleClickCustomerPhoneIcon = () => {
    window.location.href = "tel:+254742222888";
     
  };
  const handleClickWhatsappIcon = () => {
    window.location.href = "https://wa.me/254742222888";
  }  

  const handlePortalClick = (event) => {
    setAnchorElPortal(event.currentTarget);
  };

  const handlePortalClose = () => {
    setAnchorElPortal(null);
  };

  const router = useRouter();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000); // Show after 1 second

    // Auto-close the popup after 5 seconds if not clicked
    const autoCloseTimer = setTimeout(() => {
      setOpen(false);
    }, 6000); // 6 seconds (1s delay + 5s visible)

    return () => {
      clearTimeout(timer);
      clearTimeout(autoCloseTimer);
    };
  }, []);

  const handleLearnMore = () => {
    setOpen(false);
    router.push("/service/evacuation-and-repatriation");
  };
  
  return (
    <>
    <div className="">
        <>
      <style>
        {`
          .shadow-div {
            background-color: white;
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
            border-radius: 7px;
            padding: 7px;
          }
          .logoImage {
            width: 12%;
            height: 12%;
            object-fit: contain;
            display: block;
          }
        `}
      </style>

      {/* Red background for header */}
      {!isSmallScreen &&
      <div className=" w-full h-2 bg-redCustom z-50"></div>
      }

      {/* Popup Modal
      <Dialog
      open={open}
      onClose={() => setOpen(false)}
      maxWidth="md"
      fullWidth
      PaperProps={{
        className:
          "bg-white bg-opacity-95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-300 p-8",
      }}
    >
      <DialogTitle className="text-3xl font-bold text-[#157EBC] text-center">
        Premium Evacuation & Repatriation Insurance Plan
      </DialogTitle>
      <DialogContent className="p-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-[#157EBC] text-lg font-semibold leading-8 tracking-wide mb-6">
            Experience world-class emergency evacuation and repatriation
            services, ensuring safety and peace of mind for you and your loved
            ones—wherever you are.
          </p>
          <img
            src="/assets/backgroundPhotes/evacuation-repatriation.png"
            alt="Evacuation & Repatriation"
            className="w-full h-auto mx-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </DialogContent>
      <DialogActions className="flex justify-center pb-8">
        <Button
          onClick={() => setOpen(false)}
          variant="contained"
          className="bg-[#157EBC] text-white hover:bg-[#12679C] px-10 py-3 rounded-full text-lg font-bold shadow-md transition-all duration-300"
        >
          Learn More
        </Button>
      </DialogActions>
    </Dialog> */}

      <div className="">
      {/* <a href="/agent-Registration">
        <Image
          src="/assets/backgroundPhotes/Agent_Banner.png"
          alt="Banner"
          width={2045}
          height={180}
          className="cursor-pointer"
        />
      </a> */}

        <AppBar position="static" style={{ backgroundColor: "white", color: "black"  }}>
          <Toolbar  style={{ paddingLeft:'1px' }}  >
          <Image
            width={150}
            height={40}
            onClick={() => { window.location.href = "/" }}
            className="logoImage"
            style={{
              width: isSmallScreen ? "20%" : "12%",
              height:  isSmallScreen ? "20%" : "80px",
              maxHeight: "120px",
              minHeight: isSmallScreen ? "50px" : "120px",
              maxWidth: "200px",  
              minWidth: "80px",   
              transition: "width 0.3s ease-in-out"  
            }}
            src="/images/logo1.png"
            alt="Logo"
          />

          
            {/* Flex grow pushes the rest to the right */}
            
            <Box style={{ flexGrow: 1 }} />
            {!isSmallScreen && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 z-50">
            <p
                className="text-2xl font-bold tracking-wide text-gray-800 cursor-pointer transition-colors duration-300 hover:text-green-700 animate-pulse"
                onClick={handleClickCustomerPhoneIcon}
              >
                Customer Service: 
                <span className="text-xl"> +254742222888</span>
              </p>            
            <button
                onClick={handleClickWhatsappIcon}
                className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-700 text-white flex items-center justify-center rounded-full shadow-xl transition-transform duration-300 hover:scale-110 hover:brightness-110 active:scale-95 animate-pulse"
              >
                <WhatsApp fontSize="large" />
              </button>

          </div>
              
          )}


              <style jsx>
                {`
                  @media (max-width: 768px) {
                    div {
                      justify-content: center;
                    }
                    p {
                      font-size: 0.75rem;
                      margin: 0 auto;
                    }

                    p:hover {
                      color: red;
                    }
                  }

                  @media (max-width: 480px) {
                    div {
                      justify-content: center;
                    }
                    p {
                      font-size: 0.7rem;
                      margin: 0 auto;
                    }

                    p:hover {
                      color: red;
                    }
                  }
                `}
              </style>

            {/* Icons end (aligned right) */}
            
           

                        <Button
                        startIcon={<AccountCircleIcon />}
                        size="medium"
                        variant="contained"
                        onClick={handlePortalClick}
                        sx={{
                          backgroundColor: "#157EBC",
                          color: "#fff",
                          textTransform: "none",
                          px: { xs: 1.5, sm: 2 }, // Smaller padding on extra-small screens
                          py: { xs: 0.5, sm: 1 }, // Reduce height on small screens
                          fontSize: { xs: "0.75rem", sm: "0.875rem" }, // Smaller font size on extra-small screens
                          borderRadius: "8px",
                          fontWeight: 500,
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                          "&:hover": {
                            backgroundColor: "#125E8A",
                            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
                          },
                          minWidth: { xs: "auto", sm: "120px" }, // Adjust width on small screens
                        }}
                        aria-controls="custom-menu"
                        aria-haspopup="true"
                      >
                        Portals
                      </Button>
                      <Menu
            id="custom-menu"
            anchorEl={anchorElPortal}
            open={Boolean(anchorElPortal)}
            onClose={handlePortalClose}
            sx={{
              "& .MuiPaper-root": {
                borderRadius: "8px",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                minWidth: "160px", // Reduced width for a smaller menu
              },
            }}
          >
            {[
              { label: "Customer Portal", url: "https://portal.birdviewinsurance.com/login?user=Customer" },
              { label: "Agent Portal", url: "https://portal.birdviewinsurance.com/login?user=Agent" },
              // { label: "Broker Portal", url: "https://portal.birdviewinsurance.com/login?user=Broker" },
              { label: "Provider Portal", url: "https://portal.birdviewinsurance.com/login?user=Provider" },
              { label: "Agent Application", url: "/agent-Registration" },
              // { label: "Broker Aplication", url:"https://www.birdviewmicroinsurance.com/broker-Registration"},
              { label: "Group Member", url: "https://www.birdviewmicroinsurance.com/group-forms" },
            ].map((item, index, array) => (
              <div key={item.label}>
                <MenuItem
                  onClick={handlePortalClose}
                  sx={{
                    padding: "4px 12px", // Reduced padding for a smaller look
                    "&:hover": { backgroundColor: "#f5f5f5" },
                  }}
                >
                  <Button
                    sx={{
                      textTransform: "none",
                      padding: "0",
                      minWidth: "auto",
                      fontSize: "0.75rem", // Smaller font size
                      fontWeight: 500,
                      color: "#157EBC",
                      "&:hover": { color: "#125E8A" },
                    }}
                    onClick={() => (window.location.href = item.url)}
                    size="small"
                  >
                    {item.label}
                  </Button>
                </MenuItem>
                {index < array.length - 1 && <Divider />}
              </div>
            ))}
          </Menu>
            
           

            <Tooltip title="Birdview Press" arrow>
              <IconButton onClick={() => router.push("/press")} size="large" sx={{ color: "#157EBC" }}>
                <Badge variant="dot" color="success">
                  <PublicIcon sx={{ color: "#F57C00" }} />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Birdview Blog" arrow>
              <IconButton onClick={() => router.push("/blogs")} size="large" sx={{ color: "#ffc107" }}>
                <Badge variant="dot" color="info">
                  <NewspaperOutlinedIcon sx={{ color: "#292826" }} />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Birdview Notice Board" arrow>
              <IconButton onClick={() => router.push("/notice-board")} size="large" sx={{ color: "#E42D2C" }}>
                <Badge variant="dot" color="error">
                  <NotificationsIcon sx={{ color: "#FFD700" }} />
                </Badge>
              </IconButton>
            </Tooltip>

            {/* Navigation Bar */}
           {isSmallScreen &&
            <SwipeableDrawer setActiveComponent={setActiveComponent}  />
          }
          </Toolbar>
        </AppBar>
        
      </div>
    </>
      {!isSmallScreen &&
      <div className="flex bg-blueCustom items-center justify-center space-x-4 text-white py-4">
          
      <HomeSubMenu
        setActiveComponent={setActiveComponent}
        buttonLabel="Home" // Button label
      />
      <ProductAndServiceSubMenu
         setActiveComponent={setActiveComponent}
         buttonLabel="Products & Services" // Button label
       />
        
      <ClaimsSubMenu
            setActiveComponent={setActiveComponent}
            buttonLabel="Claims" // Button label
       />
      <QuotesSubMenu
           setActiveComponent={setActiveComponent}
            buttonLabel="Get Quote" // Button label
       />

      </div>
        }

        </div>
 
    </>
  );
};

export default Dashboard;

