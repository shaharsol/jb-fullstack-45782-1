const password = prompt("enter password");

let isSixCharsLong = password.length >= 6;

// abcdefg === abcdefg.toLowerCase() // true
// abCdefg === abCdefg.toLowerCase()  //false

let hasCapitalLetter = password.toLowerCase() !== password;
let hasLowerCaseLetter = password.toUpperCase() !== password;
let hasDigit = false;
let hasSpecialChar = false;

// abcdefg
for (const char of password) {
  if ("01234567890".includes(char)) hasDigit = true;
  if ("~!@#$%^&*()_+=".includes(char)) hasSpecialChar = true;
  // if(Number(char) !== NaN) hasDigit = true
}

if (
  hasCapitalLetter &&
  hasLowerCaseLetter &&
  hasDigit &&
  hasSpecialChar &&
  isSixCharsLong
) {
  console.log("great password!");
} else {
  console.log("bad password, reason:");
  //   if (isSixCharsLong === false) console.log("too short");
  if (!isSixCharsLong) console.log("too short");
  if (hasCapitalLetter === false) console.log("need capital letter");
  if (hasLowerCaseLetter === false) console.log("need lower case letter");
  if (hasDigit === false) console.log("need digit");
  if (hasSpecialChar === false) console.log("need special char");
}
