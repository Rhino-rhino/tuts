'use strict';

let amount = 0;
let tip = 0;

const amountInput = document.querySelector('.amt');
const buttons = document.querySelectorAll('.tips > button');
const btnPlus = document.querySelector('.plus');
const btnMinus = document.querySelector('.minus');
const splitNum = document.querySelector('.split-num');
const total = document.querySelector('.total');
const bill = document.querySelector('.bill');
const tipElement = document.querySelector('.tip');
let splitValue = Number(splitNum.textContent);

const setTotal = function () {
  total.textContent = ((amount + tip) / splitValue).toFixed(2);
  bill.textContent = (amount / splitValue).toFixed(2);
  tipElement.textContent = (tip / splitValue).toFixed(2);
};

amountInput.addEventListener('change', function (event) {
  if (isNaN(event.target.value)) {
    amountInput.value = '';
  } else {
    amount = Number(event.target.value);
  }
});

buttons.forEach((button) => {
  button.addEventListener('click', function (event) {
    if (!button.textContent.includes('Custom')) {
      let val = Number(button.textContent.split('%')[0]);
      tip = (val / 100) * amount;
      setTotal();
    }
  });
});

btnPlus.addEventListener('click', function () {
  splitValue++;
  splitNum.textContent = splitValue;
  setTotal();
});

btnMinus.addEventListener('click', function () {
  if (splitValue > 1) {
    splitValue--;
    splitNum.textContent = splitValue;
    setTotal();
  }
});
