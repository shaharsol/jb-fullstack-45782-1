const getPriceWithVAT = price => {
    if (isNaN(price)) throw new Error('price must be a number')
    return price * 1.18
}

const price = +prompt('enter price')

try {
    alert(`price with vat is ${getPriceWithVAT(price)}`)
} catch (err) {
    console.log(`there was an error: ${err.message}`)
}
