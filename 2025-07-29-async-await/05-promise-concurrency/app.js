"use strict";

(() => {

    const numbers = [3, 8, 16, 5, 67, 88, 99]

    const getSquareValuePromise = num => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 7 === 0) reject('boom')
            resolve(num ** 2)
        }, 3 * 1000)
    })

    Promise.all([
    ])
        .then(console.log)
        .catch(console.error)


})()

