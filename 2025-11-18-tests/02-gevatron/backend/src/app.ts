import express, { json } from 'express'
import logger from './middlewares/error/logger';
import responder from './middlewares/error/responder';
import notFound from './middlewares/not-found';
import authRouter from './routers/auth'
import profileRouter from './routers/profile'
import feedRouter from './routers/feed'
import followsRouter from './routers/follows'
import commentsRouter from './routers/comments'
import config from 'config'
import sequelize from './db/sequelize';
import enforceAuth from './middlewares/enforce-auth';
import cors from 'cors'
import { createAppBucketIfNotExists, testUpload } from './aws/aws';
import fileUpload from 'express-fileupload';

const app = express()


const secret = config.get<string>('app.secret')

console.log(`app secret is ${secret}`)

app.use(cors())

// post decypher middlewares
app.use(json())
app.use(fileUpload())

// load routers
app.use('/auth', authRouter)
app.use(enforceAuth)
app.use('/profile', profileRouter)
app.use('/feed', feedRouter)
app.use('/follows', followsRouter)
app.use('/comments', commentsRouter)

// not found
app.use(notFound)

// error middlewares
app.use(logger)
app.use(responder);


export async function start() {
    // synchronize database schema (not data) changes to the database
    // i.e syncs our TypeScript models folder into the actual SQL Schema
    // sequelize.sync({ force: true })
    await sequelize.sync({ force: process.argv[2] === 'sync' })

    await createAppBucketIfNotExists()
    // testUpload()

    console.log(process.argv)

    // app.listen(port, () => console.log(`${appName} started on port ${port}`))
}

export default app
