/* eslint-disable linebreak-style */
const form = document.getElementById('form');
const fname = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const errorName = document.getElementById('errorName');
const errorEmail = document.getElementById('errorEmail');
const errorMsg = document.getElementById('errorMsg');
const overralError = document.getElementById('overralError');

const emailRegex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

fname.addEventListener('input', () => {
  if (fname.value.length !== 0 && fname.value.length < 3) {
    errorName.textContent = 'Your name should have more than 2 characters.';
    document.getElementById('field-name').setAttribute('class', 'error');
  } else if (fname.value.length !== 0 && fname.value.length < 20) {
    errorName.textContent = '';
    document.getElementById('field-name').setAttribute('class', 'success');
  } else {
    errorName.textContent = 'Your name should be less than 30 characters.';
    document.getElementById('field-name').setAttribute('class', 'error');
  }
});

email.addEventListener('input', () => {
  if (email.value === email.value.toLowerCase()) {
    errorEmail.textContent = '';
    document.getElementById('field-email').setAttribute('class', 'success');
  } else {
    errorEmail.textContent = 'Email Address should not have uppercase letters.';
    document.getElementById('field-email').setAttribute('class', 'error');
  }

  if (!emailRegex.test(email.value)) {
    errorEmail.textContent = 'Invalid Email Address';
    document.getElementById('field-email').setAttribute('class', 'error');
  }
});

message.addEventListener('input', () => {
  if (message.value.length < 10) {
    errorMsg.textContent = 'Message should have more 10 characters.';
    document.getElementById('field-text').setAttribute('class', 'error');
  } else {
    errorMsg.textContent = '';
    document.getElementById('field-text').setAttribute('class', 'success');
  }

  if (message.value.length > 400) {
    errorMsg.textContent = 'Message should not exceed 400 characters.';
    document.getElementById('field-text').setAttribute('class', 'error');
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate form fields
  const isValid = fname.value.length > 3
    && fname.value.length < 30
    && message.value.length > 10
    && message.value.length < 400
    && emailRegex.test(email.value)
    && email.value === email.value.toLowerCase();

  // Submit form if valid
  if (isValid) {
    new Promise((resolve) => {
      form.submit();
      resolve();
    }).then(() => {
      form.reset();
      localStorage.clear();
    });
    overralError.textContent = '';
    document.getElementById('field-overal').setAttribute('class', '');
  } else {
    overralError.textContent = 'Please fill in entire form correctly before submitting.';
    document.getElementById('field-overal').setAttribute('class', 'error');
  }
});
