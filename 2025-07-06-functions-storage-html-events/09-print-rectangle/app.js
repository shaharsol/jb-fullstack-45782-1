function printRow(rowLength) {
  for (let col = 1; col <= rowLength; col++) {
    printAsterisk();
  }
}

function printRectangle(width, height) {
  for (let row = 1; row <= height; row++) {
    printRow(width);
    newLine();
  }
}

function newLine() {
  document.write("<br>");
}

function printAsterisk() {
  document.write("*");
}

const width = +prompt("please enter width of rectangle");
const height = +prompt("please enter height of rectangle");

printRectangle(width, height);

// malben // hebrish ביג נו נו
