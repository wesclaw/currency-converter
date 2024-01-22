// input from 
const amountInput = document.getElementById('amount-input')
// input to
const convertedToInput = document.getElementById('converted-to-input')

// choose a currency country 
const countrySelectFrom = document.getElementById('country-select')
const countrySelectTo = document.getElementById('country-select-from')

// arrows button
const arrowBtn = document.querySelector('.arrow-btn')


function displayCurrency(){
  const getInputAmountValue = amountInput.value
  const getCountryAmountValue = countrySelectFrom.value

  const getConvertedFromInputValue = convertedToInput.value;
  const getCountryConvertedToValue = countrySelectTo.value

  console.log(getInputAmountValue)

  fetch(`https://v6.exchangerate-api.com/v6/ca34e3167596feec8cde346e/latest/${getCountryAmountValue}`).then((res)=>res.json()).then((data)=>{
    const rate = data.conversion_rates
  })

}



amountInput.addEventListener('keyup', displayCurrency)
countrySelectFrom.addEventListener('change', displayCurrency)

