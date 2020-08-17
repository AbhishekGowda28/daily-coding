const expect = require("expect");
const shapeArea = require("../shapeArea");

describe("Area Shape for given number", () => {
    test("Number 1", () => {
        const num = 1;
        const expected = 1;
        const actual = shapeArea(num);
        expect(actual).toBe(expected);
    });
    test("Number 1", () => {
        const num = 5;
        const expected = 41;
        const actual = shapeArea(num);
        expect(actual).toBe(expected);
    });
    test("Number 10", () => {
        const num = 10;
        const expected = 181;
        const actual = shapeArea(num);
        expect(actual).toBe(expected);
    });
});
