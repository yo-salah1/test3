document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const inputs = {
        firstName: document.getElementById("fname"),
        lastName: document.getElementById("lname"),
        email: document.getElementById("email"),
        password: document.getElementById("password"),
        rePassword: document.getElementById("re-password"),
        phoneNumber: document.getElementById("phone-number")
    };
    form.addEventListener("submit", function (event) {
        let valid = true;
        valid = valid && validateName(inputs.firstName.value, "First name");
        valid = valid && validateName(inputs.lastName.value, "Last name");
        valid = valid && validatePassword(inputs.password.value, inputs.rePassword.value);
        if (!valid) {
            event.preventDefault();
        }
    });
    function validateName(name, fieldName) {
        const re = /^[A-Za-z]+$/;
        if (!re.test(name)) {
            alert(`${fieldName} should not contain numbers or special characters.`);
            return false;
        }
        return true;
    }
    function validatePassword(password, rePassword) {
        if (password !== rePassword) {
            alert("Passwords do not match.");
            return false;
        }
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (password.length < minLength || !hasUpperCase || !hasSpecialChar) {
            alert("Password must be at least 8 characters long, contain at least one uppercase letter, and one special character.");
            return false;
        }
        return true;
    }
});
