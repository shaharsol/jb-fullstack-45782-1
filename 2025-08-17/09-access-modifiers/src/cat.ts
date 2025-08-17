import Mamal from "./mamal.js";

export default class Cat extends Mamal{
    soulsLeft: number
    sayMiau() {
        console.log('miau')
    }

    constructor(weight: number, numberOfNipples: number, numberOfPuppies: number, soulsLeft: number) {
        super(weight, numberOfNipples, numberOfPuppies) // call the constructor of the class i inherited from
        this.soulsLeft = soulsLeft
    }

    public getNumberOfBirths() {
        return this.numberOfBirths
    }
}