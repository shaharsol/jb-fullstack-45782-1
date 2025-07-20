function sayHello() {
    console.log('hello')
}

function doSomething(callback) {
    callback()
}

doSomething(function sayHello() {
    console.log('hello')
})

function sum(a, b, c) {
    console.log(a + b + c)
}

function divide(a, b) {
    const result = a / b
    return result
}

function isNegative(num) {
    if (num < 0) {
        console.log('negative')
        return true
    }
    return false
}