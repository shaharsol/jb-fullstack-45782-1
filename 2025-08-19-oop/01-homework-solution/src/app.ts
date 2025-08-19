import Car from './car.js'

const mazda = new Car('Mazda')
const opel = new Car('Opel')
const tesla = new Car('Tesla')
const opel2 = new Car('Opel')
const tesla2 = new Car('Tesla')

console.log(`there are currently ${Car.getInstances()} cars in existence`)