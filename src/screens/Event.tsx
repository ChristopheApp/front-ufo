import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import BoxCentralsStyled from "../components/styled/BoxCentralsStyled";
import BackgroundStyled from '../components/styled/BackgroundStyled';
import ButtonEdit from '../components/ButtonEdit';
import Loading from '../components/Loading';

import type { event } from '../types/event';
import formatDate from "../utils/formatDate";


import { Box, Grid, Divider } from '@mui/material';
import styled from "@emotion/styled";


export default function Event() {
    let params = useParams();

    const [event, setEvent] = useState<event>();
    const [editMode, setEditMode] = useState<boolean>(false);

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
            if(result[0].state === 'En création'){
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


    return (
        <>
            <BackgroundStyled>
                <BoxStyled>
                    <Grid container columns={24} direction="row" justifyContent="space-between" >
                        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                            {event ?
                            <BoxCentralsStyled>
                                <h2>
                                    {event.name}
                                    {editMode ? <ButtonEdit scale={0.7} /> : <div/>}
                                </h2>

                                <h3>{event.location}</h3>
                                <h3>{formatDate(new Date(event.date_start), new Date(event.date_end))}</h3>
                                <h3>{event.state}</h3>
                            </BoxCentralsStyled>

                            : <Loading />}
                        </Grid>


                        <Grid item xs={12} sm={12} md={12} lg={18} xl={12}>
                            <BoxCentralsStyled>
                                <h3>
                                    Activités
                                    {editMode ? <ButtonEdit scale={0.7} /> : <div/>}
                                </h3>
                            </BoxCentralsStyled>

                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={6} xl={12}>
                            <BoxCentralsStyled>
                                <h3>
                                    Equipes
                                    {editMode ? <ButtonEdit scale={0.7} /> : <div/>}
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