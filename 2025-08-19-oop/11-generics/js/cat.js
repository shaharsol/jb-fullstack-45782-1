import Animal from "./animal.js";
export default class Cat extends Animal {
    constructor(weight, numberOfSoulsLeft) {
        super(weight);
        this.numberOfSoulsLeft = numberOfSoulsLeft;
    }
}
