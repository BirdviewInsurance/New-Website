import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from 'axios';
import { useRouter } from 'next/router';

// Mui imports
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
  
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

 
import {  Dialog, DialogActions, DialogContent, DialogTitle,   Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import SaveAsIcon from '@mui/icons-material/SaveAs';
 

import { Country, City } from "country-state-city";

// Importing components
import BackgroundImage from '../components/BackgroundImage';


const JobApplicationForm = () => {



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
   
  const handlePhoneChange = (value, string) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value, 
    }));
  };

   
  const [entries, setEntries] = useState([]);
 
  const [date, setDate] = useState("");

  const [errors, setErrors] = useState({});

  const router = useRouter();

  // Initialize formData 
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoaderIcon(true);
  
    const data = new FormData();
    data.append("fullname", formData.fullname);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("position", formData.position);
    data.append("coverLetter", formData.coverLetter);
    data.append("resume", formData.resume);
  
    try {
      const res = await axios.post('/api/agent-form', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 10000,
      });
  
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        position: "",
        coverLetter: "",
        resume: null,
      });
  
      if (res.status === 200) {
        setAlertType('success');
        setAlertMessage(res.data.message);
        setTimeout(() => router.push('/'), 5000);
      } else {
        setAlertType('error');
        setAlertMessage(`Error: ${res.data.error || 'Something went wrong'}`);
      }
    } catch (error) {
      setAlertType('error');
      setAlertMessage(`Error: ${error.response?.data?.error || error.message}`);
    } finally {
      setSnackbarOpen(true);
      setLoaderIcon(false);
    }
  };  
  

const handleReset = () => {
  // Reset the formData state
  setFormData({
    fullname: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
    resume: null,
   
  });
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
        <div className="bg-white w-full max-w-[calc(100%-2rem)] p-1 flex flex-col items-center justify-start overflow-visible rounded-3xl">

          <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-8 mb-4'> 
          </div>
                                      
          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl w-full mx-auto p-8 bg-white shadow-xl rounded-3xl border border-gray-200"
            >
             {/* Header Section */}
                                      <div className="text-center relative">
                                        <div className="mb-4">
                                          <Image
                                            width={180}
                                            height={50}
                                            src="/images/logo.jpeg"
                                            alt="Logo"
                                            className="mx-auto transition-all duration-300"
                                            style={{ maxWidth: "240px" }}
                                          />
                                        </div>
                                        <h2 className="text-3xl font-bold text-gray-800 tracking-wide">
                                          Job Application Form
                                        </h2>
                                        <div className="w-16 h-1 bg-blue-600 mt-3 mx-auto rounded-full"></div>
                                      </div>

            {/* Full Name */}
            <div className="mb-5">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                Full Name <span className="text-red-500">*</span>
                </label>
                <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
                placeholder="e.g. Jane Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
            </div>

            {/* Email */}
            <div className="mb-5">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                Email Address <span className="text-red-500">*</span>
                </label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="e.g. jane@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
            </div>

            {/* Phone Number */}
            <div className="mb-5">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                Phone Number <span className="text-red-500">*</span>
                </label>
                <PhoneInput
                country={"ke"}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputStyle={{
                    width: "100%",
                    height: "55px",
                    borderRadius: "12px",
                    backgroundColor: "#f9fafb",
                    border: "1px solid #d1d5db",
                    fontSize: "16px",
                }}
                buttonClass="!bg-gray-100 !border-r"
                containerClass="!w-full"
                />
            </div>

            {/* Position */}
            <div className="mb-5">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                Position Applied For <span className="text-red-500">*</span>
                </label>
                <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                <option value="">Select Position</option>
                <option value="underwriting">Underwriting</option>
                <option value="claims">Claims</option>
                <option value="finance">Finance & Admin</option>
                <option value="marketing">Marketing</option>
                <option value="management">Management</option>
                </select>
            </div>

            {/* Cover Letter */}
            <div className="mb-5">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                Cover Letter
                </label>
                <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows={5}
                placeholder="Write a brief cover letter here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
            </div>

            {/* Resume Upload */}
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                Resume <span className="text-red-500">*</span>
                </label>
                <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                />
            </div>

            {/* Submit Button */}
            <div className="text-center">
                <button
                type="submit"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300"
                >
                Submit Application
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

export default JobApplicationForm;
