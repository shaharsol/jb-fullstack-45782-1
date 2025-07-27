"use strict";

(() => {
    const someFunc = (objA, arrayB) => {
        objA.value++ // this is WROG
        // before modifying objA i must clone it

        // cloning in native JS:
        // const clone = objA // this is NOT cloning, this is simply assigning memory address of another object
        const clone = Object.assign({}, objA) // this generates another object in another memory area, with the same VALUES

        // since 2015, cloning is done using the spread operator
        // spread operator, added to JS in 2015: ...

        const anotherClone = { ...objA } // name: 'Yossi', age: 25

        // cloning an array:

        const someArrayClone = [...arrayB] // 1, 2, 3



    }

    someFunc({
        name: 'Yossi',
        age: 25
    }, [1, 2, 3])
})() 