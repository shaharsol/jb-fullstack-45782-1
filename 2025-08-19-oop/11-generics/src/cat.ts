import Animal from "./animal.js";

export default class Cat extends Animal {
    constructor(weight: number, public numberOfSoulsLeft: number) {
        super(weight)
    }
}