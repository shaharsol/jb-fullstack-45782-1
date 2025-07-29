"use strict";

(() => {
    const myIntervalId = setInterval(() => {
        const random = Math.random() * document.getElementById('limit').value
        document.getElementById('the-div').innerHTML = random
    }, 1 * 1000)

    setTimeout(() => {
        clearInterval(myIntervalId)
    }, 10 * 1000)
})()

