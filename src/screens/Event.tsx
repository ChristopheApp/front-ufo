import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import DialogUpdateEvent from '../components/dialog/DialogUpdateEvent';
import BoxCentralsStyled from "../components/styled/BoxCentralsStyled";
import BackgroundStyled from '../components/styled/BackgroundStyled';
import ButtonEditStyled from '../components/styled/ButtonEditStyled';
import Buttons from '../components/Buttons';
import Loading from '../components/Loading';

import type { event } from '../types/event';
import formatDate from "../utils/formatDate";


import { Box, Grid, Divider } from '@mui/material';
import styled from "@emotion/styled";


export default function Event() {
    let params = useParams();

    const [event, setEvent] = useState<event>();
    const [editMode, setEditMode] = useState<boolean>(false);

    // State to open or close the dialog to update event
    const [openDUE, setOpenDUE] = useState(false);


    useEffect(() => {
        console.log(params);
        if (params.id) {
            fetchEvent(params.id);
        }
    }, [])

    const fetchEvent = async (id: string) => {
        try {
            const response = await fetch(`http://localhost:3000/events/${id}`);
            console.log(response)

            if (response.status !== 200) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
            setEvent(result[0])
            if (result[0].state === 'En création') {
                setEditMode(true);
            }
        }
        catch (err) {
            console.error("Error while fetching event", err);
        }
    }

    const BoxStyled = styled(Box)`
        display: flex;
        flex-direction: column;
        color: white;
        border: solid #38444D;
        border-width: 2px;
        width: 95%;
        // margin: 0 10px;
    `


    /** 3 Functions to manage Dialog update Event display */
    const handleClickOpenDUE = () => {
        setOpenDUE(true);
        if (event)
            console.log(new Date(event.date_start).toISOString().split('T')[0])
    };
    const handleCloseDUE = () => {
        setOpenDUE(false);
    };

    /**
     * Function to handle the click on the button to update the event from child component,
     * call the function to update the event in the database and update the state
     * and close the dialog 
     * @param {event} event - The event's data to update
     */
    const handleValidDUE = (event: event) => {
        console.log(event);
        setOpenDUE(false);
        updateEvent(event);
        setEvent(event);
    };

    const handleValidEvent = () => {
        console.log("valid Event");
    }

    const updateEvent = async (event: event) => {
        console.log(event._id)
        const data = {
            id: event._id,
            name: event.name,
            location: event.location,
            date_start: event.date_start,
            date_end: event.date_end,
            description: event.description,
            state: event.state,
        }

        try {
            const response = await fetch(`http://localhost:3000/events/${event._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.status !== 200) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }

            const result = await response.json();
            console.log(result);

        } catch (err) {
            console.error("Error while updating event", err);
        }
    }

    return (
        <>
            {event ? <DialogUpdateEvent eventProp={event} open={openDUE} handleClose={handleCloseDUE} handleValid={handleValidDUE} /> : <div />}

            <BackgroundStyled>
                <BoxStyled>
                    <Grid container columns={24} direction="row" justifyContent="space-between" >
                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                            {event ?
                                <BoxCentralsStyled>
                                    <h2>
                                        {event.name}
                                        {editMode ? <ButtonEditStyled onClick={handleClickOpenDUE} scale={0.7} /> : <div />}
                                    </h2>

                                    <h3>{event.location}</h3>
                                    <h3>{formatDate(new Date(event.date_start), new Date(event.date_end))}</h3>
                                    <Box >
                                        <Grid container columns={12} direction="row" justifyContent="space-between" >
                                            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                                <h3>{event.state}</h3>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                                {editMode ? <Buttons onClick={handleValidEvent}>Valider évènement</Buttons> : <div />}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </BoxCentralsStyled>

                                : <Loading />}
                        </Grid>


                        <Grid item xs={12} sm={12} md={12} lg={18} xl={12}>
                            <BoxCentralsStyled>
                                <h3>
                                    Activités
                                    {editMode ? <ButtonEditStyled onClick={handleClickOpenDUE} scale={0.7} /> : <div />}
                                </h3>
                            </BoxCentralsStyled>

                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={6} xl={12}>
                            <BoxCentralsStyled>
                                <h3>
                                    Equipes
                                    {editMode ? <ButtonEditStyled onClick={handleClickOpenDUE} scale={0.7} /> : <div />}
                                </h3>
                            </BoxCentralsStyled>

                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={18} xl={12}>
                            <BoxCentralsStyled>
                                <h3>A venir/Score/planing</h3>
                            </BoxCentralsStyled>
                        </Grid>

                    </Grid>

                </BoxStyled>

            </BackgroundStyled>
        </>
    )
};