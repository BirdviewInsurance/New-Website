import React ,{ useState, useEffect} from 'react';
import axios from 'axios';

// Mui imports
import Button from '@mui/material/Button';
import ShieldIcon from '@mui/icons-material/Shield';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper ,Autocomplete,TextField  } from "@mui/material";


// Importing components
import BackgroundImage from '../components/BackgroundImage';  
import AnimationDownToUp from './components/Animation/AnimationDownToUp';
import AnimationRightToLeft from './components/Animation/AnimationRightToLeft';

const LastExpenses = () => {

    const [currency, setCurrency] = useState("KES");

    const currencyRates = {
      USD: 0.00774,
      KES: 1,
      EUR: 0.007385,
      GBP: 0.006096
  };
  // https://quote.birdviewmicroinsurance.com/api/product/GetXRates
  
    const currencySymbols = {
        KES: 'Ksh.',
        USD: '$',
        EUR: '€',
        GBP: '£',
    };

      
    const convertPremium = (amount) => {
      const rate = currencyRates[currency] || 1;
      const convertedAmount = Number(amount * rate).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      return `${currencySymbols[currency] || ''} ${convertedAmount}`;
  };


    const handleClickLastExpsense = () => {
        window.location.href = "https://quote.birdviewinsurance.com/?ProductID=2";  
      };

  return (
    <div className="relative bg-gray-100">
      {/* Top Div with Background Image */}
      
      <BackgroundImage/>

      {/* Container for Bottom Div */}
      <div className="relative top-[-40px] left-0 right-0 flex justify-center">
        <div className="bg-white w-full max-w-[calc(100%-2rem)] p-2 flex flex-col items-center justify-start overflow-visible rounded-3xl">

        <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
            <AnimationDownToUp index={0}>
              <div
                style={{ boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)" }}
                className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col  items-start"
              >
                <div className="flex flex-col md:flex-row w-full h-full">
                  {/* Icon and Details Section */}
                  <div className="flex flex-col flex-grow">
                    <AnimationRightToLeft index={4}>
                      {/* Contact Title */}
                      <p className="text-gray-700 text-lg font-bold">Last Expense</p>

                      {/* Description */}
                      <p className="text-gray-700 m-2">
                        Our last expense/funeral expense cover pays a specified cash amount within 48 hours of notification of death and providing required documents in respect of the insured persons.
                        Our cover limits range from Kshs.50,000 to Kshs.500,000.
                      </p>
                    </AnimationRightToLeft>
                  </div>
                </div>
              </div>
            </AnimationDownToUp>

                <AnimationDownToUp index={0}>
                  <div
                    style={{ boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)" }}
                    className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4  h-full items-start"
                  >
                    <div className="flex flex-col md:flex-row   h-full">
                      <div className="flex flex-col w-full">
                      <p className="text-gray-700 text-sm font-bold"
                          > Last Expense - individual  (Individuals up to 69 years of age)
                       </p>
                        <AnimationRightToLeft index={4}>
                           <div className='mb-4 mt-2'>
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
                                   Benefit policyholder
                                  </TableCell>
                                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>
                                  Premium per policyholder
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {[
                                  { plan: "Plan 1", limit: 50000, premium: 510 },
                                  { plan: "Plan 2", limit: 100000, premium: 1020 },
                                  { plan: "Plan 3", limit: 200000, premium: 2040 },
                                  { plan: "Plan 4", limit: 250000, premium: 2550 },
                                  { plan: "Plan 5", limit: 300000, premium: 3060 },
                                  { plan: "Plan 6", limit: 500000, premium: 5090 },
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

                <AnimationDownToUp index={0}>
                  <div
                    style={{ boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)" }}
                    className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4  h-full items-start"
                  >
                    <div className="flex flex-col md:flex-row  h-full ">
                      <div className="flex flex-col w-full">
                      <p className="text-gray-700 text-sm font-bold"
                          > Last Expense - Parents & Siblings * (18 - 85 yrs)
                       </p>
                        <AnimationRightToLeft index={4}>
                        <TableContainer component={Paper} className="shadow-lg">
                            <Table>
                              <TableHead>
                                <TableRow style={{ backgroundColor: "#157EBC", color: "white" }}>
                                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>
                                    Plan
                                  </TableCell>
                                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>
                                   Benefit per person
                                  </TableCell>
                                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>
                                  Premium per person (18- 69 years)
                                  </TableCell>
                                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>
                                  Premium per person (70 - 75 years)
                                  </TableCell>
                                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>
                                  Premium per person (76 - 85 years)
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {[
                                  { plan: "Plan 1", limit:  50000 , premiumadultq:   510 , premiumadultk: 1060, premiumadultm: 1840  },
                                  { plan: "Plan 2", limit:  100000 , premiumadultq:  1020 , premiumadultk: 2110, premiumadultm: 3680  },
                                  { plan: "Plan 3", limit:  200000 , premiumadultq:  2040 , premiumadultk: 4210, premiumadultm: 7350 },
                                  { plan: "Plan 4", limit:  250000 , premiumadultq:  2550 , premiumadultk: 5260, premiumadultm: 9190 },
                                  { plan: "Plan 5", limit:  300000 , premiumadultq:  3060 , premiumadultk: 6310, premiumadultm: 11020 },
                                  
                                ].map((row, index) => (
                                  <TableRow key={index} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#fafafa" } }}>
                                    <TableCell align="center">{row.plan}</TableCell>
                                    <TableCell align="center">{convertPremium(row.limit)}</TableCell>
                                    <TableCell align="center">{convertPremium(row.premiumadultq)}</TableCell>
                                    <TableCell align="center">{convertPremium(row.premiumadultk)}</TableCell>
                                    <TableCell align="center">{convertPremium(row.premiumadultm)}</TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                          <div className="w-full">
                                  <p className="font-bold text-md text-gray-900 w-full">
                                * This coverage is available for the parents and siblings of the principal member.
                              </p>
                            </div>
                        </AnimationRightToLeft>
                      </div>
                    </div>
                  </div>
                </AnimationDownToUp>

                <AnimationDownToUp index={0}>
                  <div
                    style={{ boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)" }}
                    className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4    h-full items-start"
                  >
                    <div className="flex flex-col md:flex-row   h-full">
                      <div className="flex flex-col w-full">
                      <p className="text-gray-700 text-sm font-bold"
                          > Last Expense -Family (Family policy up to 69 years of age)
                       </p>
                        <AnimationRightToLeft index={4}>
                          <TableContainer component={Paper} className="shadow-lg">
                            <Table>
                              <TableHead>
                                <TableRow style={{ backgroundColor: "#157EBC", color: "white" }}>
                                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>
                                    Plan
                                  </TableCell>
                                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>
                                    Benefit 
                                  </TableCell>
                                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>
                                    Benefit Spouse
                                  </TableCell>
                                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>
                                    Benefit Per Child(Up to 4 children)
                                  </TableCell>
                                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>
                                    Premium per Family
                                  </TableCell>
                                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>
                                    Premium (Additional Child)
                                  </TableCell>
                                  <TableCell align="center" sx={{ color: "white", fontWeight: "bold", padding: "8px" }}>
                                    Premium (Additional Spouse)
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {[
                                  { plan: "Plan 1", benefit: 50000, spouse: 50000, children: 50000, premium: 1000, additionalChild: 260, additionalSpouse: 510 },
                                  { plan: "Plan 2", benefit: 100000, spouse: 100000, children: 100000, premium: 1930, additionalChild: 510, additionalSpouse: 1020 },
                                  { plan: "Plan 3", benefit: 200000, spouse: 200000, children: 100000, premium: 3850, additionalChild: 1020, additionalSpouse: 2040 },
                                  { plan: "Plan 4", benefit: 250000, spouse: 250000, children: 250000, premium: 5000, additionalChild: 1280, additionalSpouse: 2550 },
                                  { plan: "Plan 5", benefit: 300000, spouse: 300000, children: 300000, premium: 5770, additionalChild: 1530, additionalSpouse: 3060 },
                                  { plan: "Plan 6", benefit: 500000, spouse: 500000, children: 500000, premium: 9600, additionalChild: 2550, additionalSpouse: 5090 },
                                ].map((row, index) => (
                                  <TableRow key={index} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#fafafa" } }}>
                                    <TableCell align="center">{row.plan}</TableCell>
                                    <TableCell align="center">{convertPremium(row.benefit)}</TableCell>
                                    <TableCell align="center">{convertPremium(row.spouse)}</TableCell>
                                    <TableCell align="center">{convertPremium(row.children)}</TableCell>
                                    <TableCell align="center">{convertPremium(row.premium)}</TableCell>
                                    <TableCell align="center">{convertPremium(row.additionalChild)}</TableCell>
                                    <TableCell align="center">{convertPremium(row.additionalSpouse)}</TableCell>
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
          <Button size="large" onClick={handleClickLastExpsense} endIcon={<ShieldIcon />} style={{backgroundColor:'#E42D2C',color:'white', textTransform: 'none'}} >
            Get Quote
          </Button>
        
          
        </div>
      </div>
    </div>
  );
};

export default LastExpenses;
