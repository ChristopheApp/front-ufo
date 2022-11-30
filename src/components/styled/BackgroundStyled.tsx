import styled from "@emotion/styled"
import { ReactElement } from "react"

import ufolepLogo from '../../assets/ufolep.png';

import Box from "@mui/material/Box"

interface Props {
    children: ReactElement[] | ReactElement
}

export default function BackgroundStyled({children} : Props) {

    const Background = styled.div`
        min-height: 100vh;

        background-color: #15202B;
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    return (
        <Background>
            <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        // width: '80%',
                        // ml: '10%'
                    }}
                >
                    {/* <h1 className="title">UFOLEP</h1>
                        <h2 className="test">TEST GRADIENT LINEAR</h2> */}
                    <img src={ufolepLogo} className="logo-ufolep" alt="Ufolep" />
                </Box>
            {children}
        </Background>
        
    )
}