import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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

  const [openDialog, setOpenDialog] = useState(false);

  const [currentDependant, setCurrentDependant] = useState(null);
  const today = new Date().toISOString().split('T')[0]; 

  const [dependentCount, setDependentCount] = useState(0);

  const [errors, setErrors] = useState({});

  // Initialize formData with dependantsData
  const [formData, setFormData] = useState({  
    memberidno: "",
    groupname: "",
    groupnumber: "",
    relationship: "",
    title: "",
    firstname: "",
    lastname: "",
    middlename: "",
    idtype: "",
    idno: "",
    dateofbirth: "",
    gender: "",
    country: "",
    city: "",
    address: "",
    mobileno: "",
    eimail: "",
    dependantsData: [
      {
        id: "",
        relationship: "",
        title: "",
        firstName: "",
        middleName: "",
        surname: "",
        idtypes: "",
        idnos: "",
        dob: "",
        gendere: "",
        countrye: "",
        cities: "",
      },
    ],
});

// Generate automatic member ID based on timestamp
useEffect(() => {
    const generateMemberId = () => {
      const now = new Date();
      const uniqueNumber = `${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}${now.getMilliseconds()}`;
      const lastSixDigits = uniqueNumber.slice(-6); // Extract last 6 digits
      return `Birdview-M${lastSixDigits}`;
    };

    setFormData((prev) => ({ ...prev, memberidno: generateMemberId() }));
}, []);

// Update dependants when count changes
useEffect(() => {
  setFormData((prev) => {
    const existingDependants = prev.dependantsData || [];
    const newDependants = Array.from({ length: dependentCount }, (_, index) => {
      const existingDependant = existingDependants[index];
      return existingDependant || {
        id: index + 1, 
        relationship: "",
        title: "",
        firstName: "",
        middleName: "",
        surname: "",
        idtypes: "",
        idnos: "",
        dob: "",
        gendere: "", 
        countrye: "",
        cities: "",
      };
    });

    return {
      ...prev,
      dependantsData: newDependants,
    };
  });

}, [dependentCount]);

useEffect(() => {
  console.log("*****Data****", formData);
}, [formData]);

