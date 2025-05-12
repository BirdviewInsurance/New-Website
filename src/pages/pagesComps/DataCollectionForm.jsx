import React, { useState } from 'react';
import axios from 'axios';

// Mui imports
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


// Importing components
import BackgroundImage from '../components/BackgroundImage';
import AnimationDownToUp from './components/Animation/AnimationDownToUp';
import AnimationRightToLeft from './components/Animation/AnimationRightToLeft';

const DataCollectionForm = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [alertType, setAlertType] = useState('success'); // 'success' or 'error'
  const [alertMessage, setAlertMessage] = useState('');
  const [loaderIcon, setLoaderIcon] = useState(false);

  const handlePhoneChange = (value, string) => {
    setFormData((prevData) => ({
      ...prevData,
      mobileno: value, 
    }));
  };

  // Handle Snackbar close
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };
 

  // State to manage form inputs
  const [formData, setFormData] = useState({
        agencyName: '',
        location: '',
        contactPerson: '',
        email: '',
        mobileno: '',
        atendeeRegNo: '',
        estimation:'',
        disclaimer: '',
        
  });

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  

  const [submitted, setSubmitted] = useState(false);
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent default form submission
      setLoaderIcon(true);
      setSubmitted(true);
      try {
        const res = await axios.post('/api/data-form', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000, 
        });
  
        setFormData({
          agencyName: '',
          location: '',
          contactPerson: '',
          mobileno: '',
          email: '',
          atendeeRegNo: '',
          estimation: '',
          disclaimer: '',
        });
  
        const data = res.data; // ✅ Use res.data instead of res.json()
  
        if (res.status === 200) { // ✅ Use status code check instead of res.ok
          // Show success snackbar
          setAlertType('success');
          setAlertMessage(data.message);
          setSnackbarOpen(true);
        
        } else {
          // Show error snackbar
          setAlertType('error');
          setAlertMessage(`Error: ${data.error || 'Something went wrong'}`);
          setSnackbarOpen(true);
        }
      } catch (error) {
        // Show error snackbar
        setAlertType('error');
        setAlertMessage(`Error: ${error.response?.data?.error || error.message}`);
        setSnackbarOpen(true);
      } finally {
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
                            <div className="bg-white w-full max-w-[calc(100%-2rem)] p-6 flex flex-col items-center justify-start overflow-visible rounded-3xl shadow-xl">
                                
                                {/* Form Section */}
                                <form 
                                style={{ boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)" }}  
                                className="w-full max-w-3xl p-6 rounded-lg flex flex-col items-center space-y-6" 
                                onSubmit={handleSubmit}
                                >
                                {/* Form Heading */}
                                <p className="text-gray-700 text-2xl font-bold text-center">Data Collection Form For The Agency</p>

                                {/* Form Fields */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                                    <TextField 
                                    required
                                    name="agencyName"
                                    label="Agency Name"
                                    variant="outlined"
                                    value={formData.agencyName}
                                    onChange={handleChange}
                                    fullWidth
                                    disabled={submitted} 
                                    />
                                    <TextField 
                                    required
                                    name="location"
                                    label="Physical Location"
                                    variant="outlined"
                                    value={formData.location}
                                    onChange={handleChange}
                                    fullWidth
                                    disabled={submitted} 
                                    />
                                    <TextField 
                                    required
                                    name="contactPerson"
                                    label="Contact Person"
                                    variant="outlined"
                                    value={formData.contactPerson}
                                    onChange={handleChange}
                                    fullWidth
                                    disabled={submitted} 
                                    />
                                    <TextField 
                                    name="email"
                                    label="Email"
                                    variant="outlined"
                                    value={formData.email}
                                    onChange={handleChange}
                                    fullWidth
                                    disabled={submitted} 
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                                <PhoneInput
                                        required
                                        country={"ke"} 
                                        value={formData.mobileno}
                                        onChange={handlePhoneChange}
                                        inputStyle={{
                                        width: "100%",
                                        height: "55px",
                                        borderRadius: "4px",
                                    }}
                                        buttonClass="!bg-gray-200 !border-r"
                                        containerClass="!w-full"
                                        className="bg-gray-100"
                                        disabled={submitted} 
                                    />
                                    <TextField 
                                    name="atendeeRegNo"
                                    label="Attendee Registration Number"
                                    variant="outlined"
                                    value={formData.atendeeRegNo}
                                    onChange={handleChange}
                                    fullWidth
                                    disabled={submitted} 
                                    />
                                    <TextField 
                                    required
                                    name="estimation"
                                    label="Estimated No Of People Exported Per Month"
                                    variant="outlined"
                                    value={formData.estimation}
                                    onChange={handleChange}
                                    fullWidth
                                    disabled={submitted} 
                                    />
                                </div>

                                <div className="flex items-center space-x-3 w-full">
                                    <input 
                                        type="checkbox" 
                                        id="disclaimer" 
                                        name="disclaimer" 
                                        disabled={submitted} 
                                        className="w-5 h-5"
                                        defaultChecked={formData.disclaimer} 
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="disclaimer" className="text-gray-700">
                                        If you want to receive marketing communications from us, please check this box.
                                    </label>
                                </div>


                                {/* Submit Button */}
                                <div className="flex justify-center">
                                    <button 
                                    type="submit" 
                                    className="relative px-8 py-4 rounded-xl text-white font-extrabold text-lg 
                                                bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg 
                                                hover:from-blue-600 hover:to-blue-800 hover:shadow-blue-500/50 
                                                focus:ring-4 focus:ring-blue-400 
                                                transition-all duration-300 ease-in-out 
                                                before:absolute before:inset-0 before:bg-white/10 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-300 before:hover:opacity-100 
                                                hover:scale-105"
                                                disabled={submitted} 
                                    >
                                   {submitted ? "Submitted" : "Submit"}
                                    </button>
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

export default DataCollectionForm;