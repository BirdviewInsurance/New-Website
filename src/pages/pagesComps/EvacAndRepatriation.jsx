import React, { useState } from 'react';
import axios from 'axios';

// Mui imports
import Button from '@mui/material/Button';
import ShieldIcon from '@mui/icons-material/Shield';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Autocomplete, Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from '@mui/icons-material/Visibility';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

// Importing components
import BackgroundImage from '../components/BackgroundImage'; 
import AnimationDownToUp from './components/Animation/AnimationDownToUp';
import AnimationRightToLeft from './components/Animation/AnimationRightToLeft';

const EvacAndRepatriation = () => {
    const [currency, setCurrency] = useState("KES");
    const [inforOpen, setInforOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);

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

    const insurancePlans = [
        { plan: "Plan 1", limit: 100000, premium: 3500 },
        { plan: "Plan 2", limit: 200000, premium: 7000 },
        { plan: "Plan 3", limit: 300000, premium: 10500 },
        { plan: "Plan 4", limit: 500000, premium: 14400 }
    ];

    const convertPremium = (amount) => {
        const rate = currencyRates[currency] || 1;
        const convertedAmount = Number(amount) * rate;
        return `${currencySymbols[currency] || ''} ${convertedAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    const handleOpenDialog = (plan) => {
        setSelectedPlan(plan);
        setInforOpen(true);
    };

    const handleClickEvacAndRepatriation = () => {
        window.location.href = "https://quote.birdviewinsurance.com/?ProductID=1";
    };

    return (
        <div className="relative bg-gray-100">
            <BackgroundImage />
            <div className="relative top-[-40px] left-0 right-0 flex justify-center">
                <div className="bg-white w-full max-w-[calc(100%-2rem)] p-2 flex flex-col items-center justify-start overflow-visible rounded-3xl">
                    <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-8 mb-4'> 
                        <AnimationDownToUp index={0}>
                            <div className="max-w-3xl mx-auto bg-white overflow-hidden p-6" style={{ boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)' }}>
                            <AnimationRightToLeft index={4}>
                            <p className="text-gray-700 text-lg font-bold">Evacuation and Repatriation</p>
                            <p className="text-gray-700 m-2">
                                Our worldwide evacuation and repatriation cover is crafted to intervene and rescue situations of citizens being either stranded or deceased abroad. This removes the financial burden of evacuations and/or body repatriations from the government and affected families.
                            </p>
                            <div className="bg-blue-50 rounded-xl p-2 mt-4 shadow-md border border-blue-100">
                            <p className="text-blue-900 font-bold text-xl mb-4">Benefit Summary:</p>
                            <ul className="list-disc list-inside text-gray-800 space-y-3 pl-2 text-lg">
                                <li>
                                <strong>Evacuation on Medical Emergency:</strong> Cash payout of 
                                <span className="text-blue-700 font-semibold"> 25%</span> of benefit upon evacuation.
                                </li>
                                <li>
                                <strong>Employer Abuse/Mistreatments:</strong> Cash payout of 
                                <span className="text-blue-700 font-semibold"> 25%</span> of benefit.
                                </li>
                                <li>
                                <strong>Force Return/Deportation:</strong> Cash payout of 
                                <span className="text-blue-700 font-semibold"> 50%</span> of benefit.
                                </li>
                                <li>
                                <strong>Repatriation in the Event of Demise:</strong> Pay off 
                                <span className="text-blue-700 font-semibold"> 100%</span> of benefit to the next of kin/nominated beneficiary.
                                </li>
                            </ul>
                            </div>

                            </AnimationRightToLeft>
                            </div>
                        </AnimationDownToUp>

                        <AnimationDownToUp index={0}>
                            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-4 p-4" style={{ boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)" }}>
                                <Autocomplete
                                    options={["KES", "USD", "EUR", "GBP"]}
                                    value={currency}
                                    onChange={(event, newValue) => setCurrency(newValue || "KES")}
                                    renderInput={(params) => <TextField {...params} label="Currency" variant="outlined" />}
                                />
                                <TableContainer component={Paper} className="shadow-lg">
                                    <Table>
                                        <TableHead>
                                            <TableRow className="bg-blue-600 text-white">
                                                <TableCell align="center" className="text-white font-bold">Plan</TableCell>
                                                <TableCell align="center" className="text-white font-bold">Benefit Cover</TableCell>
                                                <TableCell align="center" className="text-white font-bold">Premium</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {insurancePlans.map((plan, index) => (
                                                <TableRow  className='cursor-pointer'  onClick={() => handleOpenDialog(plan)} key={index}>
                                                    <TableCell align="center">
                                                        <Button
                                                            className="customButton bg-gradient-to-r from-blue-700 via-blue-700 to-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-700 animate-blink"
                                                            variant="contained"
                                                            color="primary"
                                                            size="small"
                                                           
                                                            endIcon={<RemoveRedEyeIcon  className='text-white'/>}
                                                        >
                                                            {plan.plan}
                                                        </Button>
                                                    </TableCell>
                                                    <TableCell align="center">{convertPremium(plan.limit)}</TableCell>
                                                    <TableCell align="center">{convertPremium(plan.premium)}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </AnimationDownToUp>
                    </div>

                    {/* Contact Section */}
                    <p className="text-gray-700 text-lg font-bold"> Ready to take the next step? </p>
                    <Button 
                        size="large" 
                        onClick={handleClickEvacAndRepatriation} 
                        endIcon={<ShieldIcon />} 
                        style={{ backgroundColor: '#E42D2C', color: 'white', textTransform: 'none' }}
                    >
                        Get Quote
                    </Button>
                </div>
            </div>

            <Dialog open={inforOpen} onClose={() => setInforOpen(false)} maxWidth="md" fullWidth>
                <DialogTitle className="bg-blue-600 text-white text-center font-bold text-lg">{selectedPlan?.plan} Details
                    <IconButton onClick={() => setInforOpen(false)} className="absolute top-2 right-2 text-white">
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent className="p-4">
                    <TableContainer component={Paper} className="shadow-md">
                        <Table>
                            <TableBody>
                                {selectedPlan && Object.entries(selectedPlan).map(([key, value]) => (
                                    key !== 'plan' && (
                                        <TableRow key={key} className="odd:bg-gray-100">
                                            <TableCell className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}</TableCell>
                                            <TableCell>{convertPremium(value)}</TableCell>
                                        </TableRow>
                                    )
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default EvacAndRepatriation;
