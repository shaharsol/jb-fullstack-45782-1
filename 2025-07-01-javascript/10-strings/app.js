const message = "Hello world1";

const array = ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"];
console.log(message);

console.log(message[2]);
console.log(message[7]);

// string is represented an array of characters
message[0] = "h"; // however, we cannot modify each char
array[0] = "h";
console.log(message);
console.log(array);

const upperCaseMessage = message.toUpperCase();
console.log(upperCaseMessage);

const lowerCaseMessage = upperCaseMessage.toLowerCase();
console.log(lowerCaseMessage);

// includes
console.log(message.includes("f"));
console.log(message.includes("ell"));
console.log(message.includes(1));
console.log(message.includes("HELLO"));

// startsWith
console.log(message.startsWith("h"));
console.log(message.startsWith("H"));

// endsWith
console.log(message.endsWith("h"));
console.log(message.endsWith("1"));
console.log(message.length);

// trim
const longMessage = "   hello world    ";
console.log(longMessage.length);
const trimmed = longMessage.trim();
console.log(trimmed.length);
console.log(trimmed);

// indexOf
console.log(message.indexOf("l"));
console.log(message.indexOf("ll"));
console.log(message.indexOf("z"));

// lastIndexOf
console.log(message.lastIndexOf("l"));
console.log(message.lastIndexOf("ll"));
console.log(message.lastIndexOf("z"));

// substring
const veryLongMessage = "Welcome to Jamaica man, we can have a lot of fun";
console.log(veryLongMessage.substring(11, 20));
