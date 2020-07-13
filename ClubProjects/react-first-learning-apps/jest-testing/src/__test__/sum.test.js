// const expect = require('expect');
const expect = require('expect');
const sum = require('../sum');
// import sum from '../sum';

describe("Addition", () => {
    /*
        //test-suite-setUp
        beforeAll(()=>{
            console.log("Run once");
        });

        //test-suite-tearDown
        afterAll(()=>{
            console.log("Run at the End");
        });

        //test-setUp
        beforeEach(()=>{
            console.log("Test-Start");
        });


        //test-tearDown
        afterEach(()=>{
            console.log("Test-Ended");
        });*/

    // test
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    it('adds 4 + 2 to equal 6', () => {
        expect(sum(4, 2)).toBe(6);
    });
    it('adds 5 + 2 to equal 7', () => {
        expect(sum(5, 2)).toBe(7);
    });
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});