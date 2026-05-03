const passwordOutput = document.querySelector("#passwordOutput");
const lengthInput = document.querySelector("#lengthInput");
const lengthValue = document.querySelector("#lengthValue");
const uppercaseOption = document.querySelector("#uppercaseOption");
const lowercaseOption = document.querySelector("#lowercaseOption");
const numbersOption = document.querySelector("#numbersOption");
const symbolsOption = document.querySelector("#symbolsOption");
const generateButton = document.querySelector("#generateButton");
const copyButton = document.querySelector("#copyButton");
const strengthText = document.querySelector("#strengthText");
const strengthBar = document.querySelector("#strengthBar");
const messageText = document.querySelector("#messageText");

const characterGroups = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%&*?"
};

let currentPassword = "";

function getSelectedCharacters() {
    let characters = "";

    if (uppercaseOption.checked) {
        characters += characterGroups.uppercase;
    }

    if (lowercaseOption.checked) {
        characters += characterGroups.lowercase;
    }

    if (numbersOption.checked) {
        characters += characterGroups.numbers;
    }

    if (symbolsOption.checked) {
        characters += characterGroups.symbols;
    }

    return characters;
}

function generatePassword() {
    const characters = getSelectedCharacters();
    const size = Number(lengthInput.value);
    let password = "";

    if (characters === "") {
        messageText.textContent = "Escolha pelo menos uma opção.";
        return;
    }

    for (let i = 0; i < size; i += 1) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    currentPassword = password;
    passwordOutput.textContent = password;
    messageText.textContent = "Senha gerada com sucesso.";
    updateStrength();
}

function calculateStrength() {
    let score = 0;

    if (Number(lengthInput.value) >= 8) {
        score += 1;
    }

    if (Number(lengthInput.value) >= 14) {
        score += 1;
    }

    if (uppercaseOption.checked && lowercaseOption.checked) {
        score += 1;
    }

    if (numbersOption.checked) {
        score += 1;
    }

    if (symbolsOption.checked) {
        score += 1;
    }

    return score;
}

function updateStrength() {
    const score = calculateStrength();
    const labels = ["Muito fraca", "Fraca", "Ok", "Boa", "Forte", "Muito forte"];

    strengthText.textContent = labels[score];
    strengthBar.style.width = `${score * 20}%`;
}

async function copyPassword() {
    if (currentPassword === "") {
        messageText.textContent = "Gere uma senha antes de copiar.";
        return;
    }

    await navigator.clipboard.writeText(currentPassword);
    messageText.textContent = "Senha copiada.";
}

lengthInput.addEventListener("input", function () {
    lengthValue.textContent = lengthInput.value;
    updateStrength();
});

[uppercaseOption, lowercaseOption, numbersOption, symbolsOption].forEach(function (option) {
    option.addEventListener("change", updateStrength);
});

generateButton.addEventListener("click", generatePassword);
copyButton.addEventListener("click", copyPassword);

updateStrength();
