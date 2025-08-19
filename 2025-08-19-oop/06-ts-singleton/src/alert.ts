class AlertLogger {

    message(message: string) {
        alert(message)
    }

}

const alertLogger = new AlertLogger()
export default alertLogger