// Handle adding new dependant
const handleAddDependant = () => {
  setDependentCount((prev) => prev + 1);
};


  // Handle form changes (including dependants)
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
    e.preventDefault(); // Prevent default form submission
    setLoaderIcon(true);

    // Ensure dependantsData is up-to-date
    const updatedFormData = { ...formData, dependantsData: formData.dependantsData };

    try {
      const res = await fetch('/api/member-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });

      const data = await res.json();

      if (res.ok) {
        // Show success snackbar
        setAlertType('success');
        setAlertMessage(data.message);
        console.log(data);
        setSnackbarOpen(true);
        setLoaderIcon(false);

        // Reset the form data after a successful submission
        handleReset(); // Reset the form here
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

  const columns = [
    { field: 'id', headerName: 'No', width: 100 },
    { field: 'relationship', headerName: 'Relationship', width: 200 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'firstName', headerName: 'First Name', width: 200 },
    { field: 'middleName', headerName: 'Middle Name', width: 200 },
    { field: 'surname', headerName: 'Surname', width: 200 },
    { field: 'idtypes', headerName: 'ID Type', width: 200 },
    { field: 'idnos', headerName: 'ID Number', width: 200 },
    { field: 'dob', headerName: 'DOB', width: 150 },
    { field: 'gendere', headerName: 'Gender', width: 150 }, 
    { field: 'countrye', headerName: 'Country of Residence', width: 150 }, 
    { field: 'cities', headerName: 'City of Residence', width: 150 }, 
    {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params) => (
            <SaveAsIcon variant="contained" sx={{ cursor: "pointer", color: '#157EBC' }} />
        ),
    },
];

const columnse = [
  { field: 'id', headerName: 'No', width: 100 },
  { field: 'memberidno', headerName: 'Member Id No', width: 200 },
  { field: 'relationship', headerName: 'Relationship', width: 200 },
  { field: 'title', headerName: 'Title', width: 200 },
  { field: 'firstName', headerName: 'First Name', width: 200 },
  { field: 'middleName', headerName: 'Middle Name', width: 200 },
  { field: 'surname', headerName: 'Surname', width: 200 },
  { field: 'idtypes', headerName: 'ID Type', width: 200 },
  { field: 'idnos', headerName: 'ID Number', width: 200 },
  { field: 'dob', headerName: 'DOB', width: 150 },
  { field: 'gendere', headerName: 'Gender', width: 150 }, 
  { field: 'countrye', headerName: 'Country of Residence', width: 150 }, 
  { field: 'cities', headerName: 'City of Residence', width: 150 }, 
  {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
          <SaveAsIcon variant="contained" sx={{ cursor: "pointer", color: '#157EBC' }} />
      ),
  },
];

const [paginationModel, setPaginationModel] = useState({
  page: 0,
  pageSize: 5,
});


const handleOpenDialog = (dependant) => {
  setCurrentDependant(dependant);
  setOpenDialog(true);
};

const handleCloseDialog = () => {
  setOpenDialog(false);
  setCurrentDependant(null);
  setErrors({});
  
};


 
const handleSave = () => {
  const newErrors = {};

  // ✅ Validation - Ensure Required Fields Are Filled
  if (!currentDependant?.relationship) newErrors.relationship = 'Relationship is required';
  if (!currentDependant?.title) newErrors.title = 'Title is required';
  if (!currentDependant?.firstName) newErrors.firstName = 'First Name is required';
  if (!currentDependant?.middleName) newErrors.middleName = 'Middle Name is required';
  if (!currentDependant?.surname) newErrors.surname = 'Surname is required';
  if (!currentDependant?.dob) newErrors.dob = 'Date of Birth is required';
  if (!currentDependant?.idtypes) newErrors.idtypes = 'ID Type is required'; 
  if (!currentDependant?.idnos) newErrors.idnos = 'ID Number is required';
  if (!currentDependant?.gendere) newErrors.gendere = 'Gender is required';
  if (!currentDependant?.countrye) newErrors.countrye = 'Country is required'; 
  if (!currentDependant?.cities) newErrors.cities = 'City is required';

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }

  setFormData((prev) => {
    const isExistingDependant = prev.dependantsData.some(dep => dep.id === currentDependant?.id);
    
    return {
      ...prev,
      dependantsData: isExistingDependant 
        ? prev.dependantsData.map((dep) =>
            dep.id === currentDependant?.id ? { ...dep, ...currentDependant } : dep
          )
        : [...prev.dependantsData, currentDependant], 
    };
  });

  setErrors({});
  handleCloseDialog();
};

const handleChangeDep = (event) => {
  const { name, value } = event.target;

  setCurrentDependant((prev) => ({
    ...prev,
    [name]: value ?? "", 
  }));

  setErrors((prev = {}) => ({
    ...prev,
    [name]: "",
  }));
};


const handleReset = () => {
  // Reset the formData state
  setFormData({
    memberidno:"",
    groupname: "",
    groupnumber: "",
    relationship: "",
    title: "",
    firstname: "",
    lastname: "",
    middlename: "",
    idtype: "",
    idno: "",
    dateofbirth: "",
    gender: "",
    country: "",
    city: "",
    address: "",
    mobileno: "",
    eimail: "",
    dependantsData: [
      {
        id: "",
        relationship: "",
        title: "",
        firstName: "",
        middleName: "",
        surname: "",
        idtypes: "",
        idnos: "",
        dob: "",
        gendere: "",
        countrye: "",
        cities: "",
      },
    ],
  });
};

const handleResete = () => {
  // Reset the formData state
  setFormData({
  
        id: "",
        relationship: "",
        title: "",
        firstName: "",
        middleName: "",
        surname: "",
        idtypes: "",
        idnos: "",
        dob: "",
        gendere: "",
        countrye: "",
        cities: "",
  });
};

