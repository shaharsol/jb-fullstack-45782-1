export default class Phone {
    constructor(model, size, price, generation) {
        this.model = model;
        this.size = size;
        this.price = price,
            this.generation = generation;
    }
    turnOn() {
        console.log('device is on');
    }
    turnOff() {
        console.log('device is off');
    }
    takePic() {
        console.log('say cheese...');
    }
}
