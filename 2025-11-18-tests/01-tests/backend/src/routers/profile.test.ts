import request from 'supertest'
import app, { start } from '../app'
import { sign } from 'jsonwebtoken'
import config from 'config'

describe('profile routers tests', () => {
    describe('GET / tests', () => {
        test('returns 401 if no auth header', async () => {
            await start()
            const result = await request(app).get('/profile')
            expect(result.statusCode).toBe(401)
        })
        test('it should return an array of posts', async () => {
            const jwt = sign('1230ae30-dc4f-4752-bd84-092956f5c633', config.get('app.jwtSecret'))
            // sign up as a new user (Malcolm)
            // add some posts as new user
            await start()
            const result = await request(app)
                .get('/profile')
                .set({
                    authorization: `Bearer ${jwt}`
                })
            expect(result.statusCode).toBe(200)

        })
    })    
})