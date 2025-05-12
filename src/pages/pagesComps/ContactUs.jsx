import React, { useState } from 'react';

// Mui imports
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


// Importing components
import BackgroundImage from '../components/BackgroundImage';
import AnimationDownToUp from './components/Animation/AnimationDownToUp';
import AnimationRightToLeft from './components/Animation/AnimationRightToLeft';

import { WhatsApp } from "@mui/icons-material";

const ContactUs = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [alertType, setAlertType] = useState('success'); // 'success' or 'error'
  const [alertMessage, setAlertMessage] = useState('');
  const [loaderIcon, setLoaderIcon] = useState(false);

  // Handle Snackbar close
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };
 

  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    enquiryType: '',
    details: '',
  });

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
    // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoaderIcon(true);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        enquiryType: '',
        details: '',
      });

      const data = await res.json();

      if (res.ok) {
        // Show success snackbar
        setAlertType('success');
        setAlertMessage(data.message);
        setSnackbarOpen(true);
        setLoaderIcon(false);
      } else {
        // Show error snackbar
        setAlertType('error');
        setAlertMessage(`Error: ${data.error}`);
        setSnackbarOpen(true);
        setLoaderIcon(false);

      }
    } catch (error) {
      // Show error snackbar
      setAlertType('error');
      setAlertMessage(`Error: ${error.message}`);
      setSnackbarOpen(true);
      setLoaderIcon(false);

    }
  };

  const handleClickWhatsappIcon = () => {
    window.location.href = "https://wa.me/254742222888";
  } 

  return (
    <div className="relative bg-gray-100">

      { loaderIcon &&
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/75">
         <div className="loaderIcon">
                <div className="Iconbar bg-redCustom"></div>
                <div className="Iconbar bg-blueCustom"></div>
                <div className="Iconbar bg-redCustom"></div>
                <div className="Iconbar bg-blueCustom"></div>
          </div>
        </div>
      }

      {/* Top Div with BackgroundImage */}
 
       <BackgroundImage/>

      {/* Container for Bottom Div */}
      <div className="relative top-[-40px] left-0 right-0 flex justify-center">
        <div className="bg-white w-full max-w-[calc(100%-2rem)] p-2 flex flex-col items-center justify-start overflow-visible rounded-3xl">
           
 


          <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-8 mb-4'> 


          <AnimationDownToUp index={0}>
            <div
             style={{ boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)" }}
              className="max-w-3xl mx-auto bg-white rounded-lg   overflow-hidden p-6 flex-grow h-full"
            >
              <div className="flex flex-col md:flex-row md:items-start items-center space-y-4 md:space-y-0 md:space-x-6">
              <AnimationRightToLeft index={4}>
                <p className="text-gray-700 text-lg font-bold text-center md:text-left">Our Contact Details:</p>
                <div className="flex flex-col items-center md:items-start space-y-3">
                  
                  <a href="tel:+254742222888" className="flex items-center space-x-2 p-3">
                    <PhoneInTalkIcon className="text-white bg-blueCustom rounded-full p-2 w-10 h-10" />
                    <span className="text-sm md:text-base">+254 742 222 888</span>
                  </a>

                  <a href="tel:+254742222888" className="flex items-center space-x-2 p-3">
                    <PhoneInTalkIcon className="text-white bg-blueCustom rounded-full p-2 w-10 h-10" />
                    <span className="text-sm md:text-base">+254 111 056 610</span>
                  </a>

                  <a
                    href="tel:+254742222888"
                    onClick={(e) => {
                      e.preventDefault(); 
                      handleClickWhatsappIcon(); 
                    }}
                    className="flex items-center space-x-2 p-3"
                  >
                    <WhatsApp className="text-white bg-green-500 rounded-full p-2 w-10 h-10" />
                    <span className="text-sm md:text-base">+254 742 222 888</span>
                  </a>

                  <a href="mailto:customerservice@birdviewinsurance.com" className="flex items-center space-x-2 p-3">
                    <MailOutlineIcon className="text-white bg-blueCustom rounded-full p-2 w-10 h-10" />
                    <span className="text-sm md:text-base">customerservice@birdviewinsurance.com</span>
                  </a>

                </div>
              </AnimationRightToLeft>
            </div>

            </div>
          </AnimationDownToUp>
          
              <AnimationDownToUp   index={0}>
                <div 
                 style={{ boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)" }}
                  className="max-w-3xl mx-auto bg-white rounded-lg   overflow-hidden mb-4 p-4 flex-grow h-full"
                >
                  <div className="flex flex-col md:flex-row items-center mb-10">
                    <div className="flex flex-col">
                    <AnimationRightToLeft index={4} >
                      <p className="text-gray-700 text-lg font-bold"
                      >Drop us a Message
                      </p>
                      <p 
                    className="text-gray-700 " 
                    >
                   By submitting this contact form, you indicate your consent to receiving communication and targeted email marketing messages from us. On each occasion that we contact you in the future you will be given the option to opt-out from receiving such messages. You can also email Customerservice@birdviewinsurance.com at any time to opt-out.
                    </p>
                    </AnimationRightToLeft>
                    </div>
                  </div>
                </div>
              </AnimationDownToUp>
             
          </div>


          {/* Form Section */}
          <form  style={{ boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)" }}  className="w-full p-4 rounded-lg " onSubmit={handleSubmit}>
          <p className="text-gray-700 text-lg font-bold"
                      >Inquiry Forms
                      </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-4">

              <TextField 
                required
                name="firstName"
                label="First Name"
                variant="outlined"
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
              />
              <TextField 
                required
                name="lastName"
                label="Last Name"
                variant="outlined"
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
              />
              <TextField 
                name="email"
                label="Email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />
              <TextField 
                name="phone"
                label="Phone"
                variant="outlined"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                required
                name="enquiryType"
                select
                label="Enquiry Type"
                variant="outlined"
                value={formData.enquiryType}
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                <MenuItem value="Insurance">Insurance</MenuItem>
                <MenuItem value="Payment">Payment</MenuItem>
                <MenuItem value="Support">Support</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
              <TextField 
                required
                name="details"
                label="Details"
                variant="outlined"
                multiline
                rows={4}
                value={formData.details}
                onChange={handleChange}
                fullWidth
              />
            </div>
            <div className="flex justify-center">
            <Button 
                            type="submit" 
                            variant="contained" 
                            style={{ backgroundColor: '#157EBC' }} 
                            className="px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 transition-all duration-200"
                          >
                            Submit
                          </Button>
            </div>
            
          </form>
        </div>
      </div>

         {/* Snackbar for success and error messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={alertType} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>

    </div>
  );
};

export default ContactUs;
