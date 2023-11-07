import throttle from 'lodash.throttle';

interface Refs {
  input: HTMLInputElement | null;
  textarea: HTMLTextAreaElement | null;
  form: HTMLFormElement | null;
  button: HTMLButtonElement | null;
}

interface User {
  email?: string;
  message?: string;
}

const refs: Refs = {
  input: document.querySelector('input[type=email]'),
  textarea: document.querySelector('textarea[name=message]'),
  form: document.querySelector('.feedback-form'),
  button: document.querySelector('button[type=submit]'),
};

let userData: User = {};

const onSubmitAction = (event: Event): void => {
  const form = event.currentTarget;
  if (form instanceof HTMLFormElement) {
    event.preventDefault();
    form.reset();
    localStorage.removeItem('feedback-form-state');
    userData = {};
  }
};
const userStorageData = localStorage.getItem('feedback-form-state');
if (userStorageData) {
  const userParceData: User = JSON.parse(userStorageData);
  userData = { ...userParceData };
} else {
  userData = {};
}

const onInputText = (event: Event): void => {
  const input = event.target;
  if (
    input instanceof HTMLInputElement ||
    input instanceof HTMLTextAreaElement
  ) {
    userData[input.name] = input.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
  console.log(userData);
};

function fillInputs() {
  if (userData.email && refs.input) {
    refs.input.value = userData.email;
  }
  if (userData.message && refs.textarea) {
    refs.textarea.value = userData.message;
  }
}

if (refs.form) {
  refs.form.addEventListener('input', throttle(onInputText, 500));
  refs.form.addEventListener('submit', onSubmitAction);
}

fillInputs();
