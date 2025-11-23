import { randomUUID } from "crypto";
import enforceAuth from "./enforce-auth"
import { NextFunction, Request, Response } from "express";
import { sign } from "jsonwebtoken";
import config from 'config'

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
    test('calls next with status 401 when jwt is missing', () => {
        // mocking
        const request = {
            get: (key: string) => 'Baerer'
        } as Request
        const response = {} as Response
        const next = jest.fn(err => {})
        enforceAuth(request, response, next)
        expect(next.mock.calls.length).toBe(1)
        expect(next.mock.calls[0][0]).toEqual({
            status: 401,
            message: 'missing jwt'
        })

        // [ [ {status: 401, message: ''} ] ]
    })
    test('success when all is valid', () => {
        // mocking
        const jwt = sign(randomUUID(), config.get<string>('app.jwtSecret'))
        const request = {
            get: (key: string) => `Baerer ${jwt}`
        } as Request
        const response = {} as Response
        const next = jest.fn(err => {})
        enforceAuth(request, response, next)
        expect(next.mock.calls.length).toBe(1)
        expect(next.mock.calls[0][0]).toBeUndefined

        // [ [ {status: 401, message: ''} ] ]
    })

})