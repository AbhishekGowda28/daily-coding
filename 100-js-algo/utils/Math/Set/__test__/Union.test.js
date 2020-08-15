const expect = require("expect");
const Union = require("../Union");

describe("Union of sets", () => {
    test("Array as elements", () => {
        const _setA = new Set([1, 2, 3]);
        const _setB = new Set([4, 5, 6]);
        const expected = [1, 2, 3, 4, 5, 6];
        const actual = Union(_setA, _setB);
        expect(actual).toStrictEqual(expected);
    });
    test("Map as elements", () => {
        const _mapA = new Map({ a: 1, b: 2, c: 3 });
        const _mapB = new Map({ d: 4, e: 5, f: 6 });
        const _setA = new Set(_mapA);
        const _setB = new Set(_mapB);
        const expected = [1, 2, 3, 4, 5, 6];
        const actual = Union(_setA, _setB);
        console.log(actual)
        expect(actual).toStrictEqual(expected);
    });
});
