"use strict";

(async () => {

    // sync version:

    // const getNumberOfCandles = (hanukkahSerialDay) => {
    //     if (hanukkahSerialDay > 8) throw new Error('max day is 8')
    //     if (hanukkahSerialDay < 1) throw new Error('min day is 1')
    //     return hanukkahSerialDay + 1
    // }

    // try {
    //     console.log(getNumberOfCandles(7))
    //     console.log(getNumberOfCandles(9))
    //     console.log(getNumberOfCandles(0))
    // }
    // catch (err) {
    //     console.error(err)
    // }


    // callback version

    // const getNumberOfCandles = (hanukkahSerialDay, successCallback, errorCallback) => {
    //     setTimeout(() => {
    //         if (hanukkahSerialDay > 8) return errorCallback('max day is 8')
    //         if (hanukkahSerialDay < 1) return errorCallback('min day is 1')
    //         successCallback(hanukkahSerialDay + 1)
    //     }, 1 * 1000)
    // }

    // getNumberOfCandles(7, console.log, console.log)
    // getNumberOfCandles(9, console.log, console.log)
    // getNumberOfCandles(0, console.log, console.log)

    // promise version:
    const getNumberOfCandles = async (hanukkahSerialDay) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (hanukkahSerialDay > 8) reject('max day is 8')
                if (hanukkahSerialDay < 1) reject('min day is 1')
                resolve(hanukkahSerialDay + 1)
            }, 1 * 3000)
        })
    }

    // Promise.all([1, 2, 3, 4, 5, 6, 7, 8].map(current => getNumberOfCandles(current)))
    // Promise.all([1, 2, 3, 4, 5, 6, 7, 8].map(getNumberOfCandles))
    //     .then(results => {
    //         const total = results.reduce((cumulative, current) => cumulative + current, 0)
    //         console.log(`number of candles in hannukah: ${total}`)
    //     })
    //     .catch(console.error)

    // async/await:
    try {
        const results = await Promise.all([1, 2, 3, 4, 5, 6, 7, 8].map(getNumberOfCandles))
        const total = results.reduce((cumulative, current) => cumulative + current, 0)
        console.log(`number of candles in hannukah: ${total}`)
    } catch (err) {
        console.error(err)
    }


})()