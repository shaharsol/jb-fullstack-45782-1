import Shape from "./shape.js";

export default class Circle extends Shape {

    calcArea(length: number): number {
        return length * length * Math.PI
    }

}