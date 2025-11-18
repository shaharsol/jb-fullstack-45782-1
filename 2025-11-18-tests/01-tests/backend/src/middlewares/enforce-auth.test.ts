import enforceAuth from "./enforce-auth"
import { NextFunction, Request, Response } from "express";

describe('enforce auth unit testing', () => {
    test('calls next with status 401 when authorization header missing', () => {
        // mocking
        const request = {
            headers: {
            },
            get: (key: string) => ''
        } as Request
        const response = {} as Response
        const next = jest.fn(err => {})
        enforceAuth(request, response, next)
        expect(next.mock.calls.length).toBe(1)
        expect(next.mock.calls[0][0]).toEqual({
            status: 401,
            message: 'missing Bearer keyword'
        })

        // [ [ {status: 401, message: ''} ] ]
    })
    test('calls next with status 401 when bearer keyword is mispelled', () => {
        // mocking
        const request = {
            headers: {
                authorization: 'Baerer eyfhjhgjkdfhkjgdfh'
            },
            get: (key: string) => 'Baerer eyfhjhgjkdfhkjgdfh'
        } as Request
        const response = {} as Response
        const next = jest.fn(err => {})
        enforceAuth(request, response, next)
        expect(next.mock.calls.length).toBe(1)
        expect(next.mock.calls[0][0]).toEqual({
            status: 401,
            message: 'missing Bearer keyword'
        })

        // [ [ {status: 401, message: ''} ] ]
    })
})