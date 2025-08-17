import Mamal from "./mamal.js";
export default class Cat extends Mamal {
    sayMiau() {
        console.log('miau');
    }
    constructor(weight, numberOfNipples, soulsLeft) {
        super(weight, numberOfNipples); // call the constructor of the class i inherited from
        this.soulsLeft = soulsLeft;
    }
}
