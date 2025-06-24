const age = +prompt('enter your age')

let price;

// if(age <= 18) price = 20
// else price = 30

// ternary operator
// it's another syntax for if...
// boolean expression ? value for true : value for false
price = age <= 18 ? 20 : 30;

alert(`your ticket fee is ${price}`)

