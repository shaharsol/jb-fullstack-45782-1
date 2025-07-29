"use strict";

(async () => {

    const getNumberOfCandles = hanukkahSerialDay => {
        if (hanukkahSerialDay > 8) throw new Error('max day is 8')
        if (hanukkahSerialDay < 1) throw new Error('min day is 1')
        return hanukkahSerialDay + 1
    }

    console.log(getNumberOfCandles(6))
    console.log(getNumberOfCandles(9))
    console.log(getNumberOfCandles(0))

})()