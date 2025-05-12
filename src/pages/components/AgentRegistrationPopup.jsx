"use client"

import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Button, Zoom } from '@mui/material';
import Image from 'next/image';
import { Close } from '@mui/icons-material';
import { useRouter } from 'next/router';


const Transition = React.forwardRef(function Transition(
    props,
    ref,
) {
    return <Zoom ref={ref} {...props} enter={true} exit={true} timeout={{ enter: 700, exit: 500 }} />
    // return <Slide direction="up" timeout={{ appear: 1000, enter: 1000, exit: 1000 }} easing="ease-in-out" ref={ref} {...props} />;
});

export default function AgentRegistrationPopup() {
    const [open, setOpen] = React.useState(false);

    const dialogOpened = window.sessionStorage.getItem('dialogOpened');

    const handleClose = () => {
        setOpen(false);
        window.sessionStorage.setItem('dialogOpened', 'true');
    };

    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (!dialogOpened) {
                setOpen(true);
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [dialogOpened]);

    const router = useRouter();

    return (
        <React.Fragment>
            <Dialog
                open={open}
                slots={{
                    transition: Transition,
                }}
                keepMounted
                maxWidth="xl"
                aria-describedby="alert-dialog-agent-registration"

            >
                <div className="relative">
                    <div className="absolute top-0 right-0 w-fit z-10">
                        <Button onClick={handleClose}>
                            <Close className='text-white' fontSize="large" />
                        </Button>
                    </div>
                    <Image width={600} height={400} src="/images/agents/recruiting-agents-worldwide.png" alt="Agent Registration" />
                    <div className="absolute bottom-20 left-1/3 z-20 max-w-fit text-white font-bold  bg-redCustom border-2 border-white rounded-full px-8 hover:bg-redCustom/90">
                        <Button onClick={() => {
                            router.push("/agent-Registration")
                            handleClose();
                        }} className='text-white'>Join Us</Button>
                    </div>
                </div>
            </Dialog>
        </React.Fragment>
    );
}
