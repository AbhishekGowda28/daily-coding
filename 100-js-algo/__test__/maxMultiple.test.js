const expect = require("expect");
const { maxMultiple } = require("../maxMultiple");

describe("Maximum Multiple of Divisor", () => {
    test("Multiple less than bound", () => {
        const divisor = 3;
        const bound = 20;
        const expected = 18;
        const actual = maxMultiple(divisor, bound);
        expect(actual).toBe(expected);
    });
});
