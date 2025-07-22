const getPriceIncludingVat = (price) => price * 1.17

const price = +prompt('enter a price')

console.log(`the price including VAT is ${getPriceIncludingVat(price)}`)