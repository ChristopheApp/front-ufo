import {useState, useEffect, ReactElement} from "react"
import type { event } from "../types/event";
import type { activity } from "../types/activity";

import fetchActivities from "../fetchers/activities/fetchActivities";

import BoxCentralsStyled from "./styled/BoxCentralsStyled";

interface Props {
    children?: ReactElement
    event: event
    isAdmin: boolean
}
export default function BoxCentralAct({ children, event,  isAdmin}: Props) {

    const [activities, setActivities] = useState<activity[]>([])

    useEffect(() => {
        if(event._id) {
            fetchActivities(event._id.toString())
            .then((data) => {
                setActivities(data)
            })
        }
    }, [event])


    return(
        <>
            <BoxCentralsStyled>
                <h3>Activités</h3>
                <p>
                    {activities.map((activity) => activity.name).join(", ")}
                </p>

            </BoxCentralsStyled>
        </>
    )
}