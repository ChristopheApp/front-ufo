// import type {activity} from '../../types/activity'

const deleteActivity = async (activityId: number ) :Promise<UfoActivity> => {
    
    let activityCreated = {} as UfoActivity;

    console.log("delete activity", activityId)

    try {
        const response = await fetch(`http://localhost:3000/activities/${activityId}`, {
            method: 'DELETE',
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

export default deleteActivity;