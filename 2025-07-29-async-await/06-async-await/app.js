"use strict";

(async () => {

    // the new promise way:

    // promise advantage:
    // 1. formalize the success and error callback into resolve, reject
    // 2. ensure only one reject or resolve will be invoked and no more
    // 3. chaining thens (thenification)
    const getAsyncRandomNumberPromise = (max) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random() * max
                console.log(`got max ${max}`)
                if (random > max) reject('internal server error');
                else resolve(random)
            }, 1 * 1000)
        })
    }

    // instead of callback hell, we get THENIFICATION
    // when we use `return` from a `then` function, we actually return a new promise

    // getAsyncRandomNumberPromise(100).then(random => {// inside then we implement the successCallback
    //     console.log(`promise random is ${random}`)
    //     return getAsyncRandomNumberPromise(random)
    // }).then(random => {
    //     console.log(`promise random is ${random}`)
    //     return getAsyncRandomNumberPromise(random)
    // }).then(random => {
    //     console.log(`promise random is ${random}`)
    //     return getAsyncRandomNumberPromise(random)
    // }).then(random => {
    //     console.log(`promise random is ${random}`)
    //     return getAsyncRandomNumberPromise(random)
    // }).catch(err => {
    //     console.log(`there was an error : ${err}`)
    // }).finally(() => {
    //     console.log('in finally')
    // })
    // console.log(p)


    // const exampleFunc = num => num ** 2
    // const exampleFunc = async num => num ** 2

    // console.log(exampleFunc(4))


    try {
        let random = await getAsyncRandomNumberPromise(100)
        random = await getAsyncRandomNumberPromise(random)
        random = await getAsyncRandomNumberPromise(random)
        random = await getAsyncRandomNumberPromise(random)
        random = await getAsyncRandomNumberPromise(random)
        console.log(random)
    } catch (err) {
        console.log(err)
    } finally {
        console.log('in finally ')
    }

})()