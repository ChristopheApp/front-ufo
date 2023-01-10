// import type {activity} from "../../types/activity"

const removeActivity = async (eventId: number, activity: UfoActivity) => {

    console.log("remove Activity", eventId, activity)
    console.log(activity)
    console.log(activity._id);

    const data = {
        activityId: activity._id
    }

    try {
        const response = await fetch(`http://localhost:3000/events/removeactivity/${eventId}`, {
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
        console.error("Error while removing activity from event", err);
    }
}

export default removeActivity;