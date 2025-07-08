function printRow(rowLength) {
  for (let col = 1; col <= rowLength; col++) {
    printAsterisk();
  }
}

function printSquare(size) {
  for (let row = 1; row <= size; row++) {
    printRow(size);
    newLine();
  }
}

function newLine() {
  document.write("<br>");
}

function printAsterisk() {
  document.write("*");
}

const size = +prompt("please enter size of square");

printSquare(size);

// malben // hebrish ביג נו נו
