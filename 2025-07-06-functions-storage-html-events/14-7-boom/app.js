let input = getUserInput();
while (userWantsToContinue(input)) {
  for (let i = 1; i <= input; i++) {
    console.log(isDividedBy7(i) || isContaining7(i) ? "boom" : i);
  }
  input = getUserInput();
}

//

function isContaining7(number) {
  return number.toString().includes("7");
}

function isDividedBy7(number) {
  return number % 7 === 0;
}

function getUserInput() {
  return +prompt("enter high limit for the game");
}

function userWantsToContinue(input) {
  return input !== 0;
}

// a new comment
