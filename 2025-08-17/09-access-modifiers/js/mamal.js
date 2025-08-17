import Animal from "./animal.js";
export default class Mamal extends Animal {
    brestFeed() {
        console.log('im feeding from my mamal mother');
    }
    giveBirth(puppies) {
        this.numberOfBirths++;
        this.numberOfPuppies += puppies;
    }
    getNumberOfPuppies() {
        return this.numberOfPuppies;
    }
    constructor(weight, numberOfNipples, numberOfPuppies) {
        super(weight);
        this.numberOfBirths = 1;
        this.numberOfNipples = numberOfNipples;
        this.numberOfPuppies = numberOfPuppies;
    }
}
