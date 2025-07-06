// DRY implemented:
function printMaxNumber(a, b) {
  console.log(a > b ? a : b);
}

function getNumericalInputFromUser() {
  return +prompt("enter a number");
}

// DRY not implemented yet
const num1 = getNumericalInputFromUser();
const num2 = getNumericalInputFromUser();

printMaxNumber(num1, num2);

function getRandomNumber(min, max) {
  return parseInt(Math.random() * (max - min + 1) + min);
}

// DRY not implemented yet
const rand1 = getRandomNumber(0, 100);
const rand2 = getRandomNumber(0, 100);
const rand3 = getRandomNumber();
console.log(rand3);
printMaxNumber(rand1, rand2);



