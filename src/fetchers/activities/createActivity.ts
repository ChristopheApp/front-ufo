// import type {activity} from '../../types/activity'

const createActivity = async (eventId: number | undefined, activity: UfoActivity) :Promise<UfoActivity> => {
    
    let activityCreated = {} as UfoActivity;

    console.log("createActivity", eventId, activity)

    const data = {
        name: activity.name,
        nb_fields: activity.nb_fields,
        nb_teams: activity.nb_teams,
        id_event: eventId
    }

    try {
        const response = await fetch(`http://localhost:3000/activities/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
        });
        console.log(response)

        if (response.status !== 200) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        activityCreated = result;

    } catch (err) {
        console.error("Error while creating activity", err);
    }
    return activityCreated;
}

export default createActivity;