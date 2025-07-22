const students = [
    {
        name: 'Dean',
        grade: 95,
        age: 21,
        gender: 'male'
    },
    {
        name: 'Michael',
        grade: 92,
        age: 36,
        gender: 'male'
    },
    {
        name: 'Ruth',
        grade: 88,
        age: 29,
        gender: 'female'
    }
]

// const grades = [
//     95, 92, 88
// ]

let student;

// native way of find:
const findStudent = name => {
    for (const currentStudent of students) {
        if (currentStudent.name === name) {
            return currentStudent
        }
    }
    return undefined;
}

console.log(findStudent('Ruth'))

// the HOF way of find:
console.log(students.find(currentStudent => currentStudent.name === 'Ruth'))


// native way of find index
const findStudentIndex = name => {
    for (let i = 0; i < students.length; i++) {
        if (students[i].name === name) {
            return i
        }
    }
    return undefined;
}

console.log(findStudentIndex('Ruth'))

// the HOF way of findIndex:
console.log(students.findIndex(currentStudent => currentStudent.name === 'Ruth'))

// native way of filter
const findStudentWithHighGrades = grade => {
    const result = []
    for (currentStudent of students) {
        if (currentStudent.grade >= grade) {
            result.push(currentStudent)
        }
    }
    return result;
}

console.log(findStudentWithHighGrades(90))

// HOF way of filter
console.log(students.filter(currentStudent => currentStudent.grade > 90))

// native map
const mapGrades = students => {
    const result = []
    for (currentStudent of students) {
        result.push(currentStudent.grade)
    }
    return result;
}

console.log(mapGrades(students))

// HOF map:
const result = students.map(currentStudent => currentStudent.grade)
console.log(result)
console.log(students.map(currentStudent => currentStudent.grade))
console.log(students.map(currentStudent => currentStudent.name))
console.log(students.map(currentStudent => { return { name: currentStudent.name, age: currentStudent.age } }))


// native just a loop
const loopStudents = students => {
    for (currentStudent of students) {
        console.log(currentStudent)
    }
}

loopStudents(students)

// HOF just a loop
students.forEach((student, i) => console.log(student, i))
students.forEach(console.log)

