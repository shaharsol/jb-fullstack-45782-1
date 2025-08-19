import Shape from "./shape.js";

export default class Circle extends Shape {

    calcArea(): number {
        return this.radius * this.radius * Math.PI
    }

    constructor(private radius: number) {
        super()
    }

}