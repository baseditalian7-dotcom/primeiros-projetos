const questions = [
    {
        category: "HTML",
        question: "Qual tag cria um parágrafo em HTML?",
        answers: ["<div>", "<p>", "<h1>", "<span>"],
        correctIndex: 1,
        explanation: "A tag <p> representa um parágrafo."
    },
    {
        category: "CSS",
        question: "Qual propriedade muda a cor do texto?",
        answers: ["background", "font-size", "color", "display"],
        correctIndex: 2,
        explanation: "A propriedade color altera a cor do texto."
    },
    {
        category: "JavaScript",
        question: "Qual método seleciona um elemento pelo id?",
        answers: ["querySelector()", "push()", "append()", "map()"],
        correctIndex: 0,
        explanation: "querySelector('#id') consegue selecionar um elemento pelo id."
    },
    {
        category: "Python",
        question: "Qual estrutura guarda vários itens em sequência?",
        answers: ["if", "print", "lista", "input"],
        correctIndex: 2,
        explanation: "Uma lista guarda vários itens em ordem."
    },
    {
        category: "Git",
        question: "Qual comando salva alterações no histórico local?",
        answers: ["git push", "git commit", "git clone", "git status"],
        correctIndex: 1,
        explanation: "git commit cria um registro das alterações no histórico local."
    }
];

const scoreText = document.querySelector("#scoreText");
const progressDots = document.querySelector("#progressDots");
const progressText = document.querySelector("#progressText");
const categoryText = document.querySelector("#categoryText");
const questionText = document.querySelector("#questionText");
const answersList = document.querySelector("#answersList");
const feedbackText = document.querySelector("#feedbackText");
const nextButton = document.querySelector("#nextButton");
const quizContent = document.querySelector("#quizContent");
const finalPanel = document.querySelector("#finalPanel");
const finalScore = document.querySelector("#finalScore");
const finalMessage = document.querySelector("#finalMessage");
const restartButton = document.querySelector("#restartButton");

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

function renderProgress() {
    progressDots.innerHTML = "";

    questions.forEach(function (question, index) {
        const dot = document.createElement("span");
        dot.className = "progress-dot";

        if (index < currentQuestionIndex) {
            dot.classList.add("done");
        }

        if (index === currentQuestionIndex) {
            dot.classList.add("active");
        }

        progressDots.appendChild(dot);
    });

    progressText.textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
}

function renderQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    answered = false;
    categoryText.textContent = currentQuestion.category;
    questionText.textContent = currentQuestion.question;
    feedbackText.textContent = "";
    nextButton.disabled = true;
    answersList.innerHTML = "";

    currentQuestion.answers.forEach(function (answer, index) {
        const button = document.createElement("button");
        button.className = "answer";
        button.type = "button";
        button.textContent = answer;
        button.addEventListener("click", function () {
            checkAnswer(index);
        });
        answersList.appendChild(button);
    });

    renderProgress();
}

function checkAnswer(selectedIndex) {
    if (answered) {
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll(".answer");
    const isCorrect = selectedIndex === currentQuestion.correctIndex;

    answered = true;

    answerButtons.forEach(function (button, index) {
        button.disabled = true;

        if (index === currentQuestion.correctIndex) {
            button.classList.add("correct");
        }
    });

    if (isCorrect) {
        score += 1;
        scoreText.textContent = score;
        feedbackText.textContent = `Correto! ${currentQuestion.explanation}`;
    } else {
        answerButtons[selectedIndex].classList.add("wrong");
        feedbackText.textContent = `Errado. ${currentQuestion.explanation}`;
    }

    nextButton.disabled = false;
}

function showFinalScore() {
    quizContent.hidden = true;
    finalPanel.hidden = false;
    finalScore.textContent = `${score}/${questions.length}`;

    if (score === questions.length) {
        finalMessage.textContent = "Perfeito. Você acertou tudo.";
    } else if (score >= 3) {
        finalMessage.textContent = "Boa. Você foi bem no quiz.";
    } else {
        finalMessage.textContent = "Continue praticando e tente de novo.";
    }
}

function nextQuestion() {
    currentQuestionIndex += 1;

    if (currentQuestionIndex >= questions.length) {
        showFinalScore();
    } else {
        renderQuestion();
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreText.textContent = "0";
    quizContent.hidden = false;
    finalPanel.hidden = true;
    renderQuestion();
}

nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);

renderQuestion();
