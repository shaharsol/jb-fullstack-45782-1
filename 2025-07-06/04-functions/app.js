function printSeparatorLine() {
  document.write("<br>");
  document.write("******");
  document.write("<br>");
}

function printEytan() {
  document.write("eytan");
  printSeparatorLine();
  function makeQuestionMark() {
    document.write("?????");
  }
  makeQuestionMark();
  document.write("eytan2");
}

printSeparatorLine();
printSeparatorLine();
printSeparatorLine();

for (let i = 1; i <= 10; i++) printSeparatorLine();

printEytan();
