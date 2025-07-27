"use strict";

(() => {

    const colors = ['red', 'blue', 'green', 'yellow']

    // developer A
    const pickColor = (callback) => {
        if (typeof callback !== 'function') throw new Error('callback must be a function')
        setTimeout(() => {
            const randomColor = colors[Math.floor(Math.random() * colors.length * 2)];
            if (typeof randomColor === 'undefined') throw new Error('Server is currently down...')
            callback(randomColor)
        }, 3000)
    }

    // developer B
    document.getElementById('switch-color-button').addEventListener('click', () => {
        try {
            pickColor(color => {
                document.body.style.backgroundColor = color
            })
        } catch (err) {
            console.log(`error is ${err.message}`)
        }
    })

    document.getElementById('display-color-button').addEventListener('click', () => {
        pickColor(color => {
            alert(color)
        })
    })

})()