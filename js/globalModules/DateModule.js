
const DateModule = (function () {
    updateDate();
}());

function updateDate() {
    let now = new Date();
    let day = now.getDay(),
        dayNr = now.getDate(),
        month = now.getMonth(),
        year = now.getFullYear();

    let months = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];
    let week = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
    let id = ["day-id", "day-nr-id", "month-id", "year-id"];
    let values = [week[day], dayNr, months[month], year];

    for (let i = 0; i < id.length; i++) {
        document.getElementById(id[i]).firstChild.nodeValue = values[i];
    };
};


export default { DateModule, updateDate };