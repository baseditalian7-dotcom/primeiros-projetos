const timeElement = document.querySelector("#time");
const dateElement = document.querySelector("#date");
const periodElement = document.querySelector("#period");
const weekDayElement = document.querySelector("#weekDay");
const timezoneElement = document.querySelector("#timezone");
const timezoneSelect = document.querySelector("#timezoneSelect");

function addZero(value) {
    return String(value).padStart(2, "0");
}

function getPeriod(hour) {
    if (hour >= 5 && hour < 12) {
        return "Manhã";
    }

    if (hour >= 12 && hour < 18) {
        return "Tarde";
    }

    return "Noite";
}

function updateClock() {
    const now = new Date();
    const selectedTimezone = timezoneSelect.value;

    const timeParts = new Intl.DateTimeFormat("pt-BR", {
        timeZone: selectedTimezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    }).formatToParts(now);

    const hours = timeParts.find((part) => part.type === "hour").value;
    const minutes = timeParts.find((part) => part.type === "minute").value;
    const seconds = timeParts.find((part) => part.type === "second").value;
    const hourNumber = Number(hours);

    timeElement.textContent = `${hours}:${minutes}:${seconds}`;

    dateElement.textContent = now.toLocaleDateString("pt-BR", {
        timeZone: selectedTimezone,
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    weekDayElement.textContent = now.toLocaleDateString("pt-BR", {
        timeZone: selectedTimezone,
        weekday: "long"
    });

    periodElement.textContent = getPeriod(hourNumber);
    timezoneElement.textContent = selectedTimezone;
}

timezoneSelect.addEventListener("change", updateClock);

updateClock();
setInterval(updateClock, 1000);
