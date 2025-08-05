"use strict";

(async () => {

    const myGrades = new Set()

    // set is a collection
    // much like an array
    myGrades.add(90)
    myGrades.add(96)
    myGrades.add(72)
    myGrades.add('my string')
    myGrades.add(true)
    myGrades.add({ id: 123, name: 'yossi' })
    myGrades.add({ id: 1234, name: 'yossi' })
    console.log(myGrades)

    // set can only hold UNIQUE values
    myGrades.add(72)
    console.log(myGrades)

    // for performance considerations: set functions work with O(1)
    console.log([90, 96, 72])
    console.log(`the grade 96 is present in the Set? ${myGrades.has(96)}`)

    // 

})()
