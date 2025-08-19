import Shape from "./shape.js";

export default class Rectangle extends Shape {

    calcArea(length: number): number {
        return length * length
    }

}