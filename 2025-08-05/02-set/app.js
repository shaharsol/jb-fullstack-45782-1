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

    // here is an array:
    const grades = [78, 82, 88, 88, 90, 92, 92, 96, 96, 96, 96, 99]

    // create an array from grades with only uniques values
    // [78, 82, 88, 88, 90, 92, 92, 96, 96, 96, 96, 99]
    // [78, 82, 88, 90, 92, 96, 99]
    console.log(
        grades.reduce((cumulative, current) => {
            const cum = [...cumulative]

            const isInArray = cum.includes(current)
            if (!isInArray) cum.push(current)

            return cum
        }, [])

    )

    // use Set to do the same in a single command!
    // 2 clues:
    // 1. a Set can be initiated with an array e.g. const mySet = new Set(myArray)
    // 2. ...


    const uniqueGrades = [...new Set(grades)] // the elegant way to unique an array in javascript

    console.log(uniqueGrades)



})()
