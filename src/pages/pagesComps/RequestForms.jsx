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
import { request } from 'http';

const Request = () => {
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
 
  const handleReset = () => {
    // Reset the formData state
    setFormData({
      fullname: '',
      request: '',
      endgoal: '',
      requesteffect: '',
    });
  };
  // State to manage form inputs
  const [formData, setFormData] = useState({
    fullname: '',
    request: '',
    endgoal: '',
    requesteffect: '',
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
        fullname: '',
        request: '',
        endgoal: '',
        requesteffect: '',
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


          
          </div>


          {/* Form Section */}
          <form  style={{ boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)" }}  className="w-full p-4 rounded-lg " onSubmit={handleSubmit}>
          <p className="text-gray-700 text-lg font-bold"
                      >Request Forms (Disclaimer: Changes can only take effect after 1 week)
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-4">
                <div className="flex flex-1">
                    <TextField 
                        required
                        name="fullname"
                        label="Full Name"
                        variant="outlined"
                        value={formData.fullname}
                        onChange={handleChange}
                        fullWidth
                    />
                </div>
                <div className="flex flex-1">
                    <TextField 
                        required
                        name="request"
                        label="Request"
                        variant="outlined"
                        value={formData.request}
                        onChange={handleChange}
                        fullWidth
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <TextField 
                name="endgoal"
                label="End Goal"
                variant="outlined"
                multiline
                rows={4}
                value={formData.endgoal}
                onChange={handleChange}
                fullWidth
              />
              <TextField 
                required
                name="requesteffect"
                label="Request Effect"
                variant="outlined"
                multiline
                rows={4}
                value={formData.requesteffect}
                onChange={handleChange}
                fullWidth
              />
            </div>
            <div className="flex justify-center space-x-4">
            <Button 
                type="submit" 
                variant="contained" 
                style={{ backgroundColor: '#157EBC' }} 
                className="px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            >
                Submit
            </Button>
            <Button 
                type="reset" 
                variant="contained" 
                style={{ backgroundColor: '#FF0000' }} 
                className="px-6 py-3 rounded-lg text-white font-semibold hover:bg-red-600 focus:ring-2 focus:ring-red-400 transition-all duration-200"
                onClick={handleReset}
            >
                Reset
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

export default Request;
