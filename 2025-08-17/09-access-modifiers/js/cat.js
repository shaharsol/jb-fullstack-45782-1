import Mamal from "./mamal.js";
export default class Cat extends Mamal {
    sayMiau() {
        console.log('miau');
    }
    constructor(weight, numberOfNipples, numberOfPuppies, soulsLeft) {
        super(weight, numberOfNipples, numberOfPuppies); // call the constructor of the class i inherited from
        this.soulsLeft = soulsLeft;
    }
    getNumberOfBirths() {
        return this.numberOfBirths;
    }
}
