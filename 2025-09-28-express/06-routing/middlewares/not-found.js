const notFound = (request, response, next) => {
    response.status(404).send('yo bro, what u want is not here... with accent')
}

module.exports = notFound