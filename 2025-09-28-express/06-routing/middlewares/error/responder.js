const errorResponder = (err, request, response, next) => {
    response.status(err.status || 500).send(err || 'internal server error...')
}

module.exports = errorResponder