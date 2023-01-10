import React, { useState } from 'react';
import { event } from '../../types/event';

import UDialogEvent from "./UDialogEvent";



interface Props {
    children?: React.ReactNode;
    open: boolean;
    handleClose: () => void;
    handleValid: (event: any) => void;
    eventProp: event;
}

export default function UDialogUpdateEvent({ eventProp, open, handleClose, handleValid } : Props) {

   
    return(
        <>
            <UDialogEvent 
                title="Modifier évènement"
                description="Modifier les informations générales de l'évènement"
                open={open}
                handleClose={handleClose}
                handleValid={handleValid}
                textButtonValid="Valider"
                eventProps={eventProp}
            >

            </UDialogEvent>
        </>
    )
}