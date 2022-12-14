import{ ReactElement } from "react"

import { Box } from "@mui/material";
import styled from "@emotion/styled";

interface Props {
    children?: ReactElement[] | ReactElement

}
export default function BoxCentralsStyled({ children}: Props) {

    const BoxStyled = styled(Box)`
        color: white;
        padding-left: 10px;
        border: solid #38444D;
        border-width: 1px;
    `

    return(
        <>
            <BoxStyled>
                {children}
            </BoxStyled>
        </>
    )
}