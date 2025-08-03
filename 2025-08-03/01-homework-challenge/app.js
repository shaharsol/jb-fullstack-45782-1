"use strict";

(async () => {
    // lets say i have these async callback functions
    const power = (successCallback, errorCallback, num) => {
        setTimeout(() => {
            if (num % 7 === 0) return errorCallback('boom')
            return successCallback(num ** 2)
        }, 0)
    }

    const sqrt = (successCallback, errorCallback, num) => {
        setTimeout(() => {
            if (num % 7 === 0) return errorCallback('boom')
            return successCallback(Math.sqrt(num))
        }, 0)
    }

    const sum = (successCallback, errorCallback, a, b) => {
        setTimeout(() => {
            if (a % 7 === 0 || b % 7 === 0) return errorCallback('boom')
            console.log(`a is ${a}`)
            console.log(`b is ${b}`)
            return successCallback(a + b)
        }, 0)
    }


    const trioSum = (successCallback, errorCallback, a, b, c) => {
        setTimeout(() => {
            if (a % 7 === 0 || b % 7 === 0 || c % 7 === 0) return errorCallback('boom')
            return successCallback(a + b + c)
        }, 0)
    }

    // how i would use them:
    // power(console.log, console.log, 4) // 16
    // sqrt(console.log, console.log, 4) // 2
    // power(console.log, console.log, 49) // boom
    // sqrt(console.log, console.log, 49) // boom
    // sum(console.log, console.log, 4, 3) // 7

    // but i want promises...
    // so i promisify:
    // const powerPromisified = num => new Promise((resolve, reject) => {
    //     power(resolve, reject, num)
    // })

    // const sqrtPromisified = num => new Promise((resolve, reject) => {
    //     sqrt(resolve, reject, num)
    // })

    const promisify = (...args) => new Promise((resolve, reject) => {
        const myArgs = [...args]
        const func = myArgs[0]
        if (typeof func !== 'function') throw new Error('func is not a function')
        myArgs.splice(0, 1)

        func(resolve, reject, ...myArgs)
    })

    const powerPromisified = num => promisify(power, num)
    const sqrtPromisified = num => promisify(sqrt, num)
    const sumPromisified = (num1, num2) => promisify(sum, num1, num2)
    const trioPromisified = (num1, num2, num3) => promisify(trioSum, num1, num2, num3)

    // and i try to use them:
    try {
        const results = await Promise.all([
            powerPromisified(4),
            sqrtPromisified(4),
            powerPromisified(49),
            sqrtPromisified(49),
            sumPromisified(4, 3),
            trioPromisified(4, 2, 13)
        ])
        console.log(results)
        /* 
            [
                {status: 'fulfilled', value: 16},
                {status: 'fulfilled', value: 2},
                {status: 'rejected', reason: 'boom'},
                {status: 'rejected', reason: 'boom'}
            ]
        */

    } catch (err) {
        console.log(err)
    }

    // now i feel a little victory...
    // however something bothers me...
    // 1. what bothers me? imagine you get a PR (pull request) and you do a code review, which very important
    //      principle is broken? look at lines 27-33.
    // 2. solve it
    // 3. let's say i have a function 
    //      did the solution you gave in #2 still works? try it
    // 4. make it work. 
    //      a. clue: you don't have all the knowledge required to solve this bullet
    //          however, there's only one tiny bit missing. google "...args"
    //          you already know about the spread operator from the cloning class, 
    //          you just never used it in the argument list of a function


})()

