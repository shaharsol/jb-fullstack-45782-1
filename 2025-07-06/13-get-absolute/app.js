function getAbsolute(num) {
  // return num >= 0 ? num : -num
  if (num >= 0) return num;
  return -num;
}

const input = +prompt("enter a number");
console.log(`the absolute value of ${input} is ${getAbsolute(input)}`);
