import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from 'axios';

// Mui imports
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
// Importing components
import BackgroundImage from '../components/BackgroundImage';


const GroupForm = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [alertType, setAlertType] = useState('success'); // 'success' or 'error'
  const [alertMessage, setAlertMessage] = useState('');
  const [loaderIcon, setLoaderIcon] = useState(false);
  
  const handleCheckboxChangeOccurenceMonthly = (event) => {
    const { name, checked, value } = event.target;
  
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked ? value : "", // Unset if unchecked
    }));
  
  
  };
  
  
  const handleChangeRegistered = (event) => {
    const { name } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      groupRegistered: name,
    }));
  };

  const handleChangeConstitution = (event) => {
    const { name } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      groupConstitution: name,
    }));
  };

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

  const handleReset = () => {
    // Reset the formData state
    setFormData({
      groupname: '',
      grouplocation: '',
      contactperson: '',
      mobileno: '',
      email: '',
      groupConstitution: '', // Yes or No
      groupRegistered: '', // Yes or No
      noofmembers: '',
      currency: '',
      methodOfContributionMonthly: '',
      contributionMonthlyAmount:'',
      methodOfContributionPerclaim: '', 
      contributionPerClaimAmount:'', 
      payoutAmountPer:{
        member: '',
        spouse: '',
        child: '',
        sibling: '',
        parent: '',
      },
        noofsiblings: '',
        noofparents: '',
        noclaims: '',
        claimamount: '',
        nomemberclaims: '',
        nosiblingclaims: '',
        nospouseclaims: '',
        noparentclaims: '',
    });
  };

  // State to manage form inputs
  const [formData, setFormData] = useState({
        groupname: '',
        grouplocation: '',
        contactperson: '',
        mobileno: '',
        email: '',
        groupConstitution: '', // Yes or No
        groupRegistered: '', // Yes or No
        noofmembers: '',
        currency: '',
        methodOfContributionMonthly: '',
        contributionMonthlyAmount:'',
        methodOfContributionPerclaim: '', 
        contributionPerClaimAmount:'', 
        payoutAmountPer:{
          member: '',
          spouse: '',
          child: '',
          sibling: '',
          parent: '',
        },
          noofsiblings: '',
          noofparents: '',
          noclaims: '',
          claimamount: '',
          nomemberclaims: '',
          nosiblingclaims: '',
          nospouseclaims: '',
          noparentclaims: '',
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

  }, [formData]);
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent default form submission
      setLoaderIcon(true);
      
      try {
        const res = await axios.post(
          '/api/group-form',
          formData, // Ensure form data is sent
          {
            headers: {
              'Content-Type': 'application/json',
            },
            timeout: 10000,
          }
        );
    
        setFormData({
          groupname: '',
          grouplocation: '',
          contactperson: '',
          mobileno: '',
          email: '',
          groupConstitution: '', // Yes or No
          groupRegistered: '', // Yes or No
          noofmembers: '',
          currency: '',
          methodOfContributionMonthly: '',
          contributionMonthlyAmount:'',
          methodOfContributionPerclaim: '', 
          contributionPerClaimAmount:'', 
          payoutAmountPer:{
            member: '',
            spouse: '',
            child: '',
            sibling: '',
            parent: '',
          },
          noofsiblings: '',
          noofparents: '',
          noclaims: '',
          claimamount: '',
          nomemberclaims: '',
          nosiblingclaims: '',
          nospouseclaims: '',
          noparentclaims: '',
        });
    
        if (res.status === 200) {
          // Show success snackbar
          setAlertType('success');
          setAlertMessage(res.data.message);
        } else {
          // Show error snackbar
          setAlertType('error');
          setAlertMessage(`Error: ${res.data.error || 'Something went wrong'}`);
        }
      } catch (error) {
        // Show error snackbar
        setAlertType('error');
        setAlertMessage(`Error: ${error.response?.data?.error || error.message}`);
      } finally {
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
                            <p>Group Forms</p>
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
                              className="bg-gray-100"
                            />
                              
                            <TextField 
                              required
                              name="grouplocation"
                              label="Group Location"
                              variant="outlined"
                              value={formData.grouplocation}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100"
                            />
                            <TextField 
                              required
                              name="contactperson"
                              label="Contact Person"
                              variant="outlined"
                              value={formData.contactperson}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100"
                            />
                            <div className="mb-6">
                              <PhoneInput
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
                            <div className= "mb-6">
                            <TextField 
                              required
                              name="email"
                              label="Email"
                              variant="outlined"
                              value={formData.email}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100"
                            />
                            </div>
                            
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Group Constitution Section */}
                            <div>
                              <h3 className="text-xl font-semibold text-gray-700 mb-4">Group Constitution</h3>
                              <FormGroup className="space-y-4">
                                <div className="flex space-x-4">
                                  <FormControlLabel
                                    control={<Checkbox checked={formData.groupConstitution === "yes"} onChange={handleChangeConstitution} name="yes" />}
                                    label="Yes"
                                    className="text-gray-700"
                                  />
                                  <FormControlLabel
                                    control={<Checkbox checked={formData.groupConstitution === "no"} onChange={handleChangeConstitution} name="no" />}
                                    label="No"
                                    className="text-gray-700"
                                  />
                                </div>
                              </FormGroup>
                            </div>

                            {/* Group Registered Section */}
                            <div>
                              <h3 className="text-xl font-semibold text-gray-700 mb-4">Group Registered</h3>
                              <FormGroup className="space-y-4">
                                <div className="flex space-x-4">
                                  <FormControlLabel
                                    control={<Checkbox checked={formData.groupRegistered === "yes"} onChange={handleChangeRegistered} name="yes" />}
                                    label="Yes"
                                    className="text-gray-700"
                                  />
                                  <FormControlLabel
                                    control={<Checkbox checked={formData.groupRegistered === "no"} onChange={handleChangeRegistered} name="no" />}
                                    label="No"
                                    className="text-gray-700"
                                  />
                                </div>
                              </FormGroup>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <TextField 
                              required
                              name="noofmembers"
                              label="No of Members"
                              variant="outlined"
                              value={formData.noofmembers}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100"
                            />
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
                            <TextField
                            required
                            name="currency"
                            select
                            label="Currency"
                            variant="outlined"
                            value={formData.currency}
                            onChange={handleChange}
                            fullWidth
                          >
                            <MenuItem value="KES">KES</MenuItem>
                            <MenuItem value="USD">USD</MenuItem>
                            <MenuItem value="EUR">EUR</MenuItem>
                            <MenuItem value="GBP">GBP</MenuItem>
                          </TextField>
                          </div>
                          <div className="mb-6">
                          <h3 className="text-xl font-semibold text-gray-700 mb-4">Frequency Of Contribution</h3>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6mb-6">
                            <div className="flex space-x-6 items-center mb-4">
                            <FormControlLabel
                          control={
                            <Checkbox
                              name="methodOfContributionMonthly"
                              checked={formData.methodOfContributionMonthly === 'monthly'}
                              onChange={handleCheckboxChangeOccurenceMonthly}
                              value="monthly"
                            />
                          }
                          label="Per Month"
                        />
                        <TextField
                          label="Monthly Contribution Amount"
                          name="contributionMonthlyAmount"
                          variant="outlined"
                          value={formData.contributionMonthlyAmount}
                          onChange={handleChange}
                          fullWidth
                          className="mt-4 bg-gray-100"
                          required={formData.methodOfContributionMonthly === 'monthly'}
                          disabled={formData.methodOfContributionMonthly !== 'monthly'}
                          error={formData.methodOfContributionMonthly === 'monthly' && !formData.contributionMonthlyAmount}
                          helperText={formData.methodOfContributionMonthly === 'monthly' && !formData.contributionMonthlyAmount ? "This field is required" : ""}
                        />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
                            <div className="flex space-x-6 items-center">
                            <FormControlLabel
                            control={
                              <Checkbox
                                name="methodOfContributionPerclaim"
                                checked={formData.methodOfContributionPerclaim === 'perclaim'}
                                onChange={handleCheckboxChangeOccurenceMonthly}
                                value="perclaim"
                              />
                            }
                            label="Per Claim"
                          />
                          <TextField
                            label="Per Claim Contribution Amount"
                            name="contributionPerClaimAmount"
                            variant="outlined"
                            value={formData.contributionPerClaimAmount}
                            onChange={handleChange}
                            fullWidth
                            className="mt-4 bg-gray-100"
                            required={formData.methodOfContributionPerclaim === 'perclaim'}
                            disabled={formData.methodOfContributionPerclaim !== 'perclaim'}
                            error={formData.methodOfContributionPerclaim === 'perclaim' && !formData.contributionPerClaimAmount}
                            helperText={formData.methodOfContributionPerclaim === 'perclaim' && !formData.contributionPerClaimAmount ? "This field is required" : ""}
                          />
                            </div>                    
                            </div>
                                
                          <div className="p-8 w-full bg-gray-50 rounded-lg shadow-lg mt-8">
                            <h3 className="text-2xl font-semibold text-gray-700 mb-6">Payout Amount per Member</h3>

                            <div className="space-y-6">
                              {["member", "spouse", "child", "sibling", "parent"].map((role) => (
                                <div key={role} className="flex items-center space-x-4">
                                  <span className="text-lg font-medium text-gray-700 w-32 capitalize">{role}</span>
                                  <TextField
                                    label={`${role.charAt(0).toUpperCase() + role.slice(1)} Amount`}
                                    variant="outlined"
                                    value={formData.payoutAmountPer[role]}
                                    onChange={(e) =>
                                      setFormData((prevState) => ({
                                        ...prevState,
                                        payoutAmountPer: {
                                          ...prevState.payoutAmountPer,
                                          [role]: e.target.value,
                                        },
                                      }))
                                    }
                                    fullWidth
                                    className="bg-gray-100"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="p-8 w-full bg-gray-50 rounded-lg shadow-lg mt-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <TextField 
                                required
                                name="noofsiblings"
                                label="Number of Siblings (Brother & Sister / Brother & Sister In-Laws to the Main Member)"
                                variant="outlined"
                                value={formData.noofsiblings}
                                onChange={handleChange}
                                fullWidth
                                className="bg-gray-100"
                              />
                              <TextField 
                                required
                                name="noofparents"
                                label="Number of Parents (Parents / Parents In-Law to the Main Member)"
                                variant="outlined"
                                value={formData.noofparents}
                                onChange={handleChange}
                                fullWidth
                                className="bg-gray-100"
                              />
                            </div>
                          </div>
                          <div className="p-8 w-full bg-gray-50 rounded-lg shadow-lg mt-8">
                            <h3 className="text-2xl font-semibold text-gray-700 mb-6">Number of Claims in the last one year</h3>
                            <div className="mb-6">
                              <TextField 
                                required
                                name="noclaims"
                                label="Total Number of Claims"
                                variant="outlined"
                                value={formData.noclaims}
                                onChange={handleChange}
                                fullWidth
                                className="bg-gray-100"
                              />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
                              <TextField 
                                required
                                name="nomemberclaims"
                                label="Number of Member Claims"
                                variant="outlined"
                                value={formData.nomemberclaims}
                                onChange={handleChange}
                                fullWidth
                                className="bg-gray-100"
                              />
                              <TextField 
                                required
                                name="nosiblingclaims"
                                label="Number of Sibling Claims"
                                variant="outlined"
                                value={formData.nosiblingclaims}
                                onChange={handleChange}
                                fullWidth
                                className="bg-gray-100"
                              />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
                              <TextField 
                                required
                                name="nospouseclaims"
                                label="Number of Spouse Claims"
                                variant="outlined"
                                value={formData.nospouseclaims}
                                onChange={handleChange}
                                fullWidth
                                className="bg-gray-100"
                              />
                              <TextField 
                                required
                                name="noparentclaims"
                                label="No of Parent Claims"
                                variant="outlined"
                                value={formData.noparentclaims}
                                onChange={handleChange}
                                fullWidth
                                className="bg-gray-100"
                              />
                            </div>
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

export default GroupForm;
