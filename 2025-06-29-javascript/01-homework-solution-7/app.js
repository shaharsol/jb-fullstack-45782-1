const n = +prompt("enter a number");

for (let row = 1; row <= n; row++) {
  for (let column = 1; column <= n + 1 - row; column++) {
    document.write("*");
  }
  document.write("<br>");
}
