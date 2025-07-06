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

let max = 0;
let min = 100;
let maxStudent;
let minStudent;

for (const student of students) {
  for (const grade of student.grades) {
    if (grade > max) {
      max = grade;
      maxStudent = student.name;
    }
    if (grade < min) {
      min = grade;
      minStudent = student.name;
    }
  }
}

console.log(`max is ${max} by ${maxStudent}, min is ${min} by ${minStudent}`);
