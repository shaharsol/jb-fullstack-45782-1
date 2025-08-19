import Logger from "./logger.js";

export default class AlertLogger extends Logger {
    message(message: string) {
        alert(message)
    }

}