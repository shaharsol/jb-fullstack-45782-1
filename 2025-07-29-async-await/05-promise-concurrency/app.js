"use strict";

(() => {

    const numbers = [3, 8, 16, 49, 5, 67, 88, 99]

    const getSquareValuePromise = num => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 7 === 0) reject('boom')
            resolve(num ** 2)
        }, 3 * 1000)
    })

    console.log(numbers)

    console.log(numbers.map(x => x ** 2))

    console.log(numbers.map(x => console.log(x)))

    console.log(numbers.map(x => getSquareValuePromise(x)))


    // console.log(numbers.map(getSquareValuePromise))

    Promise.all(numbers.map(getSquareValuePromise))
        .then(console.log)
        .catch(console.log)
        .finally(() => {
            console.log('in finally')
        })

    Promise.allSettled(numbers.map(getSquareValuePromise))
        .then(results => {
            console.log(results)
        })
        .catch(console.log)
        .finally(() => {
            console.log('in finally')
        })


})()

