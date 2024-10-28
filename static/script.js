const fname = document.getElementById("first-name");
const lname = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

function validateForm() {
    if (fname.value === "") {
        fname.parentElement.classList.add("invalid-input");
    }
    if (lname.value === "") {
        lname.parentElement.classList.add("invalid-input");
    }
    const emailPattern = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(email.value)) {
        email.parentElement.classList.add("invalid-input");
    }
    if (password.value === "") {
        password.parentElement.classList.add("invalid-input");
    }

    if (document.querySelector(".invalid-input") === null) {
        document.querySelectorAll("input").forEach((f) => (f.value = ""));
        alert("All set.");
    }
}

document.getElementById("user-form").addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
});

document.querySelectorAll("input").forEach((inputField) => {
    inputField.addEventListener("input", () => {
        inputField.parentElement.classList.remove("invalid-input");
    });
});
