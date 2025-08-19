export default class AlertLogger {

    static instance: AlertLogger = new AlertLogger()

    static getInstance(): AlertLogger {
        return AlertLogger.instance
    }

    message(message: string) {
        alert(message)
    }

    private constructor() {
    }

}