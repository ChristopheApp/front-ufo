import React, {useState, useEffect, ReactElement} from "react"
import BoxCentralsStyled from "./styled/BoxCentralsStyled";

import type { event } from "../types/event";

interface Props {
    children?: ReactElement
    event: event
    isAdmin: boolean
}
export default function BoxCentralDesc({ children, event,  isAdmin}: Props) {

    return(
        <>
            <BoxCentralsStyled>
                <h3>Description</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mauris enim, rhoncus ut varius eu, lacinia at urna. Phasellus eu mattis tortor.
                </p>
            </BoxCentralsStyled>
        </>
    )
}