const age = +prompt('enter your age')
let price;

if(age <= 4) price = 0
else if (age <=12) price = 20
else if (age <=18) price = 30
else if (age <=65) price = 40
else price = 20

alert(`your entrance fee is ${price}`)