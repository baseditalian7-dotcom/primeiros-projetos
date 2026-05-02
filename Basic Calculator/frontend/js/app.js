const form = document.querySelector("#calculatorForm");
const clearButton = document.querySelector("#clearButton");
const resultElement = document.querySelector("#result");
const messageElement = document.querySelector("#message");

function getFormValues() {
    const firstNumber = Number(document.querySelector("#firstNumber").value);
    const secondNumber = Number(document.querySelector("#secondNumber").value);
    const operation = document.querySelector("#operation").value;

    return {
        firstNumber,
        secondNumber,
        operation
    };
}

function calculate(firstNumber, secondNumber, operation) {
    if (operation === "add") {
        return firstNumber + secondNumber;
    }

    if (operation === "subtract") {
        return firstNumber - secondNumber;
    }

    if (operation === "multiply") {
        return firstNumber * secondNumber;
    }

    if (operation === "divide") {
        if (secondNumber === 0) {
            return "Erro";
        }

        return firstNumber / secondNumber;
    }

    return 0;
}

function showResult(value, message) {
    resultElement.textContent = value;
    messageElement.textContent = message;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const values = getFormValues();
    const result = calculate(values.firstNumber, values.secondNumber, values.operation);

    if (result === "Erro") {
        showResult("Erro", "Nao e possivel dividir por zero.");
        return;
    }

    showResult(result, "Resultado calculado no JavaScript.");
});

clearButton.addEventListener("click", function () {
    form.reset();
    showResult(0, "Digite dois numeros e escolha a operacao.");
});
