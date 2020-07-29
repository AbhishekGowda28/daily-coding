const expect = require("expect");
const { geometricProgression } = require("../geometricProgression");

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
