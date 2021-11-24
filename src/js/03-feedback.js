import { throttle } from 'lodash';
const feedbackFormEL = document.querySelector('.feedback-form');

const emailEL = document.querySelector('[name="email"]');
const messageEL = document.querySelector('[name="message"]');

feedbackFormEL.addEventListener('input', throttle(valueForm, 500));

feedbackFormEL.addEventListener('submit', clearForm);

window.addEventListener('DOMContentLoaded', updatePage);

function valueForm() {
    const formData = new FormData(feedbackFormEL);

    const obj = {};

    formData.forEach((value, key) => {
        obj[key] = value;
    });

    localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}

function clearForm(event) {
    event.preventDefault();
    emailEL.value = '';
    messageEL.value = '';

    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.clear();
}

function updatePage() {
    const getData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (getData) {
        emailEL.value = getData.email;
        messageEL.value = getData.message;
    }
}