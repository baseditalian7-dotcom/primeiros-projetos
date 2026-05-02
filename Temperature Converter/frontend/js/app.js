const temperatureInput = document.querySelector("#temperatureInput");
const conversionTabs = document.querySelectorAll(".tab");
const swapButton = document.querySelector("#swapButton");
const formulaText = document.querySelector("#formulaText");
const resultValue = document.querySelector("#resultValue");
const resultMessage = document.querySelector("#resultMessage");
const inputUnit = document.querySelector("#inputUnit");
const historyList = document.querySelector("#historyList");
const emptyHistory = document.querySelector("#emptyHistory");
const clearHistoryButton = document.querySelector("#clearHistoryButton");

const historyKey = "temperature_converter_history";
let currentConversion = "celsiusToFahrenheit";

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function formatNumber(value) {
    return Number(value.toFixed(2));
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

function addToHistory(item) {
    const history = getHistory();

    history.unshift(item);
    saveHistory(history.slice(0, 5));
    renderHistory();
}

function convertTemperature() {
    const rawValue = temperatureInput.value;

    if (rawValue === "") {
        resultValue.textContent = "--";
        resultMessage.textContent = "Digite uma temperatura para converter.";
        updateFormula();
        return;
    }

    const value = Number(rawValue);
    const isCelsiusToFahrenheit = currentConversion === "celsiusToFahrenheit";
    const result = isCelsiusToFahrenheit ? celsiusToFahrenheit(value) : fahrenheitToCelsius(value);
    const fromUnit = isCelsiusToFahrenheit ? "°C" : "°F";
    const toUnit = isCelsiusToFahrenheit ? "°F" : "°C";
    const formattedResult = formatNumber(result);

    resultValue.textContent = `${formattedResult}${toUnit}`;
    resultMessage.textContent = `${value}${fromUnit} equivalem a ${formattedResult}${toUnit}.`;
    updateFormula();

    return {
        from: `${value}${fromUnit}`,
        to: `${formattedResult}${toUnit}`,
        type: isCelsiusToFahrenheit ? "Celsius para Fahrenheit" : "Fahrenheit para Celsius"
    };
}

function updateFormula() {
    if (currentConversion === "celsiusToFahrenheit") {
        formulaText.textContent = "°F = (°C × 9/5) + 32";
        inputUnit.textContent = "°C";
        return;
    }

    formulaText.textContent = "°C = (°F - 32) × 5/9";
    inputUnit.textContent = "°F";
}

function updateTabs() {
    conversionTabs.forEach(function (tab) {
        const isActive = tab.dataset.conversion === currentConversion;
        tab.classList.toggle("active", isActive);
    });
}

function renderHistory() {
    const history = getHistory();

    historyList.innerHTML = "";
    emptyHistory.style.display = history.length === 0 ? "block" : "none";

    history.forEach(function (item) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${item.type}</span>
            <strong>${item.from} → ${item.to}</strong>
        `;
        historyList.appendChild(listItem);
    });
}

function swapConversion() {
    if (currentConversion === "celsiusToFahrenheit") {
        currentConversion = "fahrenheitToCelsius";
    } else {
        currentConversion = "celsiusToFahrenheit";
    }

    updateTabs();
    convertTemperature();
}

temperatureInput.addEventListener("input", convertTemperature);

conversionTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
        currentConversion = tab.dataset.conversion;
        updateTabs();
        convertTemperature();
    });
});

temperatureInput.addEventListener("change", function () {
    const conversion = convertTemperature();

    if (conversion) {
        addToHistory(conversion);
    }
});

swapButton.addEventListener("click", swapConversion);

clearHistoryButton.addEventListener("click", function () {
    saveHistory([]);
    renderHistory();
});

updateFormula();
updateTabs();
renderHistory();
