import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import styled from '@emotion/styled'

interface Props {
    children?: React.ReactNode;
}

export default function PaperEvent({ children }: Props) {

    const PaperStyled = styled(Paper)`
    max-width: 80%, 
    margin-bottom: 20px
    `

    return(
        <>
        <PaperStyled elevation={4}>
            {children}
        </PaperStyled>
        </>
    )
}