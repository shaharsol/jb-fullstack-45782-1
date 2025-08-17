import Cat from "./cat.js";
import Dog from "./dog.js";
const mitzi = new Cat(4, 5);
mitzi.sayMiau();
console.log(`mitzi weights ${mitzi.weight}kg`);
const lucky = new Dog(24, 'Border collie');
lucky.bark();
console.log(`lucky weights ${lucky.weight}kg`);
