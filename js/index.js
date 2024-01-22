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
 
}



amountInput.addEventListener('keyup', displayCurrency)
countrySelectFrom.addEventListener('change', displayCurrency)

