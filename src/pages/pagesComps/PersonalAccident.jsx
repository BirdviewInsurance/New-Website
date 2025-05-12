import React ,{useState,useEffect} from 'react';
import axios from 'axios';

// Mui imports
import Button from '@mui/material/Button';
import ShieldIcon from '@mui/icons-material/Shield';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper ,Autocomplete,TextField } from "@mui/material";


// Importing components
import BackgroundImage from '../components/BackgroundImage'; 
import AnimationDownToUp from './components/Animation/AnimationDownToUp';
import AnimationRightToLeft from './components/Animation/AnimationRightToLeft';
 
const PersonalAccident = () => {

      const [currency, setCurrency] = useState("KES");
  
      const currencyRates = {
        USD: 0.00774,
        KES: 1,
        EUR: 0.007385,
        GBP: 0.006096
    };

    const currencySymbols = {
        USD: "$",
        KES: "KSh",
        EUR: "€",
        GBP: "£"
    };

        
      const convertPremium = (amount) => {
        const rate = currencyRates[currency] || 1;
        const convertedAmount = Number(amount) * rate;
        return `${currencySymbols[currency] || ''} ${convertedAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };


    const handleClickPersonalAccident = () => {
        window.location.href = "https://quote.birdviewinsurance.com/?ProductID=5";  
      };;

  return (
    <div className="relative bg-gray-100">
      {/* Top Div with Background Image */}

      <BackgroundImage/>

      {/* Container for Bottom Div */}
      <div className="relative top-[-40px] left-0 right-0 flex justify-center">
        <div className="bg-white w-full max-w-[calc(100%-2rem)] p-2 flex flex-col items-center justify-start overflow-visible rounded-3xl">

          <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-8 mb-4'> 
          <AnimationDownToUp index={0}>
                <div 
                    style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }} 
                    className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden  p-6"
                >
                    <div className="flex flex-col md:flex-row items-center">
                    {/* Icon and Details Section */}
                    <div className="flex flex-col ">
                        <AnimationRightToLeft index={4}>
                        {/* Contact Title */}
                        <p className="text-gray-700 text-lg font-bold"
                          > Personal Accident
                       </p>
                       {/* Phone Section */}
                        <p className="text-gray-700 m-2 flex items-center ">
                        Our personal accident product provides fixed sum payout on death, permanent disablement, and medical expenses arising because of an accident.
                        Our cover limits range from kshs.50,000 to kshs.500,000.
                        </p>

                        

                        </AnimationRightToLeft>
                    </div>
                    </div>
                </div>
                </AnimationDownToUp>


                <AnimationDownToUp index={0}>
                  <div
                    style={{ boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)" }}
                    className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4"
                  >
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="flex flex-col w-full">
                        <AnimationRightToLeft index={4}>
                            <div className='mb-4'>
                              <Autocomplete
                                      options={["KES", "USD", "EUR", "GBP"]}
                                      value={currency}
                                      onChange={(event, newValue) => setCurrency(newValue || "KES")}
                                      renderInput={(params) => (
                                          <TextField {...params} label="Currency" variant="outlined" />
                                      )}
                                  />
                            </div>
                          <TableContainer component={Paper} className="shadow-lg">
                            <Table>
                              <TableHead>
                                <TableRow style={{ backgroundColor: "#157EBC", color: "white" }}>
                                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>
                                    Plan
                                  </TableCell>
                                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>
                                   Main Benefit covered due to an accident
                                  </TableCell>
                                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>
                                    Premium per Person
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {[
                                  { plan: "Plan 1", limit: "50000", premium: "500" },
                                  { plan: "Plan 2", limit: "100000", premium: "1000" },
                                  { plan: "Plan 3", limit: "200000", premium: "1340" },
                                  { plan: "Plan 4", limit: "250000", premium: "1670" },
                                  { plan: "Plan 5", limit: "300000", premium: "2000" },
                                  { plan: "Plan 6", limit: "500000", premium: "2500" },
                                ].map((row, index) => (
                                  <TableRow key={index} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#fafafa" } }}>
                                    <TableCell align="center">{row.plan}</TableCell>
                                    <TableCell align="center">{convertPremium(row.limit)}</TableCell>
                                    <TableCell align="center">{convertPremium(row.premium)}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        </AnimationRightToLeft>
                      </div>
                    </div>
                  </div>
                </AnimationDownToUp>
          </div>


           {/* Contact Section */}
          <p className="text-gray-700 text-lg font-bold"
           > Ready to take the next step ?  </p>
          <Button size="large" onClick={handleClickPersonalAccident} endIcon={<ShieldIcon />} style={{backgroundColor:'#E42D2C',color:'white', textTransform: 'none'}} >
            Get Quote
          </Button>
        
          
        </div>
      </div>
    </div>
  );
};

export default PersonalAccident;
