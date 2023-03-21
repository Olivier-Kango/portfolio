const formStorage = document.getElementById('form');
const nameStorage = document.getElementById('name');
const emailStorage = document.getElementById('email');
const messageStorage = document.getElementById('message');

const intoLocalStorage = () => {
  const formObject = {
    name: nameStorage.value,
    email: emailStorage.value,
    message: messageStorage.value,
  };

  const intoString = JSON.stringify(formObject);

  localStorage.setItem('a', intoString);
};

const setInputValues = (id, value) => {
  const selectInput = document.getElementById(id);
  selectInput.value = value;
};

document.addEventListener('DOMContentLoaded', () => {
  const getJson = localStorage.getItem('a');
  if (getJson) {
    const parseJson = JSON.parse(getJson);
    Object.keys(parseJson).forEach((key) => {
      setInputValues(key, parseJson[key]);
    });
  }

  formStorage.addEventListener('input', intoLocalStorage);
});
