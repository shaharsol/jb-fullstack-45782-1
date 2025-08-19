import Car from './car.js'

const mazda = new Car('Mazda', '5', 2000, 2010)
console.log(mazda.yearModel)
// console.log(mazda.make)

mazda.setMake('Ford')
console.log(`Mazda was manufactured by ${mazda.getMake()}`)
console.log(`there are currently ${Car.getInstances()} cars in existence`)