const loginForm = document.querySelector("#loginForm");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const rememberEmailInput = document.querySelector("#rememberEmail");
const togglePasswordButton = document.querySelector("#togglePassword");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const formMessage = document.querySelector("#formMessage");
const loggedBox = document.querySelector("#loggedBox");
const loggedUser = document.querySelector("#loggedUser");
const logoutButton = document.querySelector("#logoutButton");

const sessionKey = "fake_login_session";
const rememberedEmailKey = "fake_login_email";

function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}

function setFieldError(input, errorElement, message) {
    input.classList.add("error");
    errorElement.textContent = message;
}

function clearFieldError(input, errorElement) {
    input.classList.remove("error");
    errorElement.textContent = "";
}

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
}

function validateForm(email, password) {
    let isValid = true;

    clearFieldError(emailInput, emailError);
    clearFieldError(passwordInput, passwordError);

    if (email === "") {
        setFieldError(emailInput, emailError, "Digite seu e-mail.");
        isValid = false;
    } else if (!isValidEmail(email)) {
        setFieldError(emailInput, emailError, "Digite um e-mail válido.");
        isValid = false;
    }

    if (password === "") {
        setFieldError(passwordInput, passwordError, "Digite sua senha.");
        isValid = false;
    } else if (password.length < 6) {
        setFieldError(passwordInput, passwordError, "A senha precisa ter no mínimo 6 caracteres.");
        isValid = false;
    }

    return isValid;
}

function saveSession(userName) {
    localStorage.setItem(sessionKey, JSON.stringify({
        name: userName,
        loggedAt: new Date().toISOString()
    }));
}

function loadSession() {
    const savedSession = localStorage.getItem(sessionKey);

    if (!savedSession) {
        return null;
    }

    return JSON.parse(savedSession);
}

function updateLoggedArea() {
    const session = loadSession();

    if (session) {
        loggedUser.textContent = `Olá, ${session.name}!`;
        loggedBox.hidden = false;
        return;
    }

    loggedBox.hidden = true;
}

function loadRememberedEmail() {
    const savedEmail = localStorage.getItem(rememberedEmailKey);

    if (savedEmail) {
        emailInput.value = savedEmail;
        rememberEmailInput.checked = true;
    }
}

togglePasswordButton.addEventListener("click", function () {
    const isPasswordVisible = passwordInput.type === "text";

    passwordInput.type = isPasswordVisible ? "password" : "text";
    togglePasswordButton.textContent = isPasswordVisible ? "Mostrar" : "Esconder";
});

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!validateForm(email, password)) {
        showMessage("Corrija os campos destacados.", "error");
        return;
    }

    if (email !== fakeUser.email || password !== fakeUser.password) {
        showMessage("E-mail ou senha incorretos.", "error");
        return;
    }

    if (rememberEmailInput.checked) {
        localStorage.setItem(rememberedEmailKey, email);
    } else {
        localStorage.removeItem(rememberedEmailKey);
    }

    saveSession(fakeUser.name);
    updateLoggedArea();
    showMessage("Login fake realizado com sucesso.", "success");
    passwordInput.value = "";
});

logoutButton.addEventListener("click", function () {
    localStorage.removeItem(sessionKey);
    updateLoggedArea();
    showMessage("Você saiu da sessão fake.", "success");
});

emailInput.addEventListener("input", function () {
    clearFieldError(emailInput, emailError);
});

passwordInput.addEventListener("input", function () {
    clearFieldError(passwordInput, passwordError);
});

loadRememberedEmail();
updateLoggedArea();
