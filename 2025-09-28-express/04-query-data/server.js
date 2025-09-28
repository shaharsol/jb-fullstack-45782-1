const { createServer } = require('http')
const { toXML } = require('jstoxml')

const PORT = process.env.PORT || 3000

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


const logRequest = () => {
    console.log('logging request...')
}

const connectMysql = () => {
    console.log('connecting to mysql...')
}

const disconnectMysql = () => {
    console.log('disconnecting to mysql...')
}

const connectMongo = () => {
    console.log('connecting to mongo...')
}

const disconnectMongo = () => {
    console.log('disconnecting to mongo...')
}

const requestHandler = (request, response) => {
    console.log(`url is ${request.url} and method is ${request.method}`)

    logRequest()

    switch (request.url) {
        case '/':
            switch (request.method) {
                case 'GET':
                    response.end('hello world')
                    break;
                default:
                    response.writeHead(404).end('not found')
                    break;
            }
            break;
        case '/users':

            connectMysql()

            switch (request.method) {
                case 'GET':
                    response.setHeader('Content-Type', 'application/json')
                    response.end(JSON.stringify(users))
                    break;
                case 'POST':

                    console.log('saving user....')
                    response.writeHead(201)
                    response.end('saved user in database...')
                    console.log('responded...')
                    break;
                default:
                    response.writeHead(404).end('not found')
            }

            disconnectMysql();

            break;
        case '/products':

            connectMongo()

            switch (request.method) {
                case 'GET':
                    response.setHeader('Content-Type', 'application/xml')
                    response.end(toXML(products))
                    break;
                case 'POST':
                    response.writeHead(201)
                    response.end('saving product in database....')
                    break;
                default:
                    response.writeHead(404).end('not found')
                    break;
            }

            disconnectMongo()
            break;
        default:
            response.writeHead(404).end('not found')
    }
}


createServer(requestHandler).listen(PORT, () => console.log(`server started on port ${PORT}...`))