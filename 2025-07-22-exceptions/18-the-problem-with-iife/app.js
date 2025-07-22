"use strict";

(() => {
    const add = (a, b) => a + b

    const calc = (event) => {
        event.preventDefault()
        document.getElementById('result').innerHTML = add(+document.getElementById('a').value, +document.getElementById('b').value)
    }
})()
