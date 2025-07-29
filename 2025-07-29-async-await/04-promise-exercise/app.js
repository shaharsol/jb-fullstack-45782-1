"use strict";

(() => {

    const getSquareValuePromise = num => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 7 === 0) reject('boom')
            resolve(num ** 2)
        }, 1 * 1000)
    })

    getSquareValuePromise(+prompt('enter a number'))
        .then(console.log)
        .catch(console.error)

})()

