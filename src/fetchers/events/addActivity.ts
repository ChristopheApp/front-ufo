
const addActivity = async (eventId: number, activityId: number) => {

    console.log("add Activity", eventId, activityId)

    const data = {
        activityId
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
        console.error("Error while creating activity", err);
    }
}

export default addActivity;