const logRequest = (request, response, next) => {
    console.log('logging request...')
    next() // this is how i let express know that i have finished running
    // and it could forward the wand to the next middleware
}

module.exports = logRequest
