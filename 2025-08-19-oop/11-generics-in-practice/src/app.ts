import Animal from "./animal.js";
import Cat from "./cat.js";
import Dog, { Canine } from "./dog.js";

const dog = new Dog(40, Canine.Labrador)
const cat = new Cat(4, 7)

// function cloneDog(dog: Dog): Dog {
//     return { ...dog } as Dog
// }

// function cloneCat(cat: Cat): Cat {
//     return { ...cat } as Cat
// }

// the <> is the generics syntax
function cloneAnimal<T extends Animal>(animal: T): T {
    return { ...animal } as T
}

function doSomethingWithDog(dog: Dog) {
    // const clonedDog = cloneDog(dog)
    const clonedDog = cloneAnimal<Dog>(dog)

}

function doSomethingWithCat(cat: Cat) {
    const clonedCat = cloneAnimal(cat)
}

const obj = {
    name: 'hello'
}

// const clonedObj = cloneAnimal(obj)
doSomethingWithDog(dog)
console.log(dog.canine)
console.log(dog.weight)

