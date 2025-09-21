const { createServer } = require('http')

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

const requestHandler = (request, response) => {
    console.log(`url is ${request.url} and method is ${request.method}`)

    switch (request.url) {
        case '/':
            switch (request.method) {
                case 'GET':
                    response.end('hello world')
                    break;
                default:
                    response.writeHead(404).end('not found')
            }
            break;
        case '/users':
            switch (request.method) {
                case 'GET':
                    response.setHeader('Content-Type', 'application/json')
                    response.end(JSON.stringify(users))
                    break;
                default:
                    response.writeHead(404).end('not found')
            }
            break;
        default:
            response.writeHead(404).end('not found')
    }
}


createServer(requestHandler).listen(PORT, () => console.log(`server started on port ${PORT}...`))