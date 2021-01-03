'use strict';

const enterName = document.getElementById('Name');
const email = document.getElementById('Email');
const password = document.getElementById('psw');

enterName.addEventListener('change', function (event) {
  const value = event.target.value;
  if (value.length < 5 && value.length > 30) {
    enterName.classList.add('error');
  }
});
