
let rateIn = document.getElementById('input-rate');
let sumIn = document.getElementById('input-sum');
let result = document.getElementById('result');
let btn = document.getElementById('btn');

function createCurrencyConverter(rate) {

  let number = rate

  function toLocalCurrency(summ) {
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
    return profit = (cash/100*rate + cash)*years
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
// myAccount.getAccountInfo()
console.log(myAccount.calculateProfit(1))