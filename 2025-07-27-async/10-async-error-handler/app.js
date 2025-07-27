"use strict";

(() => {

    const colors = ['red', 'blue', 'green', 'yellow']

    // developer A
    const pickColor = (successCallback, errorCallback) => {
        if (typeof successCallback !== 'function') throw new Error('callback must be a function')
        setTimeout(() => {
            const randomColor = colors[Math.floor(Math.random() * colors.length * 2)];
            if (typeof randomColor === 'undefined') errorCallback('Server is currently down...')
            else successCallback(randomColor)
        }, 3000)
    }

    // developer B
    document.getElementById('switch-color-button').addEventListener('click', () => {
        pickColor(color => {
            document.body.style.backgroundColor = color
        }, error => {
            console.log(`there was an error: ${error}`)
        })
    })

    document.getElementById('display-color-button').addEventListener('click', () => {
        pickColor(color => {
            alert(color)
        })
    })

})()