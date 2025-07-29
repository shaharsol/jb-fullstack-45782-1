"use strict";

(async () => {

    const getUserLocation = () => new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })

    const sleep = millisecondsToSleep => new Promise((resolve, reject) => {
        setTimeout(resolve, millisecondsToSleep)
    })

    try {
        let geo = await getUserLocation()
        console.log(geo)

        // wait 5 seconds before 2nd getCurrentPosition
        await sleep(5 * 1000)

        geo = await getUserLocation()
        console.log(geo)

    } catch (err) {
        console.log(err)
    }
})()
