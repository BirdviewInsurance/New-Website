import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Mui imports
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


import { Country, City } from "country-state-city";

// Importing components
import BackgroundImage from '../components/BackgroundImage';


const MemberForm = () => {
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
   
  const [entries, setEntries] = useState([]);
 
  const [date, setDate] = useState("");

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);


  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
    setSelectedCity("");

    const countryCities = City.getCitiesOfCountry(countryCode) || [];
    setCities(countryCities);
  };


  const [formsData, setFormsData] = useState({
    title: "",
    firstname: "",
  });
  

  const handleReset = () => {
    // Reset the formData state
    setFormData({
      groupname: '',
        groupnumber: '',
        relationship: '',
        title: '',
        firstname: '',
        lastname: '',
        middlename: '',
        idtype: '',
        idno: '',
        dateofbirth: '',
        gender: '',
        selectedCountry: '',
        selectedCity: '',
        address: '',
        mobileno: '',
        eimail: '',
        titles: '',
        firstnames: '',
        lastnames: '',
        middlenames: '',
        idtypes: '',
        idnos: '',
        dob: '',
        genders: '',
        selectedCountry: '',
        selectedCity: '',
    });
  };

  // State to manage form inputs
  const [formData, setFormData] = useState({
    groupname: '',
    groupnumber: '',
    relationship: '',
    title: '',
    firstname: '',
    lastname: '',
    middlename: '',
    idtype: '',
    idno: '',
    dateofbirth: '',
    gender: '',
    selectedCountry: '',
    selectedCity: '',
    address: '',
    mobileno: '',
    eimail: '',
    titles: '',
    firstnames: '',
    lastnames: '',
    middlenames: '',
    idtypes: '',
    idnos: '',
    dob: '',
    genders: '',
    selectedCountry: '',
    selectedCity: '',
  });

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  
  useEffect(() => {
    console.log("****",formData,"****");

  }, [formData]);// Handle form submission
  
  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);
    
  useEffect(() => {
    const storedEntries = localStorage.getItem("entries");
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []); // Runs only once when the component mounts
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoaderIcon(true);
    try {
      const res = await fetch('/api/member-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setFormData({
        groupname: '',
        groupnumber: '',
        relationship: '',
        title: '',
        firstname: '',
        lastname: '',
        middlename: '',
        idtype: '',
        idno: '',
        dateofbirth: '',
        gender: '',
        selectedCountry: '',
        selectedCity: '',
        address: '',
        mobileno: '',
        eimail: '',
        titles: '',
        firstnames: '',
        lastnames: '',
        middlenames: '',
        idtypes: '',
        idnos: '',
        dob: '',
        genders: '',
        selectedCountry: '',
        selectedCity: '',
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
        <div className="bg-white w-full max-w-[calc(100%-2rem)] p-1 flex flex-col items-center justify-start overflow-visible rounded-3xl">
           
 


          <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-8 mb-4'> 


          
             
          </div>


          {/* Form Section */}
                        <form 
                          style={{ boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)" }} 
                          className="w-full  bg-white rounded-lg shadow-xl"
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
                          <div className="mt-2 sm:mt-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
                            <p>Member Detail Forms</p>
                          </div>
                        </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
                            <TextField 
                              required
                              name="groupname"
                              label="Group Name"
                              variant="outlined"
                              value={formData.groupname}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 mb-6"
                            />
                              
                            <TextField 
                              required
                              name="groupnumber"
                              label="Group Number"
                              variant="outlined"
                              value={formData.groupnumber}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 mb-6"
                            />
                            <TextField
                            required
                            name="relationship"
                            select
                            label="Relationship"
                            variant="outlined"
                            value={formData.relationship}
                            onChange={handleChange}
                            fullWidth
                            className="bg-gray-100 mb-6"
                            >
                            <MenuItem value="Principal">Principal</MenuItem>
                            <MenuItem value="Membership">Membership</MenuItem>
                            </TextField>
                            
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
                              {["Mr", "Mrs", "Miss", "Dr", "Prof"].map((title) => (
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
                              required
                              name="lastname"
                              label="Last Name"
                              variant="outlined"
                              value={formData.lastname}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100"
                            />
                            <TextField 
                              required
                              name="middlename"
                              label="Middle Name"
                              variant="outlined"
                              value={formData.middlename}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 mb-6"
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
                            className="bg-gray-100 mb-6"
                            >
                            <MenuItem value="National ID">National ID</MenuItem>
                            <MenuItem value="Passport">Passport</MenuItem>
                            <MenuItem value="Birth Certificate">Birth Certificate</MenuItem>
                            </TextField>
                            <TextField 
                            required
                            name="idno"
                            label="Identification Number"
                            variant="outlined"
                            value={formData.idno}
                            onChange={handleChange}
                            fullWidth
                            className="bg-gray-100 mb-6"

                            />
                            <TextField
                            label="Date of Birth"
                            name="dateofbirth"
                            type="date"
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                dateofbirth: e.target.value,
                              }))
                            }
                            InputLabelProps={{ shrink: true }}
                            className="bg-gray-100 mb-6"
                            fullWidth
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
                            className="bg-gray-100 mb-6"
                            >
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Others">Others</MenuItem>
                            </TextField>
                           <TextField
                              select
                              label="Select Country"
                              value={selectedCountry}
                              onChange={(e) => handleCountryChange(e.target.value)}
                              fullWidth
                              className="bg-gray-100 mb-6"
                            >
                              {Country.getAllCountries().map((country) => (
                                <MenuItem key={country.isoCode} value={country.isoCode}>
                                  {country.name}
                                </MenuItem>
                              ))}
                            </TextField>
                            <TextField
                              select
                              label="Select City"
                              value={selectedCity}
                              onChange={(e) => setSelectedCity(e.target.value)}
                              fullWidth
                              className="bg-gray-100 mb-6"
                              disabled={!selectedCountry}
                            >
                              {cities.length > 0 ? (
                                cities.map((city) => (
                                  <MenuItem key={city.name} value={city.name}>
                                    {city.name}
                                  </MenuItem>
                                ))
                              ) : (
                                <MenuItem disabled>No cities available</MenuItem>
                              )}
                            </TextField>
                            <TextField 
                              required
                              name="address"
                              label="Physical / Postal Address"
                              variant="outlined"
                              value={formData.address}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 mb-6"
                            />
                            <div className="mb-6">
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
                              />
                            </div>
                            <TextField 
                              required
                              name="eimail"
                              label="Email"
                              variant="outlined"
                              value={formData.eimail}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 mb-6"
                            /> 
                            <div>
                            
                          </div>
                            
                          </div>
                          <div className="flex justify-left items-center py-4 m-4">
                            <p className="text-xl font-semibold text-gray-700">Dependant Details</p>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
                          <TextField
                              select
                              required
                              name="titles"
                              label="Title"
                              variant="outlined"
                              value={formData.titles}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 rounded-lg"
                            >
                              {["Mr", "Mrs", "Miss", "Dr", "Prof"].map((title) => (
                                <MenuItem key={title} value={title}>
                                  {title}
                                </MenuItem>
                              ))}
                            </TextField>
                            <TextField
                              required
                              name="firstnames"
                              label="First Name"
                              variant="outlined"
                              value={formData.firstnames}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 rounded-lg"
                            />
                              
                            <TextField 
                              required
                              name="lastnames"
                              label="Last Name"
                              variant="outlined"
                              value={formData.lastnames}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100"
                            />
                            <TextField 
                              required
                              name="middlenames"
                              label="Middle Name"
                              variant="outlined"
                              value={formData.middlenames}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 mb-6"
                            />
                             <TextField
                            required
                            name="idtypes"
                            select
                            label="Identification Type"
                            variant="outlined"
                            value={formData.idtypes}
                            onChange={handleChange}
                            fullWidth
                            className="bg-gray-100 mb-6"
                            >
                            <MenuItem value="National ID">National ID</MenuItem>
                            <MenuItem value="Passport">Passport</MenuItem>
                            <MenuItem value="Birth Certificate">Birth Certificate</MenuItem>
                            </TextField>
                            <TextField 
                            required
                            name="idnos"
                            label="Identification Number"
                            variant="outlined"
                            value={formData.idnos}
                            onChange={handleChange}
                            fullWidth
                            className="bg-gray-100 mb-6"
                            />
                           <TextField
                              name="dob"
                              label="Date of Birth"
                              type="date"
                              value={formData.dob}  
                              onChange={(e) => setDate(e.target.value)} 
                              InputLabelProps={{ shrink: true }}
                              className="bg-gray-100 mb-6"
                              fullWidth
                            />
                            <TextField
                            required
                            name="genders"
                            select
                            label="Gender"
                            variant="outlined"
                            value={formData.genders}
                            onChange={handleChange}
                            fullWidth
                            className="bg-gray-100 mb-6"
                            >
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Others">Others</MenuItem>
                            </TextField>
                            <TextField
                              select
                              label="Select Country"
                              value={selectedCountry}
                              onChange={(e) => handleCountryChange(e.target.value)}
                              fullWidth
                              className="bg-gray-100 mb-6"
                            >
                              {Country.getAllCountries().map((country) => (
                                <MenuItem key={country.isoCode} value={country.isoCode}>
                                  {country.name}
                                </MenuItem>
                              ))}
                            </TextField>
                            <TextField
                              select
                              label="Select City"
                              value={selectedCity}
                              onChange={(e) => setSelectedCity(e.target.value)}
                              fullWidth
                              className="bg-gray-100 mb-6"
                              disabled={!selectedCountry}
                            >
                              {cities.length > 0 ? (
                                cities.map((city) => (
                                  <MenuItem key={city.name} value={city.name}>
                                    {city.name}
                                  </MenuItem>
                                ))
                              ) : (
                                <MenuItem disabled>No cities available</MenuItem>
                              )}
                            </TextField>
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

export default MemberForm;


const handleChangeDep = (event) => {
    const { name, value } = event.target;
    setCurrentDependant((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({...prev, [name]: '' }));  
  };