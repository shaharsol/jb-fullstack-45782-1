import express from 'express'
import logger from './middlewares/error/logger';
import responder from './middlewares/error/responder';
import notFound from './middlewares/not-found';
import profileRouter from './routers/profile'

const PORT = 3000;

const app = express()

// load routers
app.use('/profile', profileRouter)

// not found
app.use(notFound)

// error middlewares
app.use(logger)
app.use(responder)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))