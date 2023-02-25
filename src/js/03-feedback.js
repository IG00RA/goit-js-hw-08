import throttle from 'lodash.throttle';

const refs = {
  input: document.querySelector('input[type=email]'),
  textarea: document.querySelector('textarea[name=message]'),
  form: document.querySelector('.feedback-form'),
  button: document.querySelector('button[type=submit]'),
};
fillInputs();

const userData = {};

const onInputText = event => {
  userData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
};

const onSubmitAction = event => {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(userData);
};

function fillInputs() {
  const userSaveData = localStorage.getItem('feedback-form-state');
  if (userSaveData) {
    const userParceData = JSON.parse(userSaveData);
    refs.input.value = userParceData.email;
    refs.textarea.value = userParceData.message;
  }
}

refs.form.addEventListener('input', throttle(onInputText, 500));
refs.form.addEventListener('submit', onSubmitAction);
