const errorLogger = (err, request, response, next) => {
    console.error(err)
    next(err)
}

module.exports = errorLogger