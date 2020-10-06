const submitButton = document.getElementById('submit');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');

submitButton.addEventListener('click', () => {
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    //TODO display animation ??
    // display "We're so excited to have you in WIT" or something of the like
});