import Logger from "./logger.js";
export default class ConsoleLogger extends Logger {
    message(message) {
        console.log(message);
    }
}
