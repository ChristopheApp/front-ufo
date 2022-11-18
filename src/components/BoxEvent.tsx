import React, {useState, useEffect} from 'react'
import { Box } from "@mui/material";
import { ReactElement } from "react";

import formatDate from "../utils/formatDate";

import styled from "@emotion/styled";

import type { event } from "../types/event";

import ButtonMore from './ButtonMore'
import ButtonEdit from './ButtonEdit'

interface Props {
    children?: ReactElement
    event: event
    isAdmin: boolean
    handleDeleteEvent: (id: number, name: string) => void;

}

export default function BoxEvent({ children, event,  isAdmin, handleDeleteEvent}: Props) {

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
        <BoxStyled onClick={()=> {console.log("click event")}}>
            {event.state === "En création" ? <ButtonEdit /> : <ButtonMore />}
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