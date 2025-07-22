const numOfDigits = +prompt('how many digits after the . you want to see?')
const pi = Math.PI


// a runtime error could not have been detected by a compiler
const work = () => {
    try {
        console.log(pi.toFixed(numOfDigits))
        console.log('after problematic statement')
        return true;
    }
    catch (err) { // prevents runtime error
        if (err.message.includes('between 0 and 100')) alert('please try again, this time with a number between 0-100')
        console.log(pi.toFixed(numOfDigits))
    }
    // finally is good for 2 scenarios:
    // 1. there is a return statement in the try block
    // 2. it executes in case there is an exception inside the catch block
    finally {
        console.log('in finally block')
    }

    console.log('finished')

}

try {
    work()
    console.log('after work')
} catch (err) {
    console.log('exception in work function invokation')
}
