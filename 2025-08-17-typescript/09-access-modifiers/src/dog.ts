import Animal from "./animal.js"

export default class Dog extends Animal{
    canine: string
    
    bark() {
        console.log('woof woof')
    }

    constructor (weight: number, canine: string) {
        super(weight)
        this.canine = canine
    }
}