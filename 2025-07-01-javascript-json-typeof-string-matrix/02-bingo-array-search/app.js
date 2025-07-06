const randomNumbers = [];

for (let i = 1; i <= 30; i++)
  randomNumbers.push(parseInt(Math.random() * (30 - 1 + 1)) + 30);

console.log(randomNumbers);
const input = +prompt("guess a number between -100 to 100");

let isBingo = false;

for (const randomNumber of randomNumbers) {
  if (input === randomNumber) isBingo = true;
}

console.log(isBingo ? "Bingo" : "Not Bingo");
