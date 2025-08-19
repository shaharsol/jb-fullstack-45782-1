export default class Car {
    // make: string
    // model: string
    // engineVolume: number
    // yearModel: number
    static count: number = 0

    // constructor(make: string, model: string, engineVolume: number, yearModel: number) {
    //     this.make = make
    //     this.engineVolume = engineVolume
    //     this.model = model
    //     this.yearModel = yearModel
    //     Car.count++
    // }


    /*
    if we mention the access modifier WITHIN the constructor argument list, TS knows to:
    1. declare the variables as members
    2. accept them to the constructor
    3. make the assignments automatically
    */
    constructor(
        private make: string,
        protected model: string,
        public engineVolume: number,
        public yearModel: number
    ) {
        Car.count++
    }

    setMake(make: string) {
        // 
        this.make = make
    }

    public getMake() {
        // 
        return this.make
    }


    static getInstances() {
        return Car.count
    }


}