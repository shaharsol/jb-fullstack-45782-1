import Cat from "./cat.js";
import Dog from "./dog.js";
import Animal from "./animal.js";

const mitzi = new Cat(4, 8, 5)
mitzi.sayMiau()
mitzi.brestFeed()
console.log(`mitzi weights ${mitzi.weight}kg`)


const lucky = new Dog(24, 'Border collie')
lucky.bark()
console.log(`lucky weights ${lucky.weight}kg`)


// const someAnimal = new Animal(45)