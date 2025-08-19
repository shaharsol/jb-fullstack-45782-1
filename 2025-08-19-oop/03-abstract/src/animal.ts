export default abstract class Animal {
    weight: number

    abstract defecate(): void

    constructor(weight: number) {
        this.weight = weight
    }
}