// description of betty:
const dogName = "Betty";
const dogAge = 3;
const dogBreed = "mixed";
const dogGender = "male";
const dogWeight = 20;

//
const dog = {
  name: "Betty",
  age: 3,
  breed: "mixed",
  gender: "female",
  weight: 20,
};

console.log(dog);

// console.log(
//   `my dog name is ${dogName} and ${
//     dogGender === "male" ? "he" : "she"
//   } weighs ${dogWeight}kg`
// );

// i can add properties dynamically
dog.color = "grey";

// dog.age is equivalent to dog['age']
console.log(
  `my dog name is ${dog.name} and ${
    dog.gender === "male" ? "he" : "she"
  } weighs ${dog.weight}kg, and the color is ${dog.color}, and she is ${
    dog["age"]
  } years old`
);

dog.color = "black";

console.log(
  `my dog name is ${dog.name} and ${
    dog.gender === "male" ? "he" : "she"
  } weighs ${dog.weight}kg, and the color is ${dog.color}, and she is ${
    dog["age"]
  } years old`
);

// objects as consts
// this won't work:
// dog = {
//   age: 2,
//   breed: "Doberman",
//   color: "black",
// };

// however, i can ALWAYS modify the properties. Even if the object is defined as const
dog.age = 2;
dog.breed = "Doberman";
dog.color = "black";

console.log(
  `my dog name is ${dog.name} and ${
    dog.gender === "male" ? "he" : "she"
  } weighs ${dog.weight}kg, and the color is ${dog.color}, and she is ${
    dog["age"]
  } years old`
);

// i can delete properties from an object
console.log(dog);
delete dog.age;
console.log(dog);

// access to non-existing properties always returns undefined
console.log(`dog age is ${dog.age}`);

// a special loop syntax to iterate properties:
// for-in
for (const prop in dog) {
  console.log(`${prop}: ${dog[prop]}`);
}

/*
1: p = name, dog[p] => dog['name']
*/
