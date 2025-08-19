import Shape from "./shape.js";
export default class Square extends Shape {
    calcArea() {
        return this.rib * this.rib;
    }
    constructor(rib) {
        super();
        this.rib = rib;
    }
}
