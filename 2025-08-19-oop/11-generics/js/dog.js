import Animal from "./animal.js";
export var Canine;
(function (Canine) {
    Canine["BorderColie"] = "Border Colie";
    Canine["Labrador"] = "Labrador";
    Canine["ShiTzu"] = "Shi Tzu";
})(Canine || (Canine = {}));
export default class Dog extends Animal {
    constructor(weight, canine) {
        super(weight); // invokes the constructor of the class I inherit from
        this.canine = canine;
    }
}
