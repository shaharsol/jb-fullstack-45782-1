const express = require('express')
const { toXML } = require('jstoxml')
const axios = require('axios')

const PORT = process.env.PORT || 3000

// a middleware in express is a function with the following signature: (request, response, next): void

const notFound = (request, response, next) => {
    response.status(404).send('yo bro, what u want is not here... with accent')
}

const errorResponder = (err, request, response, next) => {
    response.status(err.status || 500).send(err.message || 'internal server error...')
}

const getUsers = async (req, res, next) => {
    try {
        const axiosResponse = await axios('https://dummyjson.com/users')
        req.users = axiosResponse.data.users
        next()
    } catch (e) {
        next(e)
    }
}

const filterUsers = async (req, res, next) => {
    if (req.query.name) {
        req.users = req.users.filter(u => u.firstName.includes(req.query.name))
    }
    next()
}

const respond = async (req, res, next) => {
    if (req.query.format === 'xml') {
        res.setHeader('Content-type', 'application/xml')
        res.end(toXML(req.users))
    } else {
        res.json(req.users)
    }
}

const app = express()

app.get('/users', getUsers, filterUsers, respond)

// not found 404 middleware
app.use(notFound)

// error middlewares
app.use(errorResponder)


app.listen(PORT, () => console.log(`server started on port ${PORT}...`))