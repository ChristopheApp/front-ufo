import type {activity} from '../../types/activity'

const fetchActivities = async (id?: string) :Promise<activity[]> => {
    let activities = [] as activity[];
    let response;
    try {
        if(id)
            response = await fetch(`http://localhost:3000/activities/?eventid=${id}`);
        else
            response = await fetch(`http://localhost:3000/activities/`);

        console.log(response)

        if (response.status !== 200) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        activities = result;

    } catch (err) {
        console.error("Error while fetching activities", err);
    }

    return activities;
}


export default fetchActivities;