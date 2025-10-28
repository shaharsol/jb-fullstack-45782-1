import { Server } from "socket.io";
import { randomUUID } from 'crypto'

const ioServer = new Server({
   cors: {
       origin: "*"
   } 
})

ioServer.on('connection', socket => {
    const id = randomUUID()
    console.log(`new connection to server from ${id}`)
    socket.emit('welcome', { id })
    ioServer.emit('new user joined', { id })
    socket.on('disconnect', () => {
        console.log(`user id ${id} disconnected`)
    })
})

ioServer.listen(3004)
console.log('io server started...')