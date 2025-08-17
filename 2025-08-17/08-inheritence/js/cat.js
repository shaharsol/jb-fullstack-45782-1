import Animal from "./animal.js";
export default class Cat extends Animal {
    sayMiau() {
        console.log('miau');
    }
    constructor(weight, soulsLeft) {
        super(weight); // call the constructor of the class i inherited from
        this.soulsLeft = soulsLeft;
    }
}
