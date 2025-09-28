const express = require('express')
const { toXML } = require('jstoxml')

const users = [
    {
        id: 1,
        name: 'Bob',
    },
    {
        id: 2,
        name: 'Alice',
    },
    {
        id: 3,
        name: 'Diana',
    }
]

const products = [
    {
        id: 1,
        name: 'Mike'
    },
    {
        id: 2,
        name: 'Adidos'
    },
    {
        id: 3,
        name: 'Buma'
    }
]


const PORT = process.env.PORT || 3000

// a middleware in express is a function with the following signature: (request, response, next): void
const logRequest = (request, response, next) => {
    console.log('logging request...')
    next() // this is how i let express know that i have finished running
    // and it could forward the wand to the next middleware
}

const connectMysql = (request, response, next) => {
    const db = { version: 'MySQL 5.1' }
    request.db = db
    console.log('connecting to mysql...')
    next() // calling next without any param, signifies success

    // next('error') // calling next with a param, means there was an error
}

const disconnectMysql = (request, response, next) => {
    console.log('disconnecting from mysql...')
    next()
}

const connectMongo = (request, response, next) => {
    console.log('connecting to mongo...')
    next()
}

const disconnectMongo = (request, response, next) => {
    console.log('disconnecting from mongo...')
    // next()
}

const getProducts = (request, response, next) => {
    response.setHeader('Content-Type', 'application/xml')
    response.end(toXML(products))
    next()
}

const getUsers = (request, response, next) => {
    // response.setHeader('Content-Type', 'application/json')
    // response.end(JSON.stringify(users))
    console.log(`db connection is`, request.db)
    response.json(users)
    next()
}

const newUser = (request, response, next) => {
    console.log('saving user....')
    // response.writeHead(201)
    // response.end('saved user in database...')
    response.status(201).send('saved user in database...')
    console.log('responded...')
    next()
}

const notFound = (request, response, next) => {
    response.status(404).send('yo bro, what u want is not here... with accent')
}

const errorLogger = (err, request, response, next) => {
    console.error(err)
    next(err)
}

const pagerDuty = (err, request, response, next) => {
    console.log('sending page to Ido')
    next(err)
}

const errorResponder = (err, request, response, next) => {
    response.status(err.status || 500).send(err || 'internal server error...')
}



// a middleware that ends the response is sometimes called controller
// usually there will not be a next() invocations in controllers
const newProduct = (request, response, next) => {
    // response.writeHead(201)
    // response.end('saving product in database....')
    response.status(201).send('saving saving product in database....')
    next()
}
const app = express()

app.use('/', logRequest)
app.use('/users', connectMysql)
app.get('/users', getUsers)
app.post('/users', newUser)
app.use('/users', disconnectMysql) // /users /users/123 /users/123/child/567 
app.use('/products', connectMongo)
app.get('/products', getProducts)
app.post('/products', newProduct)
app.use('/products', disconnectMongo)

// not found 404 middleware
app.use(notFound)

// // error middlewares
app.use(errorLogger)
app.use(pagerDuty)
app.use(errorResponder)

app.listen(PORT, () => console.log(`server started on port ${PORT}...`))