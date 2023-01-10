// import type { UfoEvent } from '../types/event'

const getState = (event: UfoEvent) => {
    let state = "";
    if (!event.locked) {
        state = "En création"
    } else {
        if (new Date(event.date_end) >= new Date()) {
            state = "En cours"
        } else if (new Date(event.date_end) < new Date()) {
            state = "Terminé"
        }
    }

    return state
}

export default getState