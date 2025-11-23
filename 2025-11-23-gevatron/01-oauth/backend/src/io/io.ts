import config from 'config'
import io from 'socket.io-client'

const socket = io(`ws://${config.get('io.host')}:${config.get('io.port')}`)

export default socket
