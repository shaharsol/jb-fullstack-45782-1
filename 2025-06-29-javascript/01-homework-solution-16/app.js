const input = +prompt("enter a number");

for (let row = 1; row <= input; row++) {
  for (let blank = 1; blank <= input - row; blank++) {
    document.write("!");
  }
  for (let incrementing = 1; incrementing <= row; incrementing++) {
    document.write(incrementing);
  }
  for (let decrementing = row - 1; decrementing >= 1; decrementing--) {
    document.write(decrementing);
  }
  document.write("<br>");
}
