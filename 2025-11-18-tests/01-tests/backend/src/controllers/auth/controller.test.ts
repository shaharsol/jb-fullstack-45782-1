import { randomUUID } from "crypto"
import { hashAndSaltPassword } from "./controller"

describe('unit testing for all auth controller functions', () => {
    describe('unit testing for hashAndSaltPassword', () => {
        test('generates sha256 compatible output', () => {
            const result = hashAndSaltPassword(randomUUID())
            expect(result).toBeDefined()
            expect(result).toHaveLength(64)
            expect(result).toMatch(/^[0-9a-fA-F]+$/)
        })
        test('same plain text generates same hash', () => {
            const plainTextPassword = randomUUID()
            const result1 = hashAndSaltPassword(plainTextPassword)
            const result2 = hashAndSaltPassword(plainTextPassword)
            expect(result1).toEqual(result2)            
        })
        test('different plain text generates different hash', () => {
            const plainTextPassword1 = randomUUID()
            const plainTextPassword2 = randomUUID()
            const result1 = hashAndSaltPassword(plainTextPassword1)
            const result2 = hashAndSaltPassword(plainTextPassword2)
            expect(plainTextPassword1).not.toEqual(plainTextPassword2)           
            expect(result1).not.toEqual(result2)
        })
    })    
})