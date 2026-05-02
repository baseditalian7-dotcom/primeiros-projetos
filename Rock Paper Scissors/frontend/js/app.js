const choiceButtons = document.querySelectorAll("[data-choice]");
const playerChoiceText = document.querySelector("#playerChoice");
const aiChoiceText = document.querySelector("#aiChoice");
const resultText = document.querySelector("#resultText");
const roundText = document.querySelector("#roundText");
const playerScore = document.querySelector("#playerScore");
const aiScore = document.querySelector("#aiScore");
const drawScore = document.querySelector("#drawScore");
const resetScoreButton = document.querySelector("#resetScoreButton");
const historyList = document.querySelector("#historyList");
const emptyHistory = document.querySelector("#emptyHistory");

const scoreKey = "rock_paper_scissors_score";
const historyKey = "rock_paper_scissors_history";
const choices = ["pedra", "papel", "tesoura"];
const choiceNames = {
    pedra: "Pedra",
    papel: "Papel",
    tesoura: "Tesoura"
};
const winningRules = {
    pedra: "tesoura",
    papel: "pedra",
    tesoura: "papel"
};

function getScore() {
    const savedScore = localStorage.getItem(scoreKey);

    if (!savedScore) {
        return {
            player: 0,
            ai: 0,
            draw: 0
        };
    }

    return JSON.parse(savedScore);
}

function saveScore(score) {
    localStorage.setItem(scoreKey, JSON.stringify(score));
}

function renderScore() {
    const score = getScore();

    playerScore.textContent = score.player;
    aiScore.textContent = score.ai;
    drawScore.textContent = score.draw;
}

function getHistory() {
    const savedHistory = localStorage.getItem(historyKey);

    if (!savedHistory) {
        return [];
    }

    return JSON.parse(savedHistory);
}

function saveHistory(history) {
    localStorage.setItem(historyKey, JSON.stringify(history));
}

function renderHistory() {
    const history = getHistory();

    historyList.innerHTML = "";
    emptyHistory.style.display = history.length === 0 ? "block" : "none";

    history.forEach(function (round) {
        const item = document.createElement("li");
        item.innerHTML = `
            <span>${round.player} vs ${round.ai}</span>
            <strong>${round.result}</strong>
        `;
        historyList.appendChild(item);
    });
}

function getAiChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function decideWinner(playerChoice, aiChoice) {
    if (playerChoice === aiChoice) {
        return "draw";
    }

    if (winningRules[playerChoice] === aiChoice) {
        return "player";
    }

    return "ai";
}

function updateRound(playerChoice, aiChoice, winner) {
    const score = getScore();
    let resultLabel = "";

    if (winner === "player") {
        score.player += 1;
        resultLabel = "Você venceu";
        resultText.textContent = "Você venceu!";
    } else if (winner === "ai") {
        score.ai += 1;
        resultLabel = "IA venceu";
        resultText.textContent = "IA fake venceu!";
    } else {
        score.draw += 1;
        resultLabel = "Empate";
        resultText.textContent = "Empate!";
    }

    saveScore(score);
    renderScore();

    playerChoiceText.textContent = choiceNames[playerChoice];
    aiChoiceText.textContent = choiceNames[aiChoice];
    roundText.textContent = `${choiceNames[playerChoice]} contra ${choiceNames[aiChoice]}.`;

    const history = getHistory();
    history.unshift({
        player: choiceNames[playerChoice],
        ai: choiceNames[aiChoice],
        result: resultLabel
    });
    saveHistory(history.slice(0, 5));
    renderHistory();
}

function playRound(playerChoice) {
    resultText.textContent = "IA pensando...";
    roundText.textContent = "Aguardando escolha da IA fake.";

    window.setTimeout(function () {
        const aiChoice = getAiChoice();
        const winner = decideWinner(playerChoice, aiChoice);
        updateRound(playerChoice, aiChoice, winner);
    }, 450);
}

function resetScore() {
    saveScore({
        player: 0,
        ai: 0,
        draw: 0
    });
    saveHistory([]);
    playerChoiceText.textContent = "--";
    aiChoiceText.textContent = "--";
    resultText.textContent = "Escolha sua jogada";
    roundText.textContent = "A IA fake vai responder automaticamente.";
    renderScore();
    renderHistory();
}

choiceButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        playRound(button.dataset.choice);
    });
});

resetScoreButton.addEventListener("click", resetScore);

renderScore();
renderHistory();
