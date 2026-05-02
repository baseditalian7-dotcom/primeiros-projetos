const newGameButton = document.querySelector("#newGameButton");
const guessForm = document.querySelector("#guessForm");
const guessInput = document.querySelector("#guessInput");
const feedbackText = document.querySelector("#feedbackText");
const hintText = document.querySelector("#hintText");
const attemptCount = document.querySelector("#attemptCount");
const bestScore = document.querySelector("#bestScore");
const guessHistory = document.querySelector("#guessHistory");
const emptyHistory = document.querySelector("#emptyHistory");
const radarPulse = document.querySelector("#radarPulse");
const rangeMarker = document.querySelector("#rangeMarker");

const bestScoreKey = "guess_number_best_score";

let secretNumber = 0;
let attempts = 0;
let guesses = [];
let gameOver = false;

function createSecretNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function loadBestScore() {
    const savedBestScore = localStorage.getItem(bestScoreKey);
    bestScore.textContent = savedBestScore || "--";
}

function saveBestScore() {
    const savedBestScore = localStorage.getItem(bestScoreKey);

    if (!savedBestScore || attempts < Number(savedBestScore)) {
        localStorage.setItem(bestScoreKey, String(attempts));
        loadBestScore();
    }
}

function updateHistory() {
    guessHistory.innerHTML = "";
    emptyHistory.style.display = guesses.length === 0 ? "block" : "none";

    guesses.forEach(function (guess) {
        const item = document.createElement("li");
        item.textContent = guess;
        guessHistory.appendChild(item);
    });
}

function updateRadar(guess) {
    const distance = Math.abs(secretNumber - guess);
    const proximity = Math.max(0.25, 1 - distance / 100);
    const markerPosition = Math.min(100, Math.max(0, guess));

    radarPulse.style.transform = `scale(${proximity})`;
    rangeMarker.style.left = `${markerPosition}%`;

    if (distance <= 5) {
        radarPulse.style.background = "#22c55e";
    } else if (distance <= 15) {
        radarPulse.style.background = "#84cc16";
    } else {
        radarPulse.style.background = "#fb7185";
    }
}

function startNewGame() {
    secretNumber = createSecretNumber();
    attempts = 0;
    guesses = [];
    gameOver = false;
    attemptCount.textContent = "0";
    feedbackText.textContent = "Faça seu primeiro palpite.";
    hintText.textContent = "Quanto mais perto, mais forte o radar fica.";
    radarPulse.style.transform = "scale(0.35)";
    radarPulse.style.background = "#84cc16";
    rangeMarker.style.left = "0%";
    guessInput.value = "";
    guessInput.disabled = false;
    updateHistory();
}

function handleGuess(guess) {
    attempts += 1;
    guesses.push(guess);
    attemptCount.textContent = attempts;
    updateHistory();
    updateRadar(guess);

    if (guess === secretNumber) {
        feedbackText.textContent = "Você acertou!";
        hintText.textContent = `O número secreto era ${secretNumber}.`;
        gameOver = true;
        guessInput.disabled = true;
        saveBestScore();
    } else if (guess < secretNumber) {
        feedbackText.textContent = "Muito baixo.";
        hintText.textContent = "Tente um número maior.";
    } else {
        feedbackText.textContent = "Muito alto.";
        hintText.textContent = "Tente um número menor.";
    }
}

guessForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (gameOver) {
        return;
    }

    const guess = Number(guessInput.value);

    if (guess < 1 || guess > 100) {
        feedbackText.textContent = "Palpite inválido.";
        hintText.textContent = "Digite um número entre 1 e 100.";
        return;
    }

    handleGuess(guess);
    guessInput.value = "";
    guessInput.focus();
});

newGameButton.addEventListener("click", startNewGame);

loadBestScore();
startNewGame();
