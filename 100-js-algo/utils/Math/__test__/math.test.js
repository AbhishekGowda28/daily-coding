const expect = require("expect");
const { arthimaticProgression, geometricProgression, factorial } = require("../Math");

describe("Arthimatic progression", () => {
    test("Arthimatic progression of a number", () => {
        const initalValue = 1;
        const n = 100;
        const difference = 1;
        const expected = 100;
        const actual = arthimaticProgression(initalValue, difference, n);
        expect(actual).toBe(expected);
    });
});

describe("Geometric progression", () => {
    test("Geometric progression of a number", () => {
        const initalValue = 2;
        const n = 10;
        const ratio = 2;
        const expected = 1024;
        const actual = geometricProgression(initalValue, ratio, n);
        expect(actual).toBe(expected);
    });
});

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
