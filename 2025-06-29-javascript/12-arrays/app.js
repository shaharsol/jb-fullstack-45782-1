const grades = [98, 67, 80, 82, 95, 95, 98, 99];
//              0,  1 , 2 , 3 , 4 , 5
// היסט

console.log(grades);

console.log(`first grade: ${grades[0]}`);
console.log(`last grade: ${grades[4]}`);
console.log(`last grade: ${grades[5]}`);

grades[3] = 85;
console.log(`4th grade: ${grades[3]}`);

console.log(`i have ${grades.length} grades in the array`);
console.log(`last grade: ${grades[grades.length - 1]}`);

// we use splice to eliminate items from an array
grades.splice(2, 1); // (offset, number of items)
console.log(grades[2]);

// [98, 67, 80, 82, 99];
// splice(4, 3);

for (let offset = 0; offset < grades.length; offset++) {
  console.log(grades[offset]);
}

console.log("====================");

for (const grade of grades) {
  console.log(grade);
}

const names = ['Dean', 'Yarden', 'Michael']
for (const name of names) {
  console.log(name);
}

