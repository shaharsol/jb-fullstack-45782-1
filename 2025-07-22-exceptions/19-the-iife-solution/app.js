"use strict";

(() => {
    const add = (a, b) => a + b

    const calc = (event) => {
        event.preventDefault()
        document.getElementById('result').innerHTML = add(+document.getElementById('a').value, +document.getElementById('b').value)
    }

    document.getElementById('the-form').addEventListener('submit', calc)
    document.getElementById('my-button').addEventListener('click', () => {
        alert('clicked')
    })
})()
