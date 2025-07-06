const min = +prompt("enter min");
const max = +prompt("enter max");

const random = Math.random(); // 0-0.999999

// console.log(random * (max - min + 1)); // 0.00 - 20.99
// console.log(parseInt(random * (max - min + 1))); // 0 - 20
console.log(parseInt(random * (max - min + 1)) + min); // min - max

console.log(parseInt(random * 31) + 20); // min - max
