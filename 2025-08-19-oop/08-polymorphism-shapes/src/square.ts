import Shape from "./shape.js";

export default class Square extends Shape {

    calcArea(): number {
        return this.rib * this.rib
    }

    constructor(private rib: number) {
        super()
    }

}