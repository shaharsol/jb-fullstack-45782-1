import Circle from "./circle.js";
import Rectangle from "./rectangle.js";
import Square from "./square.js";
const shape = +prompt('enter 1 - square, 2 - rect, 3 - circle');
function getShape(shape) {
    switch (shape) {
        case 1:
            return new Square(10);
        case 2:
            return new Rectangle(10, 10);
        case 3:
            return new Circle(10);
    }
}
const actualShape = getShape(shape);
console.log(`area of shape is: ${actualShape.calcArea()}`);
