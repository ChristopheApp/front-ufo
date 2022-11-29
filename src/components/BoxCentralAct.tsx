import React, {useState, useEffect, ReactElement} from "react"
import type { event } from "../types/event";
import BoxCentralsStyled from "./styled/BoxCentralsStyled";

interface Props {
    children?: ReactElement
    event: event
    isAdmin: boolean
}
export default function BoxCentralAct({ children, event,  isAdmin}: Props) {
    return(
        <>
            <BoxCentralsStyled>
                <h3>Activités</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mauris enim, rhoncus ut varius eu, lacinia at urna. Phasellus eu mattis tortor.
                </p>

            </BoxCentralsStyled>
        </>
    )
}