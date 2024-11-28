document.addEventListener("DOMContentLoaded", function () {
    const passwordField = document.getElementById("password");
    const hints = {
        length: document.getElementById("length"),
        number: document.getElementById("number"),
        uppercase: document.getElementById("uppercase"),
        lowercase: document.getElementById("lowercase"),
        latinOnly: document.getElementById("latinOnly"),
    };

    passwordField.addEventListener("input", function () {
        const value = passwordField.value;

        if (value.length >= 7) {
            hints.length.classList.remove("text-danger");
            hints.length.classList.add("text-success");
        } else {
            hints.length.classList.add("text-danger");
            hints.length.classList.remove("text-success");
        }

        if (/\d/.test(value)) {
            hints.number.classList.remove("text-danger");
            hints.number.classList.add("text-success");
        } else {
            hints.number.classList.add("text-danger");
            hints.number.classList.remove("text-success");
        }

        if (/[A-Z]/.test(value)) {
            hints.uppercase.classList.remove("text-danger");
            hints.uppercase.classList.add("text-success");
        } else {
            hints.uppercase.classList.add("text-danger");
            hints.uppercase.classList.remove("text-success");
        }

        if (/[a-z]/.test(value)) {
            hints.lowercase.classList.remove("text-danger");
            hints.lowercase.classList.add("text-success");
        } else {
            hints.lowercase.classList.add("text-danger");
            hints.lowercase.classList.remove("text-success");
        }

        if (/^[A-Za-z0-9]*$/.test(value)) {
            hints.latinOnly.classList.remove("text-danger");
            hints.latinOnly.classList.add("text-success");
        } else {
            hints.latinOnly.classList.add("text-danger");
            hints.latinOnly.classList.remove("text-success");
        }
    });
});