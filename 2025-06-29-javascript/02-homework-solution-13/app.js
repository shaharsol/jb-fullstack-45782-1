const width = +prompt("enter width");
const height = +prompt("enter height");

for (let row = 1; row <= height; row++) {
  for (let col = 1; col <= width; col++) {
    document.write(
      row === 1 || row === height || col === 1 || col === width ? "*" : "&nbsp;"
    );
  }
  document.write("<br>");
}
