import * as React from 'react';
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import styled from '@emotion/styled'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { event } from '../types/event';

interface Props {
    children?: React.ReactNode;
    event: event;
    deleteEvent: (id: number | undefined, name: string) => void;
    isAdmin: boolean;
}

export default function PaperEvent({ children, event, deleteEvent, isAdmin }: Props) {
    let navigate = useNavigate();


    const PaperStyled = styled(Paper)`
    display: flex;
    max-width: 100%; 
    margin-bottom: 20px;
    text-align: center;
    cursor: pointer;
    `

    const handleClickEvent = () => {
        navigate(`/event/${event._id}`);
    }

    return (
        <>
            <PaperStyled elevation={4} >
                <Box onClick={handleClickEvent}>

                    {event ? event.name + " à " + event.location + ", Début : " + new Date(event.date_start).toLocaleDateString() + " - Fin : " + new Date(event.date_end).toDateString() : children}
                </Box>
                {isAdmin ? <DeleteForeverRoundedIcon onClick={() => { deleteEvent(event._id, event.name) }} /> : null}
            </PaperStyled>
        </>
    )
}