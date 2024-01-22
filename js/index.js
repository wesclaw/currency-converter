const firstInput = document.getElementById('first-input')
const country_select_first = document.getElementById('country-select-first')
const secondInput = document.getElementById('second-input')
const country_select_second = document.getElementById('country-select-second')
const arrowBtn = document.querySelector('.arrow-btn')

function displayCurrency(){
  fetch(`https://v6.exchangerate-api.com/v6/ca34e3167596feec8cde346e/latest/${country_select_first.value}`).then((res)=>res.json()).then((data)=>{
   const rate = data.conversion_rates[country_select_second.value]
   secondInput.value = firstInput.value * rate
  })
}

function reverseCurrency(){
  const tempInputValue = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = tempInputValue;

  const tempCountryValue = country_select_first.value;
  country_select_first.value = country_select_second.value;
  country_select_second.value = tempCountryValue

  displayCurrency();
}

arrowBtn.addEventListener('click', reverseCurrency)
firstInput.addEventListener('input', displayCurrency)
country_select_first.addEventListener('change', displayCurrency)
country_select_second.addEventListener('click', displayCurrency)

