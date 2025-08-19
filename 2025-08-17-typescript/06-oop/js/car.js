class Car {
    // methods (e.g. function)
    ignite() {
        console.log('car igniting...');
        // this.engineNumber = 123
    }
    getPrice() {
        return this.price * Car.vat;
    }
    constructor(make, model, engineVolume, yearModel, price) {
        this.make = make; // this, will always refer to the object that owns the function
        this.model = model;
        this.engineVolume = engineVolume;
        this.yearModel = yearModel;
        this.engineNumber = Math.random() * 1000000; // constructor is the ONLY place where you can modify an readonly memeber
        this.price = price;
    }
}
Car.vat = 1.18;
export default Car;
