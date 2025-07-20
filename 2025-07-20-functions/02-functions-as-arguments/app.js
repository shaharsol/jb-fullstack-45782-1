const name = 'Shahar'
console.log(name)


function showGrade(grade) {
    console.log(`your grade is ${grade}`)
    return true
}

const myGrade = 96;
console.log(myGrade)

console.log(showGrade)

console.log(showGrade(myGrade))

console.log(typeof showGrade)
console.log(typeof showGrade(myGrade))

const someValue = showGrade(60)
console.log(someValue)

const someVariable = showGrade
console.log(someVariable)
someVariable(100)