const [openDependantPopup, setOpenDependantPopup] = useState(false);

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
                            name="memberidno"
                            label="Member ID Number"
                            variant="outlined"
                            value={formData.memberidno}
                            disabled
                            fullWidth
                            className="bg-gray-100 mb-6"
                          />
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

                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
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
                            required
                            name="country"
                            select
                            label="Country Of Residence Of Main Member"
                            variant="outlined"
                            value={formData.country}
                            onChange={handleChange}
                            fullWidth
                            className="bg-gray-100 mb-6"
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
                            label="City Of Residence Of Main Member"
                            variant="outlined"
                            value={formData.city}
                            onChange={handleChange}
                            fullWidth
                            />
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

                          <div className="shadow-xl p-4">
                            <Button onClick={handleAddDependant}>Add Dependant</Button>
                            <DataGrid
                                rows={formData.dependantsData}
                                columns={columns}  
                                pagination
                                paginationMode="client"
                                pageSizeOptions={[5, 10, 25]}
                                
                                pageSize={paginationModel.pageSize}
                                paginationModel={paginationModel}
                                onRowClick={(params) => handleOpenDialog(params.row)}
                                components={{ Toolbar: GridToolbar }}
                                autoHeight
                                rowHeight={40}
                                sx={{
                                    width: '100%',
                                    overflowX: 'auto',
                                    '& .MuiDataGrid-cell:focus, & .MuiDataGrid-columnHeader:focus': {
                                        outline: 'none',
                                    },
                                    '& .MuiDataGrid-cell:hover': {
                                        cursor: 'pointer',
                                    },
                                    '& .MuiDataGrid-columnHeader:hover': {
                                        cursor: 'pointer',
                                    },
                                    '@media (max-width: 600px)': {
                                        '& .MuiDataGrid-columnHeader': {
                                            fontSize: '0.8rem',
                                        },
                                        '& .MuiDataGrid-cell': {
                                            fontSize: '0.8rem',
                                        },
                                    },
                                }}
                            />

                            <Dialog open={openDialog} onClose={handleCloseDialog}>
                                <DialogTitle>Edit Dependant   </DialogTitle>
                                <DialogContent>
                                <FormControl fullWidth margin="dense">
                                      <InputLabel id="relationship-label">Relationship</InputLabel>
                                      <Select
                                        name="relationship"
                                        value={currentDependant?.relationship || ""}  // Prevent undefined
                                        onChange={handleChangeDep}
                                        label="Relationship"
                                      >
                                        <MenuItem value="Spouse">Spouse(spouse to the group member)</MenuItem>
                                        <MenuItem value="Child">Child(child to the group member)</MenuItem>
                                        <MenuItem value="Sibling">Sibling(brother & sister / brother & sister in-Laws to the group member)</MenuItem>
                                        <MenuItem value="Parent">Parent(parents / parents in-law to the group member)</MenuItem>
                                        <MenuItem value="Next Of Kin">Next Of Kin</MenuItem>
                                      </Select>
                                      {errors.relationship && <div style={{ color: 'red' }}>{errors.relationship}</div>}
                                    </FormControl>
                                    <TextField
                                              select
                                              name="title"
                                              label="Title"
                                              value={currentDependant?.title || ''}
                                              onChange={handleChangeDep}
                                            margin="dense"
                                            >
                                              {["Mr", "Mrs", "Miss", "Dr", "Prof"].map((title) => (
                                                <MenuItem key={title} value={title}>
                                                  {title}
                                                </MenuItem>
                                              ))}
                                               error={!!errors.title}
                                               helperText={errors.title}
                                            </TextField>
                                    <TextField
                                        label="First Name"
                                        name="firstName"
                                        value={currentDependant?.firstName || ''}
                                        onChange={handleChangeDep}
                                        fullWidth
                                        margin="dense"
                                        error={!!errors.firstName}
                                        helperText={errors.firstName}
                                    
                                    />
                                    <TextField
                                        label="Middle Name"
                                        name="middleName"
                                        value={currentDependant?.middleName || ''}
                                        onChange={handleChangeDep}
                                        fullWidth
                                        margin="dense"
                                        error={!!errors.middleName}
                                        helperText={errors.middleName}
                                    />
                                    <TextField
                                        label="Surname"
                                        name="surname"
                                        value={currentDependant?.surname || ''}
                                        onChange={handleChangeDep}
                                        fullWidth
                                        margin="dense"
                                        error={!!errors.surname}
                                        helperText={errors.surname}
                                      
                                    />
                                    <FormControl fullWidth margin="dense"  >
                                          <InputLabel id="idtype-label">ID Type</InputLabel>
                                          <Select
                                              name="idtypes"
                                              value={currentDependant?.idtypes || ''}
                                              onChange={handleChangeDep}
                                              label="ID Type"
                                          >
                                              <MenuItem value="National ID">National ID</MenuItem>
                                              <MenuItem value="Passport">Passport</MenuItem>
                                              <MenuItem value="Birth Certificate">Birth Certificate</MenuItem>
                                          </Select>
                                          {errors.idtypes && <div style={{ color: 'red' }}>{errors.idtypes}</div>}
                                      </FormControl>
                                      <TextField
                                          label="ID Number"
                                          name="idnos"
                                          value={currentDependant?.idnos || ''}
                                          onChange={handleChangeDep}
                                          fullwidth
                                          margin ="dense"
                                          error={!!errors.surname}
                                          helperText={errors.surname}
                                              />
                                              <TextField
                                                  label="DOB"
                                                  name="dob"
                                                  type="date"
                                                  value={currentDependant?.dob || ''}
                                                  onChange={handleChangeDep}
                                                  fullWidth
                                                  margin="dense"
                                                  InputLabelProps={{
                                                      shrink: true,
                                                  }}
                                                  InputProps={{
                                                      inputProps: { max: today }, 
                                                  }}
                                                  error={!!errors.dob}
                                                  helperText={errors.dob}
                                              />

                                              <FormControl fullWidth margin="dense"  >
                                                  <InputLabel id="gender-label">Gender</InputLabel>
                                                  <Select
                                                      name="gendere"
                                                      value={currentDependant?.gendere || ''}
                                                      onChange={handleChangeDep}
                                                      label="Gender"
                                                  >
                                                      <MenuItem value="Male">Male</MenuItem>
                                                      <MenuItem value="Female">Female</MenuItem>
                                                  </Select>
                                                  {errors.gendere && <div style={{ color: 'red' }}>{errors.gendere}</div>}
                                              </FormControl>
                                              <TextField
                                                      required
                                                      name="countrye"
                                                      select
                                                      label="Country"
                                                      variant="outlined"
                                                      value={currentDependant?.countrye || ''}
                                                      onChange={handleChangeDep}
                                                      fullWidth
                                                      className="bg-gray-100 mb-6"
                                                    >
                                                      {countries.map((country) => (
                                                        <MenuItem key={country} value={country}>
                                                          {country}
                                                        </MenuItem>
                                                      ))}
                                                       error={!!errors.countrye}
                                                       helperText={errors.countrye}
                                                    </TextField>
                                                      <TextField 
                                                      required
                                                      name="cities"
                                                      label="City Of residence"
                                                      variant="outlined"
                                                      value={currentDependant?.cities}
                                                      onChange={handleChangeDep}
                                                      fullWidth
                                                      className="bg-gray-100 mb-6"
                                                      error={!!errors.cities}
                                                      helperText={errors.cities}
                                                      />
                                            
                                          </DialogContent>
                                          <DialogActions>
                                              <Button onClick={handleCloseDialog} color="primary">Cancel</Button>
                                              <Button onClick={handleSave}  color="primary">Save</Button>
                                          </DialogActions>
                                      </Dialog>
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
