import type { AppDispatch } from "../../../redux/store";

export default abstract class Dispatcher {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    abstract shouldDispatch(payload: any): boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    abstract doDispatch(payload: any): void

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(public userId: string, public dispatch: AppDispatch) { }
}