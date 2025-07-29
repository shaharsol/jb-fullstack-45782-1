"use strict";

(async () => {

    const getNumberOfCandles = (hanukkahSerialDay, successCallback, errorCallback) => {
        setTimeout(() => {
            if (hanukkahSerialDay > 8) return errorCallback('max day is 8')
            if (hanukkahSerialDay < 1) return errorCallback('min day is 1')
            successCallback(hanukkahSerialDay + 1)
        }, 1 * 1000)
    }

    getNumberOfCandles(7, console.log, console.log)
    getNumberOfCandles(9, console.log, console.log)
    getNumberOfCandles(0, console.log, console.log)


})()