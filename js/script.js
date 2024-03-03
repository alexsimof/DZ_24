
let rateIn = document.getElementById('input-rate')
let sumIn = document.getElementById('input-sum')
let result = document.getElementById('result')
let btn = document.getElementById('btn')

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
  let converter = createCurrencyConverter(rateIn.value)
  let res = converter.toLocalCurrency(sumIn.value)
  result.innerText = ` = ${Math.trunc(res)}`

}
