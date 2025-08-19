import Animal from "./animal.js";

export default class Mamal extends Animal {
    public numberOfNipples: number // if no access modifier is specified, default is public
    private numberOfPuppies: number
    protected numberOfBirths: number = 1

    public brestFeed() {
        console.log('im feeding from my mamal mother')
    }

    public giveBirth(puppies: number) {
        this.numberOfBirths++
        this.numberOfPuppies += puppies
    }

    public getNumberOfPuppies() {
        return this.numberOfPuppies
    }

    constructor(weight: number, numberOfNipples: number, numberOfPuppies: number) {
        super(weight)
        this.numberOfNipples = numberOfNipples
        this.numberOfPuppies = numberOfPuppies
    }
}