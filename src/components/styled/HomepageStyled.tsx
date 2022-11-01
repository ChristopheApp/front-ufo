import styled from "@emotion/styled"
import { ReactElement } from "react"

interface Props {
    children: ReactElement[]
}

export default function HomepageStyled({children} : Props) {

    const Homepage = styled.div`
        min-height: 100vh;

        background-color: #15202B;
        display: flex;
        flex-direction: column;
    `

    return (
        <Homepage>
            {children}
        </Homepage>
        
    )
}