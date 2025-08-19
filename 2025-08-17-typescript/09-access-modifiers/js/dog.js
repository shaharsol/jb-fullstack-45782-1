import Animal from "./animal.js";
export default class Dog extends Animal {
    bark() {
        console.log('woof woof');
    }
    constructor(weight, canine) {
        super(weight);
        this.canine = canine;
    }
}
