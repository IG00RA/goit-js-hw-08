import throttle from 'lodash.throttle';

const refs = {
  input: document.querySelector('input[type=email]'),
  textarea: document.querySelector('textarea[name=message]'),
  form: document.querySelector('.feedback-form'),
  button: document.querySelector('button[type=submit]'),
};

const userParceData = JSON.parse(localStorage.getItem('feedback-form-state'));

fillInputs();

let userData;

if (localStorage.getItem('feedback-form-state')) {
  userData = { ...userParceData };
} else {
  userData = {};
}
const onInputText = event => {
  userData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
  console.log(userData);
};

const onSubmitAction = event => {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
};

function fillInputs() {
  if (userParceData) {
    refs.input.value = userParceData.email;
    refs.textarea.value = userParceData.message;
  }
}

refs.form.addEventListener('input', throttle(onInputText, 500));
refs.form.addEventListener('submit', onSubmitAction);
