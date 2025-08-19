import Logger from "./logger.js";

export default class ConsoleLogger extends Logger {
    message(message: string): void {
        console.log(message)
    }

}