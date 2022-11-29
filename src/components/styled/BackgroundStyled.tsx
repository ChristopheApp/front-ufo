import styled from "@emotion/styled"
import { ReactElement } from "react"

interface Props {
    children: ReactElement[] | ReactElement
}

export default function BackgroundStyled({children} : Props) {

    const Background = styled.div`
        min-height: 100vh;

        background-color: #15202B;
        display: flex;
        flex-direction: column;
    `

    return (
        <Background>
            {children}
        </Background>
        
    )
}