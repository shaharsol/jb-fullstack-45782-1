export default class Phone {
    model: string
    size: number
    price: number
    generation: number

    constructor(model: string, size: number, price: number, generation: number) {
        this.model = model
        this.size = size
        this.price = price,
        this.generation = generation
    }

    turnOn() {
        console.log('device is on')
    }

    turnOff() {
        console.log('device is off')
    }

    takePic() {
        console.log('say cheese...')
    }

}