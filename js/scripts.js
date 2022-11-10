const formElement = document.getElementById('form');
const cardNameElement = document.getElementById('card-name');
const nameElement = document.getElementById('name');
const cardNumberElement = document.getElementById('card-number');
const numberElement = document.getElementById('number');
const cardExpElement = document.getElementById('card-exp');
const expElement = document.getElementById('exp');
const cardCvcElement = document.getElementById('card-cvc');
const cvcElement = document.getElementById('cvc');

formElement.addEventListener('keyup', () => {
    if (nameElement.value !== '') {
        cardNameElement.textContent = nameElement.value
    } else {
        cardNameElement.textContent = 'JANE APPLESEED'
    }
    if (numberElement.value !== '') {
        cardNumberElement.textContent = numberElement.value
    } else {
        cardNumberElement.textContent = '0000 0000 0000 0000'
    }
    if (expElement.value !== '') {
        cardExpElement.textContent = expElement.value
    } else {
        cardExpElement.textContent = "00/00"
    }
    if (cvcElement.value !== '') {
        cardCvcElement.textContent = cvcElement.value
    } else {
        cardCvcElement.textContent = '000'
    }
})