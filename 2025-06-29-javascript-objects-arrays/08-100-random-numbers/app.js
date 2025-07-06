const min = +prompt("enter min");
const max = +prompt("enter max");

for (let i = 1; i <= 100; i++) {
  const random = Math.random(); // 0-0.999999

  console.log(parseInt(random * (max - min + 1)) + min); // min - max
}
