"use strict";

(async () => {

    // example 1
    let x = 200
    let y = 2

    // x = '1'

    console.log(x + y)

    // example 2
    function sum(a, b) {
        return a + b
    }

    // sum = '1'

    console.log(sum(1, 2))

    // example 3
    function multiply(a: number, b: number): number {
        const result = a * b
        return result
    }

    console.log(multiply(2, 3));

    const users = await fetch('some url')

})()