const age = +prompt('enter your age')
let price;

// if(age <= 4) price = 0
// else if (age <=12) price = 20
// else if (age <=18) price = 30
// else if (age <=65) price = 40
// else price = 20

// this is a very long switch:
// switch (age) {
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         price = 0;
//         break;
//     case 6:
//     case 7:
//     case 8:
//         price = 20;
//         break;
// }

switch(true) {
    case age <= 4:
        price = 0;
        break;
    case age <= 12:
        price = 20;
        break;
    case age < 18:
        price = 30;
        break;
    case age < 65:
        price = 40;
        break;
    default:
        price = 20;
        break;
}


alert(`your entrance fee is ${price}`)