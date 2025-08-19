import Shape from "./shape.js";
export default class Rectangle extends Shape {
    calcArea() {
        return this.width * this.height;
    }
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}
