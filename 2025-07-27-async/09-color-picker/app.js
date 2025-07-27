"use strict";

(() => {

    const colors = ['red', 'blue', 'green', 'yellow']

    document.getElementById('switch-color-button').addEventListener('click', () => {
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    })
})()