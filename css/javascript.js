function Validation(){

var name = document.registration.name.value;
var surname = document.registration.surname.value;
var email = document.registration.email.value;
var password = document.registration.password.value;
var confirmPassword = document.registration.confirmPassword.value;

var errorMessage = "";
var successMessage = "";

var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;
var specialChars = /[!@#$%^&*(),.?":{}|<>]/g;

if (name.trim() == "") {
        errorMessage += "Name Required.\n"
        document.registration.name.style.background = "LightCoral";
    } else {
        successMessage += name + "\n";
        document.registration.name.style.background = "";
    }

    if (surname.trim() == "") {
        errorMessage += "Surname Required.\n";
        document.registration.surname.style.background = "LightCoral";
    } else {
        successMessage += surname + "\n";
        document.registration.surname.style.background = "";
    }

    aposition = email.indexOf("@");
    dposition = email.indexOf(".");

    if (aposition < 1 || (dposition - aposition < 2)) {
        errorMessage += "Valid Email Required.\n";
        document.registration.email.style.background = "LightCoral";
    } else {
        successMessage += email + "\n";
        document.registration.email.style.background = "";
    }

    if (password == "") {
        errorMessage += "Password Required.\n"
        document.registration.password.style.background = "LightCoral";
    } else if (password.length < 8) {
        errorMessage += "Password required to be a minimum of 8 characters.\n";
        document.registration.password.style.background = "LightCoral";
    } else if (!password.match(lowerCaseLetters)) {
        errorMessage += "Password requires one or more lowercase letters.\n";
        document.registration.password.style.background = "LightCoral";
    } else if (!password.match(upperCaseLetters)) {
        errorMessage += "Password requires one or more uppercase letters.\n";
        document.registration.password.style.background = "LightCoral";
    } else if (!password.match(numbers)) {
        errorMessage += "Password requires one or more numbers.\n";
        document.registration.password.style.background = "LightCoral";
    } else if (!password.match(specialChars)) {
        errorMessage += "Password requires one or more special characters.\n";
        document.registration.password.style.background = "LightCoral";
    } else {
        successMessage += password + "\n";
        document.registration.password.style.background = "";
    }

    if (confirmPassword.trim() == "") {
        errorMessage += "Password Confirmation Required.\n";
        document.registration.confirmPassword.style.background = "LightCoral";
    } else if (password != confirmPassword) {
        errorMessage += "Passwords do not match!\n";
        document.registration.confirmPassword.style.background = "LightCoral";
    } else {
        document.registration.confirmPassword.style.background = "";
    }

    if (errorMessage != "") {
        alert(errorMessage)
    } else {
        alert(successMessage)
    }
}
