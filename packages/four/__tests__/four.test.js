'use strict';

// const four = require('../src/four');
const four = require("../src/four")
const axios = require('axios')
// const jest = require('jest')
// let forEach = four.forEach
let {
    forEach,
    axiosReq,
    req
} = four

const clog = console.log

// clog(four.axiosReq())

const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

const filterTestFn = jest.fn()
filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false)
const result = [1,2].filter((item) => filterTestFn(item))

jest.mock('axios')


describe('hi group', () => {
    test('str0', () => {
        expect(mockCallback.mock.calls.length).toBe(2)
        expect(mockCallback.mock.calls[0][0]).toBe(0)
    })
    test('str1', () => {
        expect(mockCallback.mock.calls[1][0]).toBe(1)
        expect(mockCallback.mock.results[0].value).toBe(42);
    })
    test('filter', () => {
        // expect(filterTestFn.mock.calls()).toBe()
        expect(result).toContain(1)
        expect(result.length).toBe(1)
    })
})
describe('test mock & promise', () => {
    test('first', () => {
        let et = {
            "code": 0,
            "message": "",
            "data": {
              "name": "tom",
              "age": 5,
              "id": "1234",
              "four": null
            }
          }
        // axiosReq.mockResolvedValue(et)
        // req.mockResolvedValue(et)
        axios.get.mockResolvedValue(et)
        // return axiosReq().then(res => {
        return req().then(res => {
            return expect(res).toEqual(et)
        })
        // return Users.all().then(data => expect(data).toEqual(users));
    })
})