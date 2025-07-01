const studentsJSON = `
    [
        {
            "name": "ido",
            "city": "tel aviv",
            "grades": [98,87,78],
            "age": 25
        }
    ]
`;

const students = JSON.parse(studentsJSON);

console.log(studentsJSON);
students[0].age++;
console.log(students);

const modifiedJSON = JSON.stringify(students);

console.log(modifiedJSON);
