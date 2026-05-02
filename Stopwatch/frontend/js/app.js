const startPauseButton = document.querySelector("#startPauseButton");
const resetButton = document.querySelector("#resetButton");
const lapButton = document.querySelector("#lapButton");
const timeDisplay = document.querySelector("#timeDisplay");
const stateText = document.querySelector("#stateText");
const progressRing = document.querySelector("#progressRing");
const lapList = document.querySelector("#lapList");
const lapCount = document.querySelector("#lapCount");
const emptyLaps = document.querySelector("#emptyLaps");

let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;
let laps = [];

function formatTime(milliseconds) {
    const totalCentiseconds = Math.floor(milliseconds / 10);
    const centiseconds = totalCentiseconds % 100;
    const totalSeconds = Math.floor(totalCentiseconds / 100);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(centiseconds).padStart(2, "0")}`;
}

function getCurrentTime() {
    if (isRunning) {
        return Date.now() - startTime + elapsedTime;
    }

    return elapsedTime;
}

function updateDisplay() {
    const currentTime = getCurrentTime();
    const progress = (currentTime % 60000) / 60000;
    const degrees = progress * 360;

    timeDisplay.textContent = formatTime(currentTime);
    progressRing.style.background = `conic-gradient(var(--accent) ${degrees}deg, rgba(255, 255, 255, 0.08) 0deg)`;
}

function startTimer() {
    startTime = Date.now();
    isRunning = true;
    stateText.textContent = "Rodando";
    startPauseButton.textContent = "Pause";
    timerInterval = setInterval(updateDisplay, 10);
}

function pauseTimer() {
    elapsedTime = getCurrentTime();
    isRunning = false;
    stateText.textContent = "Pausado";
    startPauseButton.textContent = "Start";
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    laps = [];
    stateText.textContent = "Parado";
    startPauseButton.textContent = "Start";
    renderLaps();
    updateDisplay();
}

function renderLaps() {
    lapList.innerHTML = "";
    emptyLaps.style.display = laps.length === 0 ? "block" : "none";
    lapCount.textContent = `${laps.length} registros`;

    laps.forEach(function (lap, index) {
        const item = document.createElement("li");
        item.innerHTML = `<span>Volta ${index + 1}</span><strong>${lap}</strong>`;
        lapList.appendChild(item);
    });
}

function addLap() {
    if (getCurrentTime() === 0) {
        return;
    }

    laps.unshift(formatTime(getCurrentTime()));
    renderLaps();
}

startPauseButton.addEventListener("click", function () {
    if (isRunning) {
        pauseTimer();
    } else {
        startTimer();
    }
});

resetButton.addEventListener("click", resetTimer);
lapButton.addEventListener("click", addLap);

updateDisplay();
