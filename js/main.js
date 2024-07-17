const signupPage = document.querySelector(".sign-up-page");
const messageSuccessPage = document.querySelector(".success-message");
const subscribeBtn = signupPage.querySelector(".btn__subscripe");
const dismissMessageBtn = messageSuccessPage.querySelector(".success-message__btn--dismiss");
const form = document.getElementById("form");
const email = document.getElementById("email");
const labelEmail = form.querySelector(".label__email");
const labelError = form.querySelector(".label__error");

dismissMessageBtn.addEventListener('click', () => {
    signupPage.classList.toggle('sign-up-page--active');
    messageSuccessPage.classList.toggle('success-message--active');
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(validateEmail(email.value)) {
        console.log("email is " + email.value);
        signupPage.classList.toggle('sign-up-page--active');
        messageSuccessPage.classList.toggle('success-message--active');
        email.classList.remove('email--error');
        labelEmail.classList.remove('label__email--error');
        labelError.classList.remove('label__error--active');
    } else {
        console.log("email is not valid");
        email.classList.add('email--error');
        labelEmail.classList.add('label__email--error');
        labelError.classList.add('label__error--active');
    }
});

const validateEmail = (email) => {
    return email.match(/[0-9a-z$*^]{1,64}@[0-9a-z]{1,256}\.[a-z]{2,3}/);
}
