const formElement = document.getElementById('form');
const cvcElement = document.getElementById('cvc');
const cardCvcElement = document.getElementById('card-cvc');

const cardNumberElement = document.getElementById('card-number');
const numberElement = document.getElementById('number');


formElement.addEventListener('keyup', () => {
    if (cvcElement.value !== '') {
        cardCvcElement.textContent = cvcElement.value
    } else {
        cardCvcElement.textContent = '000'
    }
    if (numberElement.value !== '') {
        cardNumberElement.textContent = numberElement.value
    } else {
        cardNumberElement.textContent = '0000 0000 0000 0000'
    }
})