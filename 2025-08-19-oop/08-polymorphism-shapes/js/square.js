import Shape from "./shape.js";
export default class Square extends Shape {
    calcArea(length) {
        return length * length;
    }
}
