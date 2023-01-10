import {ReactElement} from "react"
import BoxCentralsStyled from "./styled/BoxCentralsStyled";

// import type { event } from "../types/event";

interface Props {
    children?: ReactElement
    event: UfoEvent
    isAdmin: boolean
}
export default function BoxCentralDesc({ children, event,  isAdmin}: Props) {

    return(
        <>
            <BoxCentralsStyled>
                <h3>Description</h3>
                <p>
                    {event.description}
                </p>
            </BoxCentralsStyled>
        </>
    )
}