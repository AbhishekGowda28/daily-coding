const expect = require("expect");
const {  factorial } = require("../factorial");

describe("Factorial", () => {
    test("When number is 0", () => {
        const input = 0;
        const actual = factorial(input);
        const expected = 1;
        expect(actual).toBe(expected);
    });
    test("When number is 1", () => {
        const input = 1;
        const actual = factorial(input);
        const expected = 1;
        expect(actual).toBe(expected);
    });
    test("When number is negative", () => {
        const input = -50;
        const actual = factorial(input);
        const expected = 1;
        expect(actual).toBe(expected);
    });
    test("When number is positive", () => {
        const input = 5;
        const actual = factorial(input);
        const expected = 120;
        expect(actual).toBe(expected);
    });
});
