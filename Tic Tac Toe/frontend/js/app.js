const cells = document.querySelectorAll(".cell");
const gameStatus = document.querySelector("#gameStatus");
const resetGameButton = document.querySelector("#resetGameButton");
const resetScoreButton = document.querySelector("#resetScoreButton");
const scoreX = document.querySelector("#scoreX");
const scoreO = document.querySelector("#scoreO");
const scoreDraw = document.querySelector("#scoreDraw");

const scoreKey = "tic_tac_toe_score";
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

function getScore() {
    const savedScore = localStorage.getItem(scoreKey);

    if (!savedScore) {
        return {
            x: 0,
            o: 0,
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

    scoreX.textContent = score.x;
    scoreO.textContent = score.o;
    scoreDraw.textContent = score.draw;
}

function updateScore(winner) {
    const score = getScore();

    if (winner === "X") {
        score.x += 1;
    } else if (winner === "O") {
        score.o += 1;
    } else {
        score.draw += 1;
    }

    saveScore(score);
    renderScore();
}

function checkWinner() {
    for (let i = 0; i < winningCombinations.length; i += 1) {
        const combination = winningCombinations[i];
        const first = combination[0];
        const second = combination[1];
        const third = combination[2];

        if (board[first] !== "" && board[first] === board[second] && board[second] === board[third]) {
            return combination;
        }
    }

    return null;
}

function isDraw() {
    return board.every(function (cell) {
        return cell !== "";
    });
}

function markWinningCells(combination) {
    combination.forEach(function (index) {
        cells[index].classList.add("win");
    });
}

function handleCellClick(event) {
    const cell = event.target;
    const index = Number(cell.dataset.index);

    if (!gameActive || board[index] !== "") {
        return;
    }

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());

    const winningCombination = checkWinner();

    if (winningCombination) {
        gameActive = false;
        markWinningCells(winningCombination);
        gameStatus.textContent = `Jogador ${currentPlayer} venceu!`;
        updateScore(currentPlayer);
        return;
    }

    if (isDraw()) {
        gameActive = false;
        gameStatus.textContent = "Empate!";
        updateScore("draw");
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    gameStatus.textContent = `Vez do jogador ${currentPlayer}`;
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    gameStatus.textContent = "Vez do jogador X";

    cells.forEach(function (cell) {
        cell.textContent = "";
        cell.className = "cell";
    });
}

function resetScore() {
    saveScore({
        x: 0,
        o: 0,
        draw: 0
    });
    renderScore();
}

cells.forEach(function (cell) {
    cell.addEventListener("click", handleCellClick);
});

resetGameButton.addEventListener("click", resetGame);
resetScoreButton.addEventListener("click", resetScore);

renderScore();
