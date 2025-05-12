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


const AgentForm = () => {



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
      mobileno: value, 
    }));
  };

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde",
    "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)",
    "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia", "Fiji", "Finland",
    "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
    "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
    "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait",
    "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
    "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru",
    "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman",
    "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
    "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
    "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];
   
  const [entries, setEntries] = useState([]);
 
  const [date, setDate] = useState("");

  const [errors, setErrors] = useState({});

  const router = useRouter();

  // Initialize formData 
  const [formData, setFormData] = useState({  
    title: "",
    firstname: "",
    middlename: "",
    lastname: "",
    gender: "",
    mobileno: "",
    postal_address: "",
    idtype: "",
    idno: "",
    pin_no: "",
    dateofbirth: "",
    country: "",
    city: "",
    eimail: "",
    company_name: "",
    company_certificate: "",

});


  const handleChange = (e) => {
    const { name, value } = e.target;
 


  if(name ==="selectedCountry"){

      // Get the selected country's full name
      const selectedCountryObj = Country.getAllCountries().find(c => c.isoCode === value);
      const countryName = selectedCountryObj ? selectedCountryObj.name : "";
      setFormData((prev) => ({
        ...prev,
        selectedCountry: countryName, // Store country name instead of isoCode
        selectedCity:""
      }));


      }else{

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  }

  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoaderIcon(true);
  
    const selectedDate = new Date(formData.dateofbirth);
    const today = new Date();
    const age = today.getFullYear() - selectedDate.getFullYear();
    const hasHadBirthdayThisYear =
      today.getMonth() > selectedDate.getMonth() ||
      (today.getMonth() === selectedDate.getMonth() &&
        today.getDate() >= selectedDate.getDate());
    const actualAge = hasHadBirthdayThisYear ? age : age - 1;
  
    setErrors({});
  
    if (actualAge < 18) {
      setErrors({ dateofbirth: "You must be at least 18 years old." });
      setLoaderIcon(false);
      return;
    }
  
    try {
      const res = await axios.post(
        '/api/agent-form',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000,
        }
      );
  
      setFormData({
        title: '',
        firstname: '',
        middlename: '',
        lastname: '',
        gender: '',
        mobileno: '',
        postal_address: '',
        idtype: '',
        idno: '',
        pin_no: '',
        dateofbirth: '',
        country: '',
        city: '',
        eimail: '',
        company_name: '',
        company_certificate: '',
      });
  
      if (res.status === 200) {
        setAlertType('success');
        setAlertMessage(res.data.message);
  
        setTimeout(() => {
          router.push('/');
        }, 5000);
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
    title: "",
    firstname: "",
    middlename: "",
    lastname: "",
    gender: "",
    mobileno: "",
    postal_address: "",
    idtype: "",
    idno: "",
    pin_no: "",
    dateofbirth: "",
    country: "",
    city: "",
    eimail: "",
    company_name: "",
    company_certificate: "",
   
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
               
                          {alertMessage && (
                          <div className="w-full px-4 mb-4">
                            <Alert
                              severity={alertType}
                              onClose={() => setAlertMessage('')}
                              variant="filled"
                              sx={{
                                borderRadius: '8px',
                                fontSize: '1rem',
                                fontWeight: 500,
                              }}
                            >
                              {alertMessage}
                            </Alert>
                          </div>
                        )}

                        <form 
                          style={{ boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)" }} 
                          className="flex flex-col space-y-10  bg-white rounded-lg shadow-xl"
                          onSubmit={handleSubmit}
                        >
                          <br/>
                          <div className="text-gray-800 font-bold mb-2 flex flex-col sm:flex-row items-center sm:justify-between text-center relative">
                          {/* Logo (Centered) */}
                          <div className="flex-shrink-0">
                            <Image
                              width={180}
                              height={50}
                              src="/images/logo.jpeg"
                              alt="Logo"
                              style={{
                                width: "19%",
                                height: "auto",
                                maxWidth: "360px",
                                minWidth: "220px",
                                transition: "width 0.3s ease-in-out",
                              }}
                            />
                          </div>

                          {/* Centered Text (Moves below on small screens) */}
                          <div className="mt-6 sm:mt-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 text-center">
                          <h2 className="text-2xl font-semibold text-gray-800 tracking-wide">
                            Agent Registration Forms
                          </h2>
                          <div className="w-16 h-1 bg-blue-600 mt-2 mx-auto rounded"></div>
                        </div>

                        </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
                          <TextField
                              select
                              required
                              name="title"
                              label="Title"
                              variant="outlined"
                              value={formData.title}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 rounded-lg"
                            >
                              {["Mr", "Mrs", "Miss", "Ms", "Dr", "Prof"].map((title) => (
                                <MenuItem key={title} value={title}>
                                  {title}
                                </MenuItem>
                              ))}
                            </TextField>
                                
                            <TextField
                              required
                              name="firstname"
                              label="First Name"
                              variant="outlined"
                              value={formData.firstname}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 rounded-lg"
                            />

                            <TextField 
                              name="middlename"
                              label="Middle Name"
                              variant="outlined"
                              value={formData.middlename}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 rounded-lg"
                            />
                            
                            <TextField 
                              required
                              name="lastname"
                              label="Last Name"
                              variant="outlined"
                              value={formData.lastname}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 rounded-lg"
                            />
                            
                            <TextField
                              required
                              name="gender"
                              select
                              label="Gender"
                              variant="outlined"
                              value={formData.gender}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 rounded-lg"
                            >
                              <MenuItem value="Male">Male</MenuItem>
                              <MenuItem value="Female">Female</MenuItem>
                              <MenuItem value="Others">Others</MenuItem>
                            </TextField>

                            <PhoneInput
                              required
                              country={"ke"} 
                              value={formData.mobileno}
                              onChange={handlePhoneChange}
                              inputStyle={{
                                width: "100%",
                                height: "55px",
                                borderRadius: "4px",
                                backgroundColor: "#f3f4f6"
                              }}
                              buttonClass="!bg-gray-200 !border-r"
                              containerClass="!w-full"
                            />

                            <TextField 
                              name="postal_address"
                              label="Postal Address"
                              variant="outlined"
                              value={formData.postal_address}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 rounded-lg"
                            />

                            <TextField
                              required
                              name="idtype"
                              select
                              label="Identification Type"
                              variant="outlined"
                              value={formData.idtype}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 rounded-lg"
                            >
                              <MenuItem value="National ID">National ID</MenuItem>
                              <MenuItem value="Passport">Passport</MenuItem>
                            </TextField>

                            <TextField 
                              required
                              name="idno"
                              label="Identification Number"
                              variant="outlined"
                              value={formData.idno}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 rounded-lg"
                            />

                            <TextField 
                              name="pin_no"
                              label="KRA Pin Number"
                              variant="outlined"
                              value={formData.pin_no}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 rounded-lg"
                            />

                            <div className="flex flex-col">
                              <TextField
                                label="Date of Birth"
                                name="dateofbirth"
                                type="date"
                                value={formData.dateofbirth}
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    dateofbirth: e.target.value,
                                  }))
                                }
                                InputLabelProps={{ shrink: true }}
                                className="bg-gray-100 rounded-lg"
                                fullWidth
                                error={!!errors.dateofbirth}
                              />
                              {errors.dateofbirth && (
                                <span className="text-sm text-red-600 mt-1 ml-1">
                                  {errors.dateofbirth}
                                </span>
                              )}
                            </div>

                            <TextField
                              required
                              name="country"
                              select
                              label="Country Of Residence Of Agent"
                              variant="outlined"
                              value={formData.country}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 rounded-lg"
                            >
                              {countries.map((country) => (
                                <MenuItem key={country} value={country}>
                                  {country}
                                </MenuItem>
                              ))}
                            </TextField>

                            <TextField 
                              required
                              name="city"
                              label="City Of Residence Of Agent"
                              variant="outlined"
                              value={formData.city}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 rounded-lg"
                            />

                            <TextField 
                              required
                              name="eimail"
                              label="Email"
                              variant="outlined"
                              value={formData.eimail}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 rounded-lg"
                            /> 

                            <TextField 
                              name="company_name"
                              label="Company Name"
                              variant="outlined"
                              value={formData.company_name}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 rounded-lg"
                            /> 

                            <TextField 
                              name="company_certificate"
                              label="Company Certificate"
                              variant="outlined"
                              value={formData.company_certificate}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 rounded-lg"
                            />
                            
                          </div>                                                          

                                      <div className="flex justify-center mt-8 space-x-6">
                                      <button 
                                        type="submit" 
                                        className="relative px-8 py-4 rounded-xl text-white font-extrabold text-lg 
                                                  bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg 
                                                  hover:from-blue-600 hover:to-blue-800 hover:shadow-blue-500/50 
                                                  focus:ring-4 focus:ring-blue-400 
                                                  transition-all duration-300 ease-in-out 
                                                  before:absolute before:inset-0 before:bg-white/10 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-300 before:hover:opacity-100 
                                                  hover:scale-105"
                                      >
                                        Submit
                                      </button>
                                      <button 
                                        type="reset" 
                                        onClick={handleReset}
                                        className="relative px-8 py-4 rounded-xl text-white font-extrabold text-lg 
                                                  bg-gradient-to-r from-red-500 to-red-700 shadow-lg 
                                                  hover:from-red-600 hover:to-red-800 hover:shadow-red-500/50 
                                                  focus:ring-4 focus:ring-red-400 
                                                  transition-all duration-300 ease-in-out 
                                                  before:absolute before:inset-0 before:bg-white/10 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-300 before:hover:opacity-100 
                                                  hover:scale-105"
                                      >
                                        Reset
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

export default AgentForm;
