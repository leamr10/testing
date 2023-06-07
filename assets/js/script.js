var firstNameEl = document.querySelector("#first-name");
var lastNameEl = document.querySelector("#last-name");
var emailEl = document.querySelector("#email");
var passwordEl = document.querySelector("#password");
var form = document.getElementById("form");

function handleFormSubmit(event) {
    event.preventDefault();

    var firstName = firstNameEl.value;
    console.log("firstName: " + firstName);
    var lastName = lastNameEl.value;
    console.log("lastName: " + lastName);
    var email = emailEl.value;
    console.log("email: " + email);
    var password = passwordEl.value;
    console.log("password: " + password);

}

form.addEventListener("submit", handleFormSubmit)

