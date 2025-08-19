import Shape from "./shape.js";
export default class Circle extends Shape {
    calcArea() {
        return this.radius * this.radius * Math.PI;
    }
    constructor(radius) {
        super();
        this.radius = radius;
    }
}
