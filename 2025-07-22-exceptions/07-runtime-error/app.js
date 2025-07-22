const numOfDigits = +prompt('how many digits after the . you want to see?')
const pi = Math.PI

// this is a compilation error:
console.log(pi.toFixed(101))

// a runtime error could not have been detected by a compiler
console.log(pi.toFixed(numOfDigits))
console.log('finished')