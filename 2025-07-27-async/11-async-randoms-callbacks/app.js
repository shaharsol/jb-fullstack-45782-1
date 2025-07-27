"use strict";

(() => {

    const getAsyncRandomNumber = (max, callback) => {
        // console.log(`getAsyncRandomNumber was invoked with max: ${max}`)
        setTimeout(() => {
            const random = Math.random() * max
            console.log(`got max ${max}`)
            callback(random)
        }, 1000)
    }


    getAsyncRandomNumber(100, nextMax => {
        getAsyncRandomNumber(nextMax, nextMax2 => {
            getAsyncRandomNumber(nextMax2, nextMax3 => {
                getAsyncRandomNumber(nextMax3, nextMax4 => {
                    getAsyncRandomNumber(nextMax4, nextMax => {
                        getAsyncRandomNumber(nextMax, nextMax => {
                            getAsyncRandomNumber(nextMax, nextMax => {
                                getAsyncRandomNumber(nextMax, nextMax => {
                                    getAsyncRandomNumber(nextMax, nextMax => {
                                        getAsyncRandomNumber(nextMax, nextMax => {
                                            console.log(nextMax)
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })



    // let max = 100;
    // for (let i = 1; i <= 10; i++) {
    //     getAsyncRandomNumber(max, result => {
    //         max = result
    //     })
    // }
})()