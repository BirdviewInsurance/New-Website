import React ,{useState,useEffect} from 'react';
import axios from 'axios';

// Mui imports
import Button from '@mui/material/Button';
import ShieldIcon from '@mui/icons-material/Shield';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Autocomplete,TextField  } from "@mui/material";


// Importing components
import BackgroundImage from '../components/BackgroundImage'; 
import AnimationDownToUp from './components/Animation/AnimationDownToUp';
import AnimationRightToLeft from './components/Animation/AnimationRightToLeft';

const HospitalCash = () => {


    const [currency, setCurrency] = useState("KES");
    
    const currencySymbols = {
        KES: 'Ksh.',
        USD: '$',
        EUR: '€',
        GBP: '£',
    };

    const currencyRates = {
      USD: 0.00774,
      KES: 1,
      EUR: 0.007385,
      GBP: 0.006096
  };
    const convertPremium = (amount) => {
        const rate = currencyRates[currency] || 1;
        const convertedAmount = Number(amount * rate).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return `${currencySymbols[currency] || ''} ${convertedAmount}`;
    };


    const handleClickHospital = () => {
        window.location.href = "https://quote.birdviewinsurance.com/?ProductID=4";   
      };

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
                    className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden  p-6 "
                >
                    <div className="flex flex-col md:flex-row items-center">
                    {/* Icon and Details Section */}
                    <div className="flex flex-col ">
                        <AnimationRightToLeft index={4}>
                        {/* Contact Title */}
                        <p className="text-gray-700 text-lg font-bold"
                          > Hospital cash
                       </p>
                       {/* Phone Section */}
                        <p className="text-gray-700 m-2 flex items-center ">
                         Our hospital cash product provides daily payments for insureds admitted in hospital for up to a maximum of 10 payments per year. Payments start from the second day of admission. Daily benefit payments range from kshs.2,000 to kshs.5,000
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
                                <TableRow style={{ backgroundColor: '#157EBC', color: 'white' }}>
                                  <TableCell align="center" sx={{   color: 'white', fontWeight: 'bold', padding: '8px'  }}>Plan</TableCell>
                                  <TableCell align="center" sx={{   color: 'white', fontWeight: 'bold', padding: '8px'  }}>Daily cash payment during admission</TableCell>
                                  <TableCell align="center" sx={{   color: 'white', fontWeight: 'bold', padding: '8px'  }}>Premium per person per year</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {[
                                  { plan: "Plan 1", cashPayment: "2000", premium: "1116" },
                                  { plan: "Plan 2", cashPayment: "2500", premium: "1392" },
                                  { plan: "Plan 3", cashPayment: "3000", premium: "1668" },
                                  { plan: "Plan 4", cashPayment: "3500", premium: "1944" },
                                  { plan: "Plan 5", cashPayment: "4000", premium: "2220" },
                                  { plan: "Plan 6", cashPayment: "5000", premium: "2772" },
                                ].map((row, index) => (
                                  <TableRow key={index} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#fafafa" } }}>
                                    <TableCell align="center" >{row.plan}</TableCell>
                                    <TableCell align="center" >{convertPremium(row.cashPayment)}</TableCell>
                                    <TableCell align="center" >{convertPremium(row.premium)}</TableCell>
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
          <Button size="large" onClick={handleClickHospital} endIcon={<ShieldIcon />} style={{backgroundColor:'#E42D2C',color:'white', textTransform: 'none'}} >
            Get Quote
          </Button>
        
          
        </div>
      </div>
    </div>
  );
};

export default HospitalCash;
