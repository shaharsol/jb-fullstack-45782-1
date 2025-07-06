const age = 16;
const isAdult = age > 18;

console.log(typeof isAdult);

if (isAdult) console.log("we have an adult");
else console.log("we have a child");

const weight = "48";
if ("48") console.log("we have a weight");
else console.log("no weight");

const student1 = {
  name: "ido", // '' is false, any other string is true
  age: 1, // 0 is false, any other number is true
  city: "ro shayyin",
};

const student2 = {
  name: "",
  age: 40,
};

if (student1.name) console.log("student1 has name");
if (student2.name) console.log("student2 has name");

if (student1.age) console.log("student1 has age");
if (student2.age) console.log("student2 has age");

if (student1.city) console.log("student1 has city");
if (student2.city) console.log("student2 has city"); // undefined always false

const average = +"fghgjhdfghdf";
console.log(average);
if (average) console.log("NaN is true");
