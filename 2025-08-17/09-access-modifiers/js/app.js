import Cat from "./cat.js";
import Dog from "./dog.js";
const mitzi = new Cat(4, 8, 2, 5);
mitzi.sayMiau();
mitzi.brestFeed();
console.log(`mitzi weights ${mitzi.weight}kg`);
const lucky = new Dog(24, 'Border collie');
lucky.bark();
console.log(`lucky weights ${lucky.weight}kg`);
console.log(`mitzi has ${mitzi.getNumberOfPuppies()} kids after ${mitzi.getNumberOfBirths()} births`);
mitzi.giveBirth(4);
console.log(`mitzi has ${mitzi.getNumberOfPuppies()} kids after ${mitzi.getNumberOfBirths()} births`);
// mitzi.numberOfPuppies += 4
console.log(`mitzi has ${mitzi.getNumberOfPuppies()} kids after ${mitzi.getNumberOfBirths()} births`);
