import type {activity} from "../../types/activity"

const addActivity = async (eventId: number, activity: activity) => {

    console.log("add Activity", eventId, activity)
    console.log(activity)
    console.log(activity._id);

    const data = {
        activityId: activity._id
    }

    try {
        const response = await fetch(`http://localhost:3000/events/addactivity/${eventId}`, {
            method: 'PATCH',
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
        console.error("Error while adding activity to event", err);
    }
}

export default addActivity;