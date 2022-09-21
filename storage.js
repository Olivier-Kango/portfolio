const formStorage = document.getElementById('form');
const nameStorage = document.getElementById('name');
const emailStorage = document.getElementById('email');
const messageStorage = document.getElementById('message');

const intoLocalStorage = (nameStorage, emailStorage, messageStorage) => {
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

const getJson = localStorage.getItem('a');
const parseJson = JSON.parse(getJson);
Object.keys(parseJson).forEach((key) => {
  setInputValues(formStorage.elements[key].name, parseJson[key]);
});

formStorage.addEventListener('input', () => {
  intoLocalStorage(nameStorage, emailStorage, messageStorage);
});
