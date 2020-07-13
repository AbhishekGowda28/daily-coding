// import expect from 'expect';
const expect = require('expect');

// import palindrom from './utils.palindrom';
const palindrom = require('./utils');


it("should check given string is palindrom", ()=>{
    var result = palindrom("ABCBA");
    expect(["ABCBA"]).toBe(result);
});