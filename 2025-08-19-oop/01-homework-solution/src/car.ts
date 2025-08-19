export default class Car {
    make: string
    static count: number = 0

    constructor(make: string) {
        this.make = make
        Car.count++
    }

    static getInstances() {
        return Car.count
    }


}