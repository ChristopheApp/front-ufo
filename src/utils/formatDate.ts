/**
 * Function to formate the number of month into the name
 * @param month the month number
 * @returns a string, the Month Name
 */
const displayMonth = (month: number) => {
    let formatedMonth: string = "month";

    switch (month) {
        case 0:
            formatedMonth = "Janvier";
            break;
        case 1:
            formatedMonth = "Février";
            break;
        case 2:
            formatedMonth = "Mars";
            break;
        case 3:
            formatedMonth = "Avril";
            break;
        case 4:
            formatedMonth = "Mai";
            break;
        case 5:
            formatedMonth = "Juin";
            break;
        case 6:
            formatedMonth = "Juillet";
            break;
        case 7:
            formatedMonth = "Aout";
            break;
        case 8:
            formatedMonth = "Septembre";
            break;
        case 9:
            formatedMonth = "Octobre";
            break;
        case 10:
            formatedMonth = "Novembre";
            break;
        case 11:
            formatedMonth = "Décembre";
            break;

        default:
            console.log('Error while stringify month')

    }

    return formatedMonth
}

/**
 * Function to formate date to render like this : 
    * one day event :       12 Septembre 2022 
    * same month & year :   12 - 15 Septembre 2022
    * Same year :           12 Novembre - 8 Decembre 2022
    * else :                24 Decembre 2022 - 5 Janvier 2023
 * 
 * @param dateStart 
 * @param dateEnd 
 * @returns a string, the formated Date
 */
const formatDate = (dateStart: Date, dateEnd: Date) => {
    let dateFormated: string = "";
    const dayStart = dateStart.getDate();
    const monthStart = dateStart.getMonth();
    const yearStart = dateStart.getFullYear();

    const dayEnd = dateEnd.getDate()
    const monthEnd = dateEnd.getMonth()
    const yearEnd = dateEnd.getFullYear()

    /**
     * Checking condition to formate date : 
     * One day event : 12 Septembre 2022
     * same month & year : 12 - 15 Septembre 2022
     * Same year : 12 Novembre - 8 Decembre 2022
     * else : 24 Decembre 2022 - 5 Janvier 2023
     */
    if (dayStart === dayEnd && monthStart === monthEnd && yearStart === yearEnd) {
        // One day event : 12 Septembre 2022
        dateFormated = `${dayStart} ${displayMonth(monthStart)} ${yearStart}`
    } else if (monthStart === monthEnd && yearStart === yearEnd) {
        // Same month & year : 12 - 15 Septembre 2022
        dateFormated = `${dayStart} - ${dayEnd} ${displayMonth(monthStart)} ${yearStart}`
    } else if (yearStart === yearEnd && monthStart !== monthEnd) {
        // Same year but differents month : 12 Novembre - 8 Decembre 2022
        dateFormated = `${dayStart} ${displayMonth(monthStart)} - ${dayEnd} ${displayMonth(monthEnd)} ${yearStart}`
    } else {
        // else : 24 Decembre 2022 - 5 Janvier 2023
        dateFormated = `${dayStart} ${displayMonth(monthStart)} ${yearStart} - ${dayEnd} ${displayMonth(monthEnd)} ${yearEnd}`
    }

    return dateFormated
}
export default formatDate