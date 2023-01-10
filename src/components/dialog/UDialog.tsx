import React, { useState } from 'react';
import { event } from '../../types/event';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';

interface Props {
    children?: React.ReactNode | React.ReactNode[];
    open: boolean;
    title: string;
    description: string;
    colorButtonValid: any;
    textButtonValid: string;
    disabledButtonValid: boolean;
    handleClose: () => void;
    handleValid: () => void;
}

export default function UDialog({ children, open, title, description, disabledButtonValid, colorButtonValid, textButtonValid, handleClose, handleValid }: Props) {

   



    return (
        <div>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    {description}
                </DialogContentText>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="error"
                        startIcon={<CloseRoundedIcon />}
                        onClick={handleClose}
                    >
                        Annuler
                    </Button>

                    <Button
                        variant="contained"
                        color={colorButtonValid}
                        endIcon={<EventAvailableRoundedIcon />}
                        onClick={handleValid}
                        disabled={disabledButtonValid}
                    >
                        {textButtonValid}
                    </Button>


                </DialogActions>
            </Dialog>
        </div>
    );
}
