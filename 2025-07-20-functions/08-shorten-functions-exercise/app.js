function sayHello() {
    console.log('hello')
}

const sayHello = () => console.log('hello')

//////////////////////////////////////////////

function doSomething(callback) {
    callback()
}

const doSomething = callback => callback()

//////////////////////////////////////////////

doSomething(function sayHello() {
    console.log('hello')
})

doSomething(() => console.log('hello'))

//////////////////////////////////////////////

function sum(a, b, c) {
    console.log(a + b + c)
}

const sum = (a, b, c) => console.log(a + b + c)

//////////////////////////////////////////////

function divide(a, b) {
    const result = a / b
    return result
}

const divide = (a, b) => {
    const result = a / b
    return result
}

const divide = (a, b) => a / b

//////////////////////////////////////////////

function isNegative(num) {
    if (num < 0) {
        console.log('negative')
        return true
    }
    return false
}

const isNegative = num => {
    if (num < 0) {
        console.log('negative')
        return true
    }
    return false
}