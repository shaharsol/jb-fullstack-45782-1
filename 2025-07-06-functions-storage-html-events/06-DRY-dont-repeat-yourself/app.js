const firstName = prompt("enter first name");
const middleName = prompt("enter middle name");
const lastName = prompt("enter last name");

function printStyledName(anyName) {
  console.log(`${anyName[0].toUpperCase()}${anyName.substring(1)}`);
}

printStyledName(firstName);
printStyledName(middleName);
printStyledName(lastName);
