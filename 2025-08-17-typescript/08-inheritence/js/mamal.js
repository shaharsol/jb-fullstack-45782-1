import Animal from "./animal.js";
export default class Mamal extends Animal {
    brestFeed() {
        console.log('im feeding from my mamal mother');
    }
    constructor(weight, numberOfNipples) {
        super(weight);
        this.numberOfNipples = numberOfNipples;
    }
}
