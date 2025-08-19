class Car {
    constructor(make) {
        this.make = make;
        Car.count++;
    }
    static getInstances() {
        return Car.count;
    }
}
Car.count = 0;
export default Car;
