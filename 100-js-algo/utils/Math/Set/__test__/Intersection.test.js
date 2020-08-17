const expect = require("expect");
const Intersection = require("../Intersection");

describe("Intersection of set", () => {
    test("Intersection", () => {
        const setA = new Set([1, 2, 3, 4, 5]);
        const setB = new Set([0, 2, 4, 6]);
        const expected = [2, 4];
        const actual = Array.from(Intersection(setA, setB));
        expect(actual).toStrictEqual(expected);
    });
});
