const express = require('express')

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

const usersRouter = express.Router()

usersRouter.use('/', connectMysql)
usersRouter.get('/', getUsers)
usersRouter.post('/', newUser)
usersRouter.use('/', disconnectMysql)

module.exports = usersRouter