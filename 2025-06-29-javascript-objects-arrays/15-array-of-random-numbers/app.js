const randomNumbers = [];

for (let i = 1; i <= 20; i++)
  randomNumbers.push(parseInt(Math.random() * (80 - 20 + 1)) + 20);

for (const randomNumber of randomNumbers) console.log(randomNumber);
