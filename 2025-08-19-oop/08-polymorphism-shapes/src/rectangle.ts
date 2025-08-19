import Shape from "./shape.js";

export default class Rectangle extends Shape {

    calcArea(): number {
        return this.width * this.height
    }

    constructor(private width: number, private height: number) {
        super()
    }

}