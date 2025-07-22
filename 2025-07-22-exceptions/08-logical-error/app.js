const getMax = (a, b) => a > b ? b : a

const a = +prompt('enter a number')
const b = +prompt('enter another number')

console.log(`the bigger number is ${getMax(a, b)}`)