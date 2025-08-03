"use strict";

(() => {

    // by value - arguments NEVER affect the value of the parameter they origin from
    // immutable objects - cannot be changed
    const calc = (a, b) => {
        a++;
        return a + b
    }

    let aa = 3; // O(1)
    let b = 4;


    console.log(`${calc(aa, b)} is the result of ${aa} + ${b}`) // O(1)


    // by reference - arguments that are objects, share the same memory space
    // and therefore any change that I do inside a function
    // has effect also outside the function
    // mutable objects - can be changed - very very very DANGEROUS
    const calcObject = (a, b) => {
        a.value++
        return a.value + b.value
    }

    // O(1)
    const objA = {
        value: 25
    }

    // O(1)
    const objB = {
        value: 30
    }

    // O(1)
    console.log(
        `${calcObject(objA, objB)} is the result of ${objA.value} + ${objB.value}`
    )

    // total O: O(1)
})()