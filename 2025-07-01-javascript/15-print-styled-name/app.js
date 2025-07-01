const firstName = prompt("enter first name");
const lastName = prompt("enter last name");

styleName(firstName);
styleName("eytan");
styleName(lastName);

function styleName(argument) {
  console.log(`${argument[0].toUpperCase()}${argument.substring(1)}`);
}

console.log("hello");
console.log("world");


firstName.indexOf('h')
