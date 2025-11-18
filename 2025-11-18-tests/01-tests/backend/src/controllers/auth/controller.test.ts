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
    })    
})