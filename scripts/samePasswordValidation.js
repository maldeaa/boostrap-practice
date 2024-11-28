document.addEventListener("DOMContentLoaded", function () {
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("password_confirmation");
    const registerForm = document.getElementById("registerForm");
    const confirmError = document.getElementById("confirmError");

    confirmPasswordField.addEventListener("input", function () {
        checkPasswordsMatch();
    });

    passwordField.addEventListener("input", function () {
        checkPasswordsMatch();
    });

    // Проверка паролей
    function checkPasswordsMatch() {
        const password = passwordField.value;
        const confirmPassword = confirmPasswordField.value;

        if (password === confirmPassword) {
            confirmError.textContent = "";
            confirmPasswordField.classList.remove("is-invalid");
            confirmPasswordField.classList.add("is-valid");
        } else {
            confirmError.textContent = "Пароли не совпадают.";
            confirmPasswordField.classList.remove("is-valid");
            confirmPasswordField.classList.add("is-invalid");
        }
    }

    registerForm.addEventListener("submit", function (e) {
        checkPasswordsMatch();
        if (confirmPasswordField.classList.contains("is-invalid")) {
            e.preventDefault();
        }
    });
});