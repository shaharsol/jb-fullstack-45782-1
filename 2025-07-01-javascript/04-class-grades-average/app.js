const ido = {
  name: "Ido",
  city: "rosh haayin",
  grades: [90, 95, 88],
};

const lior = {
  name: "Lior",
  city: "arsuf ilit",
  grades: [92, 91, 87],
};

const itay = {
  name: "Itay",
  city: "Haifa",
  grades: [99, 94, 81],
};

const students = [ido, lior, itay];

let sum = 0;
let count = 0;

for (const student of students) {
    for (const grade of student.grades) {
        sum += grade
        count++
    }
}

console.log(`average is ${sum/count}`)
