// DRY implemented:
function printMaxNumber(a, b) {
  console.log(a > b ? a : b);
}

// DRY not implemented yet
const num1 = +prompt("enter a number");
const num2 = +prompt("enter a number");

printMaxNumber(num1, num2);

// DRY not implemented yet
const rand1 = Math.random() * 101;
const rand2 = Math.random() * 101;

printMaxNumber(rand1, rand2);
