import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import BackgroundStyled from '../components/styled/BackgroundStyled';
import Loading from '../components/Loading';

import type { event } from '../types/event';

import Box from '@mui/material/Box';
import styled from "@emotion/styled";


export default function Event() {
    let params = useParams();

    const [event, setEvent] = useState<event>();

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
        }
        catch (err) {
            console.error("Error while fetching event", err);
        }
    }

    const BoxStyled = styled(Box)`
        display: flex;
        flex-direction: column;
        color: white;
        padding-left: 10px;
        border: solid #38444D;
        border-width: 2px;
        width: 95%;
        // margin: 0 10px;
    `

    return (
        <>
            <BackgroundStyled>
                <BoxStyled>
                    <p>test</p>

                </BoxStyled>
            
                <div className='event'>
                    {!event
                        ? <Loading />
                        : <div>
                            <h1>{event.name}</h1>
                            <p>{event._id}</p>
                        </div>
                    }

                </div>
            </BackgroundStyled>
        </>
    )
};