const submitButton = document.getElementById('submit');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const afterSubmitMessage = document.getElementById('after-submit-message');
const arrow = document.getElementById('arrow');

function delay(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

function bounceArrow() {
    arrow.classList.add('bounce-right');
    window.setInterval(bounceRight, 500);
}

function bounceRight() {
    arrow.classList.toggle('bounce-right');
}

function respondToSubmit() {
    submitButton.classList.remove('clicked');
    submitButton.innerHTML = "SUBMIT";
    afterSubmitMessage.classList.add('submitted');
    arrow.classList.add('submitted');
    bounceArrow();
}

submitButton.addEventListener('click', () => {
    submitButton.classList.add('clicked');
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";

    submitButton.innerHTML = "WELCOME!";
    delay(500).then( () => respondToSubmit());
});