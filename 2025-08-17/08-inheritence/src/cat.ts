import Animal from "./animal.js";

export default class Cat extends Animal{
    soulsLeft: number
    sayMiau() {
        console.log('miau')
    }

    constructor(weight: number, soulsLeft: number) {
        super(weight) // call the constructor of the class i inherited from
        this.soulsLeft = soulsLeft
    }
}