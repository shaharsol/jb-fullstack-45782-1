"use strict";

(() => {
    const getAverage = numbers => {
        if (typeof numbers === 'undefined') throw new Error('input must be defined')
        if (numbers === null) throw new Error('input must not be null')
        if (!Array.isArray(numbers)) throw new Error('input must be an array')
        if (numbers.length === 0) throw new Error('array must not be empty')

        return numbers.reduce((cumulative, num) => cumulative + num, 0) / numbers.length
    }

    document.getElementById('calc-button').addEventListener('click', () => {

        try {
            console.log(getAverage(8))
        } catch (err) {
            console.log(err)
        }

        const size = +prompt('enter array size')
        const numbers = []
        for (let i = 1; i <= size; i++) {
            numbers.push(+prompt('enter a number'))
        }

        try {
            const average = getAverage(numbers)
            console.log(`average is ${average}`)
        } catch (e) {
            alert(e.message)
        }

    })
})()