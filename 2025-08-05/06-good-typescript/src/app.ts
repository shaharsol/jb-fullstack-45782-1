"use strict";

(() => {

    // example 1
    let x = 1
    let y: number = 2

    // x = '1'

    console.log(x + y)

    // example 2
    function sum(a, b) {
        return a + b
    }

    // sum = '1'

    console.log(sum(1, 2))

    // example 3
    function multiply(a, b) {
        const result = a * b
    }

    console.log(multiply(2, 3))

})()