import express, { NextFunction, Request, Response } from 'express'

const app = express()

function logRequest(req: Request, res: Response, next: NextFunction) {
    console.log('logging request very very very good')
}

app.use('/', logRequest)

app.listen(3000)