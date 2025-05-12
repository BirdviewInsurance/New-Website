import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRef } from "react";

// Mui imports
import Button from '@mui/material/Button';
import ShieldIcon from '@mui/icons-material/Shield';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Autocomplete, Dialog, DialogTitle, DialogContent, DialogHeader, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import Badge from '@mui/material/Badge';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';


// Importing components
import BackgroundImage from '../components/BackgroundImage'; 
import AnimationDownToUp from './components/Animation/AnimationDownToUp';
import AnimationRightToLeft from './components/Animation/AnimationRightToLeft';


const plansc = [
  { plan: "Plan 1", limit: 5000, premium: "Covered To Full Limit" },
  { plan: "Plan 2", limit: 7500, premium: "Covered To Full Limit" },
  { plan: "Plan 3", limit: 10000, premium: "Covered To Full Limit" }
];
    const Medical = () => {

          const [currency, setCurrency] = useState("KES");

          const currencyRates = {
            USD: 0.00774,
            KES: 1,
            EUR: 0.007385,
            GBP: 0.006096
        };
          const currencySymbols = {
              KES: 'Ksh.',
              USD: '$',
              EUR: '€',
              GBP: '£',
          };
    
          const inpatientPlans = [
            { plan: "Plan 1", inpatient: 200000, maternity: 50000, premiums: [5720, 8580, 9610, 10868, 12012, 13156, 14300, 14400] },
            { plan: "Plan 2", inpatient: 300000, maternity: 60000, premiums: [6860, 10290, 11525, 13034, 14400, 14400, 14400, 14400] },
            { plan: "Plan 3", inpatient: 500000, maternity: 75000, premiums: [8230, 12345, 13826, 14400, 14400, 14400, 14400, 14400] }
          ];
          const familySizes = ["M", "M+1", "M+2", "M+3", "M+4", "M+5", "M+6", "M+7"];

          const outpatientPlans = [
            { plan: "Plan 1", outpatient: 50000,  premiums: [8580, 14400, 14400, 14400, 14400, 14400, 14400, 14400] },
           
          ];

     
      const plansd = [
        {
          name: "Plan 1",
          values: [
            "Plan 1","200000", "East Africa (Kenya. Uganda, Tanzania, Rwanda)", "General Ward Bed", "0 Days", "18 Years", "70 Years", "100 Years",
            "25 Years", "100000", "50000", "10000", "Covered", "Covered", "Covered",
            "Covered", "40000", "50000", "50000", "Up to 10 Years", "Covered", "100000",
            "100000", "50000"
          ]
        },
        {
          name: "Plan 2",
          values: [
            "Plan 2","300000", "East Africa (Kenya. Uganda, Tanzania, Rwanda)", "General Ward Bed", "0 Days", "18 Years", "70 Years", "100 Years",
            "25 Years", "150000", "60000", "15000", "Covered", "Covered", "Covered",
            "Covered", "50000", "50000", "50000", "Up to 10 Years", "Covered", "150000",
            "150000", "75000"
          ]
        },
        {
          name: "Plan 3",
          values: [
            "Plan 3","500000", "East Africa (Kenya. Uganda, Tanzania, Rwanda)", "General Ward Bed", "0 Days", "18 Years", "70 Years", "100 Years",
            "25 Years", "250000", "75000", "17500", "Covered", "Covered", "Covered",
            "Covered", "75000", "50000", "50000", "Up to 10 Years", "Covered", "250000",
            "250000", "100000"
          ]
        }
      ];
      
      const headings = [
        "Plan", "Benefit Cover", "Territorial Limit", "Hospital Bed Accommodation",
        "Accident Waiting Period", "Child Dependant Age Limit", "Adult Age Limit",
        "Adult Age Limit Extension On Renewal", "Dependant Age Limit Extension With Proof Of Schooling",
        "Pre-Existing and/or Chronic Condition(1 year waiting period)", "Maternity Cover(1 year waiting period)", "Post Hospitalization Treatment",
        "Inpatient Gynaecological Conditions", "Road Ambulance", "Ambulance Services", "Air Evacuation",
        "Internal & External Medical Appliances", "Inpatient Non-Accident Dental Treatment (1 year waiting period)",
        "Inpatient Non-Accident Ophthalmology (1 year waiting period)", "Lodger Benefit", "Psychiatric Hospitalization",
        "Cancer Treatment (1 year waiting period)", "Pre-maturity and Congenital Conditions (1 year waiting period for maternity applies)", "Last Expense"
      ];
      
        const [showMore, setShowMore] = useState(false);
        const convertPremium = (amount) => {
        const rate = currencyRates[currency] || 1;
        const convertedAmount = Number(amount * rate).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return `${currencySymbols[currency] || ''} ${convertedAmount}`;
        if (typeof value === "string") {
          return value; 
        }
        return `KES ${value.toLocaleString()}`;
    };
    
    const plans = [
      {
        plan: "Plan 1",
        limit: 50000,
        premium: "Covered To Full Limit",
        premiumk: 5000,
        premiumz: "None",
      },
    ];

    const pland = [
      { name: "Plan 1", limit: 5000, premium: "Covered To Full Limit" },
      { name: "Plan 2", limit: 7500, premium: "Covered To Full Limit" },
      { name: "Plan 3", limit: 10000, premium: "Covered To Full Limit" },
    ];
    
    const categories = [
      "Benefit Cover",
      "Dental Consultations & Gum Diseases",
      "Extractions",
      "Fillings (except precious metals)",
      "Scaling",
      "Dental X-Rays",
      "Dental Prescriptions",
    ];

    const handleClickMedical = () => {
        window.location.href = "https://quote.birdviewinsurance.com/?ProductID=3";   
      };
  
    const OpticalRef = useRef(null);
    const InPatientRef = useRef(null);
    const OutPatientRef = useRef(null);
    const DentalRef = useRef(null);

    const scrollToTable = (tableRef) => {
      if (tableRef.current) {
        tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };    
    function isNumeric(value) {
      return !isNaN(value) && isFinite(value);
    }

  return (
    <div className="relative bg-gray-100">
      {/* Top Div with Background Image */}

      <BackgroundImage/>

      {/* Container for Bottom Div */}
      <div className="relative top-[-40px] left-0 right-0 flex justify-center">
        <div className="bg-white w-full   p-2 flex flex-col items-center justify-start overflow-visible rounded-3xl">

          <div className='bg-white grid grid-cols-1  gap-8 mb-4'> 

          <AnimationDownToUp index={0}>
                <div 
                    style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }} 
                    className="  mx-auto bg-white rounded-lg shadow-md overflow-hidden  p-6"
                >
                    <div className="flex flex-col md:flex-row items-center">
                    {/* Icon and Details Section */}
                    <div className="flex flex-col ">
                        <AnimationRightToLeft index={4}>
                        {/* Contact Title */}
                        <p className="text-gray-700 text-lg font-bold"
                          > Medical
                       </p>
                       {/* Phone Section */}
                       <div className="text-gray-700 flex flex-wrap items-center gap-4 mb-4"> {/* Added mb-4 for margin-bottom */}
                        <p className="text-gray-700">
                          Our medical insurance products include:
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4">
                          <button
                            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                            onClick={() => scrollToTable(InPatientRef)}
                          >
                            In-Patient
                          </button>
                          <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                            onClick={() => scrollToTable(OpticalRef)}
                          >
                            Out-Patient
                          </button>
                          <button
                            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                            onClick={() => scrollToTable(OutPatientRef)}
                          >
                            Dental
                          </button>
                          <button
                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                            onClick={() => scrollToTable(DentalRef)}
                          >
                            Optical
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-center items-center w-full py-6">
                          <div className="text-gray-700 flex flex-wrap items-center gap-4">
                            <span className="text-lg font-semibold">Our Hospital Providers</span>
                            <a href="/BIRDVIEW LIST OF PROVIDERS 2025.pdf" download>
                              <div className="group transition-transform transform hover:scale-110 hover:shadow-lg rounded-full animate-bounce">
                                <IconButton
                                  sx={{
                                    backgroundColor: "#fff",
                                    border: "2px solid #E42D2C",
                                    width: 40,
                                    height: 40,
                                    transition: "all 0.3s ease-in-out",
                                    '&:hover': {
                                      backgroundColor: "#E42D2C",
                                    },
                                  }}
                                >
                                  <DownloadForOfflineOutlinedIcon
                                    sx={{
                                      color: "#E42D2C",
                                      fontSize: 32,
                                      transition: "all 0.3s ease-in-out",
                                      '&:hover': {
                                        color: "#fff",
                                      },
                                    }}
                                  />
                                </IconButton>
                              </div>
                            </a>
                          </div>
                        </div>

                        <div className="flex justify-center items-center w-full py-6">
                        <div className="text-gray-700 flex flex-wrap items-center gap-4">
                          <span className="text-lg font-semibold">For Medical Emergencies: Call </span>
                          <a href="tel:+254703071333" className="group transition-transform transform hover:scale-110 hover:shadow-lg rounded-full animate-bounce">
                            <IconButton
                              sx={{
                                backgroundColor: "#fff",
                                border: "2px solid #E42D2C",
                                width: 40,
                                height: 40,
                                transition: "all 0.3s ease-in-out",
                                '&:hover': {
                                  backgroundColor: "#E42D2C",
                                },
                              }}
                            >
                              <ContactEmergencyIcon
                                sx={{
                                  color: "#E42D2C",
                                  fontSize: 32,
                                  transition: "all 0.3s ease-in-out",
                                  '&:hover': {
                                    color: "#fff",
                                  },
                                }}
                              />
                            </IconButton>
                          </a>
                        </div>
                      </div>

                        </AnimationRightToLeft>
                    </div>
                    </div>
                </div>
                </AnimationDownToUp>
                </div>

          <div className='w-screen max-w-none mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-0'> 
             
           <AnimationDownToUp index={0}>
              <div
                  style={{ boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)" }}
                  className="w-screen max-w-none mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-0"
                >
                  <AnimationRightToLeft index={4}>
                  <p className="text-gray-700 text-sm font-bold"
                          > Medical In-patient
                       </p>
                        <div className={'mb-4 mt-2  ${highlight ? "bg-yellow-200" : ""}'}>
                          <Autocomplete
                                  options={["KES", "USD", "EUR", "GBP"]}
                                  value={currency}
                                  onChange={(event, newValue) => setCurrency(newValue || "KES")}
                                  renderInput={(params) => (
                                      <TextField {...params} label="Currency" variant="outlined" />
                                  )}
                              />
                        </div>
                       <div ref={InPatientRef} id='InpatientTable' className="overflow-x-auto p-0 bg-gray-50 rounded-xl shadow-md">
                       <TableContainer component={Paper} className="shadow-lg w-full">
                  <Table>
                    <TableBody>
                      {headings.slice(0, 7).map((heading, rowIndex) => (
                        <TableRow key={rowIndex} sx={{ borderBottom: "1px solid #ccc" }}>
                          <TableCell sx={{ fontWeight: "bold", backgroundColor: "#157EBC", color: "white", padding: "8px" }}>{heading}</TableCell>
                          {plansd.map((plan, colIndex) => (
                            <TableCell key={colIndex} align="center" sx={{ border: "1px solid #ccc", padding: "8px" }}>
                              {isNumeric(plan.values[rowIndex]) ? convertPremium(parseFloat(plan.values[rowIndex])) : plan.values[rowIndex]}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                
                <div className="flex justify-center mt-4">
                  <Button onClick={() => setShowMore(true)}>Read More</Button>
                </div>
                
                <Dialog open={showMore} onClose={() => setShowMore(false)}>
                  <DialogContent>
                    <div className="flex justify-between items-center">
                      <DialogTitle>Additional Details</DialogTitle>
                      <Button onClick={() => setShowMore(false)} sx={{ color: "red" }}>Close</Button>
                    </div>
                    <TableContainer component={Paper} className="shadow-lg w-full">
                      <Table>
                        <TableBody>
                          {headings.slice(7).map((heading, rowIndex) => (
                            <TableRow key={rowIndex} sx={{ borderBottom: "1px solid #ccc" }}>
                              <TableCell sx={{ fontWeight: "bold", backgroundColor: "#157EBC", color: "white", padding: "8px" }}>{heading}</TableCell>
                              {plansd.map((plan, colIndex) => (
                                <TableCell key={colIndex} align="center" sx={{ border: "1px solid #ccc", padding: "8px" }}>
                                  {isNumeric(plan.values[rowIndex + 7]) ? convertPremium(parseFloat(plan.values[rowIndex + 7])) : plan.values[rowIndex + 7]}
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="overflow-x-auto p-0 bg-gray-50 rounded-xl shadow-md">
              <TableContainer component={Paper} className="shadow-lg w-full">
                      <Table>
                        <TableHead>
                          <TableRow style={{ backgroundColor: "#157EBC", color: "white" }}>
                            <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>Plan</TableCell>
                            <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>Benefit Cover</TableCell>
                            {familySizes.map((size, index) => (
                              <TableCell key={index} align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>
                                {size}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {inpatientPlans.map((row, index) => (
                            <TableRow key={index} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#fafafa" } }}>
                              <TableCell align="center">{row.plan}</TableCell>
                              <TableCell align="center">{convertPremium(row.inpatient)}</TableCell>
                              {row.premiums.map((premium, i) => (
                                <TableCell key={i} align="center">{convertPremium(premium)}</TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>

              </div>
              
                  </AnimationRightToLeft>
                </div>
            </AnimationDownToUp>   
          </div>
          
            <div className='w-screen max-w-none mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-0'>
            <AnimationDownToUp index={0}>
                  <div
                    style={{ boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)" }}
                    className="w-screen max-w-none mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-0"
                  >
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="flex flex-col w-full">
                        <AnimationRightToLeft index={4}>
                        <p className="text-gray-700 text-sm font-bold"
                          > Medical Out-patient
                       </p>
                       <div ref={OutPatientRef} className="overflow-x-auto shadow-lg rounded-lg border border-gray-300">
                       <TableContainer component={Paper} className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
                          <Table>
                            <TableHead>
                              <TableRow style={{ backgroundColor: "#157EBC", color: "white" }}>
                                <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>Category</TableCell>
                                {plans.map((plan, index) => (
                                  <TableCell key={index} align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>
                                    {plan.plan}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {[
                                { label: "Plan 1", key: "plan" },
                                { label: "Benefit Cover", key: "limit" },
                                { label: "ARV Drugs Payable", key: "premium" },
                                { label: "General Medical Check-Ups", key: "premiumk" },
                                { label: "Co-Payment", key: "premiumz" },
                                { label: "KEPI & Baby friendly Regime Immunizations", key: "premiumk" },
                                { label: "Pre - existing and/or chronic conditions (1 year waiting period)", key: "premium" },
                                { label: "Pre-natal & Post-natal (1 year waiting period)", key: "premium" },
                              ].map((row, index) => (
                                <TableRow key={index} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#fafafa" } }}>
                                  <TableCell align="left" sx={{ fontWeight: "medium", backgroundColor: "#E3F2FD", color: "#0D47A1", padding: "8px", border: "1px solid #ddd" }}>
                                    {row.label}
                                  </TableCell>
                                  {plans.map((plan, i) => (
                                    <TableCell key={i} align="center" sx={{ padding: "8px", border: "1px solid #ddd" }}>
                                      {index === 1 || index === 3 || index === 5 ? convertPremium(plan[row.key]) : plan[row.key]}
                                    </TableCell>
                                  ))}
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </div>
                        </AnimationRightToLeft>
                      </div>
                    </div>
                  </div>
                  <div className="w-screen max-w-none mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-0">
                  <TableContainer component={Paper} className="shadow-lg">
                            <Table>
                              <TableHead>
                                <TableRow style={{ backgroundColor: "#157EBC", color: "white" }}>
                                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>Plan</TableCell>
                                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>Benefit Cover</TableCell>
                                  {familySizes.map((size, index) => (
                                    <TableCell key={index} align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>{size}</TableCell>
                                  ))}
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {outpatientPlans.map((row, index) => (
                                  <TableRow key={index} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#fafafa" } }}>
                                    <TableCell align="center">{row.plan}</TableCell>
                                    <TableCell align="center">{convertPremium(row.outpatient)}</TableCell>
                                    {row.premiums.map((premium, i) => (
                                      <TableCell key={i} align="center">{convertPremium(premium)}</TableCell>
                                    ))}
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </div>
          </AnimationDownToUp>
              </div>
          
          <div className="w-screen max-w-none mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-0">
            <AnimationDownToUp index={0}>
              <div
                style={{ boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)" }}
                className="w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-0"
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex flex-col w-full">
                    <AnimationRightToLeft index={4}>
                    <p className="text-gray-700 text-sm font-bold"
                          > Medical Dental
                       </p>
                       <div ref={DentalRef} className="overflow-x-auto p-0 bg-white shadow-lg rounded-lg">
                       <TableContainer component={Paper} className="shadow-lg w-full">
                    <Table>
                      <TableHead>
                        <TableRow style={{ backgroundColor: "#157EBC", color: "white" }}>
                          <TableCell align="left" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>Category</TableCell>
                          {pland.map((plan, index) => (
                            <TableCell key={index} align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>
                              {plan.name}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell align="left" sx={{ fontWeight: "bold", padding: "8px" }}>Benefit Cover</TableCell>
                          {pland.map((plan, index) => (
                            <TableCell key={index} align="center">{convertPremium(plan.limit)}</TableCell>
                          ))}
                        </TableRow>
                        {categories.slice(1).map((category, rowIndex) => (
                          <TableRow key={rowIndex} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#fafafa" } }}>
                            <TableCell align="left" sx={{ fontWeight: "bold", padding: "8px" }}>{category}</TableCell>
                            {pland.map((_, colIndex) => (
                              <TableCell key={colIndex} align="center">Covered To Full Limit</TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
               </TableContainer>
                    </div>
                    <div className="w-screen max-w-none mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-0"></div>
                    <div className="overflow-x-auto p-0 bg-white shadow-lg rounded-lg">
                    <TableContainer component={Paper} className="shadow-lg w-full">
                        <Table>
                          <TableHead>
                            <TableRow style={{ backgroundColor: "#157EBC", color: "white" }}>
                              <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>Plan</TableCell>
                              <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>Benefit Cover</TableCell>
                              <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>Premium per Person</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {[{ plan: "Plan 1", limit: 5000, premium: 1210 },
                              { plan: "Plan 2", limit: 7500, premium: 1803 },
                              { plan: "Plan 3", limit: 10000, premium: 2408 }].map((row, index) => (
                                <TableRow key={index} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#fafafa" } }}>
                                  <TableCell align="center">{row.plan}</TableCell>
                                  <TableCell align="center">{convertPremium(row.limit)}</TableCell>
                                  <TableCell align="center">{convertPremium(row.premium)}</TableCell>
                                </TableRow>
                              ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div> 
                    
                                    </AnimationRightToLeft>
                                  </div>
                                </div>
                              </div>
                              
            </AnimationDownToUp>

            <AnimationDownToUp index={0}>
              <div
                style={{ boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)" }}
                className="w-screen max-w-none mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-0"
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex flex-col w-full">
                    <AnimationRightToLeft index={4}>
                    <p className="text-gray-700 text-s font-bold"
                          > Medical Optical
                       </p>
                        
                        <div ref={OpticalRef} id="opticalTable"  className="overflow-x-auto p-0 bg-gray-50 rounded-xl shadow-md">
                        <TableContainer component={Paper} className="shadow-lg w-full">
                    <Table>
                      <TableHead>
                        <TableRow style={{ backgroundColor: "#157EBC", color: "white" }}>
                          <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>Category</TableCell>
                          {plansc.map((plan, index) => (
                            <TableCell key={index} align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>
                              {plan.plan}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {[
                          { label: "Benefit Cover", key: "limit" },
                          { label: "Eyeglasses", key: "premium" },
                          { label: "Routine Optical Consultations", key: "premium" },
                          { label: "Optometrist Consultations & Eye Examinations", key: "premium" },
                          { label: "Prescribed Lenses and Replacement of Lenses", key: "premium" },
                          { label: "Optical Prescriptions", key: "premium" },
                          { label: "Frames", key: "premium" },
                        ].map((row, rowIndex) => (
                          <TableRow key={rowIndex} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#fafafa" } }}>
                            <TableCell align="center">{row.label}</TableCell>
                            {plansc.map((plan, colIndex) => (
                              <TableCell key={colIndex} align="center">
                                {typeof plan[row.key] === "string" ? plan[row.key] : convertPremium(plan[row.key])}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
      </Table>
    </TableContainer>
                  </div>
                  <div>
                    
                  </div>
                    </AnimationRightToLeft>
                    
                  </div>
                </div>
                
              </div>
              <div className="overflow-x-auto p-0 bg-gray-50 rounded-xl shadow-md">
                  <TableContainer component={Paper} className="shadow-lg w-full">
                        <Table>
                          <TableHead>
                            <TableRow style={{ backgroundColor: "#157EBC", color: "white" }}>
                              <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>Plan</TableCell>
                              <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>Benefit Cover</TableCell>
                              <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>Premium per Person</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {[{ plan: "Plan 1", limit: 5000, premium: 1210 },
                              { plan: "Plan 2", limit: 7500, premium: 1803 },
                              { plan: "Plan 3", limit: 10000, premium: 2408 }].map((row, index) => (
                                <TableRow key={index} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#fafafa" } }}>
                                  <TableCell align="center">{row.plan}</TableCell>
                                  <TableCell align="center">{convertPremium(row.limit)}</TableCell>
                                  <TableCell align="center">{convertPremium(row.premium)}</TableCell>
                                </TableRow>
                              ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                  </div>
            </AnimationDownToUp>
          </div>



           {/* Contact Section */}
          <p className="text-gray-700 text-lg font-bold"
           > Ready to take the next step ?  </p>
          <Button size="large" onClick={handleClickMedical} endIcon={<ShieldIcon />} style={{backgroundColor:'#E42D2C',color:'white', textTransform: 'none'}} >
            Get Quote
          </Button>
        
          
        </div>
      </div>
    </div>
  );
};

export default Medical;
