import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import Loading from '../components/Loading';

import type { event } from '../types/event';

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

    return (
        <>
            <div className='event'>
                {!event
                    ? <Loading />
                    : <div>
                        <h1>{event.name}</h1>
                        <p>{event._id}</p>
                    </div>
                }

            </div>
        </>
    )
};