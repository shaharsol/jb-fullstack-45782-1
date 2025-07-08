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

function getMichaelLastName() {
  return "Cohen";
  console.log("Before returning");
  return "Cohen";
  console.log("After returning");
  return "Uzan";
}

console.log(getMichaelLastName()); // most of the times, we need to invoke a function
console.log(getMichaelLastName); // less frequently, we will need the function code itself

function getMax(a, b) {
  console.log(a > b ? a : b);
  return a > b ? a : b;
}

console.log(getMax(1, 2));

function getPriceIncludingVAT(price) {
  return price * 1.18;
}

function getPriceIncludingVAT(price) {
  return {
    originalPrice: price,
    priceIncludingVAT: price * 1.18,
  };
}
