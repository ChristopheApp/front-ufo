import {ReactElement} from 'react'
import { Box } from "@mui/material";


import styled from "@emotion/styled";

import type { event } from "../types/event";
import BoxCentralMain from "./BoxCentralMain";
import BoxCentralAct from "./BoxCentralAct";
import BoxCentralDesc from "./BoxCentralDesc";


interface Props {
    children?: ReactElement
    event: event
    isAdmin: boolean
}

export default function BoxEventCentral({ children, event,  isAdmin}: Props) {
    
    // const [event, setEvent] = useState<event>(events)

    // useEffect(() => {
    //     setEvent(events)
    // }, [events])

    const BoxStyled = styled(Box)`
    displau: flex;
    flex-direction: column;
    color: white;
    // padding-left: 10px;
    border: solid #38444D;
    border-width: 2px;

    // &:hover{
    //     background: #252E38;
    //     border-radius: 10px;
    // }
    // display: 'flex';
    // flexDirection: 'column';
    // color: 'blue';
    // background: '#1E2732';
    // borderRadius: '15px';
    `

    return (
        <BoxStyled>
            <BoxCentralMain event={event} isAdmin={true} />
            { event.description ? <BoxCentralDesc event={event} isAdmin={true} /> : null}
            <BoxCentralAct event={event} isAdmin={true} />
            {/* {event.state === "En création" ? <ButtonEdit /> : <ButtonMore />}
            <p>
                {event.name}
            </p>
            <p>
                {event.location}
            </p>
            <p>
                {formatDate(new Date(event.date_start), new Date(event.date_end))}
            </p> */}
            
        </BoxStyled>
    )
}