import Logger from "./logger.js";
export default class AlertLogger extends Logger {
    message(message) {
        alert(message);
    }
}
