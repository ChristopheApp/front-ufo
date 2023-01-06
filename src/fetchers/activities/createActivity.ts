import type {activity} from '../../types/activity'

const createActivity = async (eventId: number, activity: activity) :Promise<activity | undefined> => {

    console.log("createActivity", eventId, activity)
    
    const data = {
        name: activity.name,
        nb_fields: activity.nb_fields,
        nb_teams: activity.nb_teams,
        points: activity.points,
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
        return result;

    } catch (err) {
        console.error("Error while creating activity", err);
    }
}

export default createActivity;