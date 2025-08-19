import Shape from "./shape.js";
export default class Circle extends Shape {
    calcArea(length) {
        return length * length * Math.PI;
    }
}
