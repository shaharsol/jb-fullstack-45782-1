import Circle from "./circle.js"
import Rectangle from "./rectangle.js"
import Shape from "./shape.js"
import Square from "./square.js"

const shape = +prompt('enter 1 - square, 2 - rect, 3 - circle')

function getShape(shape: number): Shape {
    switch (shape) {
        case 1:
            return new Square()
        case 2:
            return new Rectangle()
        case 3:
            return new Circle()

    }
}


const actualShape = getShape(shape)

console.log(`area of shape is: ${actualShape.calcArea(10)}`)