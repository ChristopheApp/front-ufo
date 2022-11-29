import React, {useState, useEffect, ReactElement} from 'react'
import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";

import formatDate from "../utils/formatDate";

import styled from "@emotion/styled";

import type { event } from "../types/event";

import ButtonMore from './ButtonMore'
import ButtonEdit from './ButtonEdit'

interface Props {
    children?: ReactElement
    event: event
    isAdmin: boolean
    handleClickEvent: (event: event) => void;

}

export default function BoxEvent({ children, event,  isAdmin, handleClickEvent}: Props) {

    const navigate = useNavigate();

    const BoxStyled = styled(Box)`
    displau: flex;
    flex-direction: column;
    color: white;
    padding-left: 10px;
    // border: solid #38444D;
    // border-width: 1px 0;

    &:hover{
        background: #252E38;
        border-radius: 10px;
    }
    // display: 'flex';
    // flexDirection: 'column';
    // color: 'blue';
    // background: '#1E2732';
    // borderRadius: '15px';
    `

    return (
        <BoxStyled onClick={() => handleClickEvent(event)}>
            {event.state === "En création" ? <ButtonEdit onClick={()=> navigate(`event/${event._id}`)} scale={1} mr={10} /> : <ButtonMore onClick={()=> navigate(`event/${event._id}`)} />}
            <p>
                {event.name}
            </p>
            <p>
                {event.location}
            </p>
            <p>
                {formatDate(new Date(event.date_start), new Date(event.date_end))}
            </p>
            
        </BoxStyled>
    )
}