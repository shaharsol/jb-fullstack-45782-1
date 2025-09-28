const express = require('express')
const { toXML } = require('jstoxml')

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

const newProduct = (request, response, next) => {
    // response.writeHead(201)
    // response.end('saving product in database....')
    response.status(201).send('saving saving product in database....')
    next()
}

const productsRouter = express.Router()

productsRouter.use('/', connectMongo)
productsRouter.get('/', getProducts)
productsRouter.post('/', newProduct)
productsRouter.use('/', disconnectMongo)

module.exports = productsRouter