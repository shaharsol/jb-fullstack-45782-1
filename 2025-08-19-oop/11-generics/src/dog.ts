import Animal from "./animal.js";

export enum Canine {
    BorderColie = 'Border Colie',
    Labrador = 'Labrador',
    ShiTzu = 'Shi Tzu'
}
export default class Dog extends Animal {

    constructor(weight: number, public canine: Canine) {
        super(weight) // invokes the constructor of the class I inherit from
    }

}