import AlertLogger from "./alert.js";
import ConsoleLogger from "./console.js";
import Logger from "./logger.js";


function getLogger(name: string): Logger {
    switch (name) {
        case 'console':
            return new ConsoleLogger()
        case 'alert':
            return new AlertLogger()
        default:
            throw new Error('unknown logger')
    }
}

const logger = getLogger('alert')
logger.message('poly wants a cracker')