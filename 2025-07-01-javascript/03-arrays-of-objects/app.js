const ido = {
  name: "Ido",
  gender: "male",
  age: 20,
  city: "rosh haayin",
};

const lior = {
  name: "Lior",
  gender: "male",
  age: 24,
  city: "arsuf ilit",
};

const itay = {
  name: "Itay",
  gender: "male",
  age: 30,
  city: "Haifa",
};

const students = [ido, lior, itay];

for (const student of students) {
  //   console.log(`iterating ${student.name}:`);
  for (const prop in student) {
    console.log(`${prop}: ${student[prop]}`);
  }
}
