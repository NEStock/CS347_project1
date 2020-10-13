const submitButton = document.getElementById('submit');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const afterSubmitMessage = document.getElementById('after-submit-message');
const arrow = document.getElementById('arrow');
const notice = document.getElementById('notice');
const closeButton = document.getElementById('close-button');

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
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    submitButton.classList.remove('clicked');
    submitButton.innerHTML = "SUBMIT";
    afterSubmitMessage.classList.add('submitted');
    arrow.classList.add('submitted');
    bounceArrow();
}

function respondToSubmitError() {
    submitButton.classList.remove('clicked');
}

closeButton.addEventListener('click', () => {
    notice.style.display = 'none';
});

submitButton.addEventListener('click', () => {
    notice.style.display = 'none';
    afterSubmitMessage.classList.remove('submitted');
    arrow.classList.remove('submitted');

    submitButton.classList.add('clicked');
    if (firstNameInput.value == "" || lastNameInput.value == "" || emailInput.value == "") {
        notice.style.display = 'flex';
        delay(300).then( () => respondToSubmitError());
    } else {
        submitButton.innerHTML = "WELCOME!";
        delay(500).then( () => respondToSubmit());
    }
});