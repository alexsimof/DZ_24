
let rateIn = document.getElementById('input-rate');
let sumIn = document.getElementById('input-sum');
let result = document.getElementById('result');
let btn = document.getElementById('btn');

function createCurrencyConverter(rate) {

  let number = rate;

  function toLocalCurrency(summ) {
    sumIn.value = summ
    return number = number*summ
  }
  
  return {
    toLocalCurrency: toLocalCurrency,
  }
}

btn.onclick = function () {
  let converter = createCurrencyConverter(rateIn.value);
  let res = converter.toLocalCurrency(sumIn.value);
  result.innerText = ` = ${Math.trunc(res)}`;
}

/*  */

const RATE = {usd: 0.9, eur: 1.09,}
let inputSum = document.getElementById('inputSum');
let selectCurrency = document.getElementById('selectCurrency');
let result1 = document.getElementById('result1');
let button = document.getElementById('button');

function renderCurrency(summ, currency) {
  currency = selectCurrency.value
  summ = Number(inputSum.value)
  return summ*RATE[currency]
}

button.onclick = function () {
  let converter = renderCurrency();
  result1.innerText = ` = ${Math.trunc(converter)} ${selectCurrency.value}`;
}

/* Еще вариант */

const RATES = {usd: 0.9, eur: 1.09,}
let summa = document.getElementById('summa');
let selector = document.getElementById('selector')
let output = document.getElementById('out')

function converter(sum, currency) {
  return sum*RATES[currency]
}
summa.addEventListener('input', function() {
  let sum = Number(summa.value)
  let currency = selector.value
  let out = converter(sum, currency)
  output.innerText = out
});
summa.addEventListener('change', function() {
  let sum = Number(summa.value)
  let currency = selector.value
  let out = converter(sum, currency)
  output.innerText = out
});

// task second

function createInvestmentAccount(initialAmount, annualInterestRate) {
  let cash = initialAmount
  let rate = annualInterestRate
  let myDeposit = cash


  function deposit(amount) {
    return amount = myDeposit + amount
  }

  function withdraw(amount) {
    return amount = myDeposit - amount
  }

  function calculateProfit(years = 1) {
    // return profit = (cash/100*rate + cash)*years
    return profit = cash * Math.pow((1 + rate / 100), years)
  }

  function getAccountInfo() {
    console.log(myDeposit)
    console.log(rate)
    console.log(calculateProfit())
  }

  return {
    deposit: deposit,
    withdraw: withdraw,
    calculateProfit: calculateProfit,
    getAccountInfo: getAccountInfo,
  }
}
let myAccount = createInvestmentAccount(1500, 3.5);
// console.log(myAccount.deposit(500))
myAccount.getAccountInfo()
// console.log(myAccount.calculateProfit(1))