function isPositive(num) {
  return num >= 0;
}

console.log(
  `the number is ${
    isPositive(+prompt("enter a number")) ? "positive" : "negative"
  }`
);
