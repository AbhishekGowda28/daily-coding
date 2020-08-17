const expect = require("expect");
const Union = require("../Union");

describe("Union of sets", () => {
    test("Array as elements", () => {
        const _setA = new Set([1, 2, 3]);
        const _setB = new Set([4, 5, 6]);
        const expected = [1, 2, 3, 4, 5, 6];
        const actual = Array.from(Union(_setA, _setB));
        expect(actual).toStrictEqual(expected);
    });
});
