const expect = require("expect");
const { arthimaticProgression } = require("../Math");

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
