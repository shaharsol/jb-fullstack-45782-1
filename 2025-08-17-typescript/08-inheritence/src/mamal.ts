import Animal from "./animal.js";

export default class Mamal extends Animal{
    numberOfNipples: number
    
    brestFeed() {
        console.log('im feeding from my mamal mother')
    }

    constructor(weight: number, numberOfNipples: number) {
        super(weight)
        this.numberOfNipples = numberOfNipples
    }
}