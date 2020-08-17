const expect = require("expect");
const sortByHeight = require("../sortByHeight");

describe("Sorting Height", () => {
    test("Sort", () => {
        const arr = [-1, 150, 190, 170, -1, -1, 160, 180];
        const expected = [-1, 150, 160, 170, -1, -1, 180, 190];
        const shallowValue = -1;
        const actual = sortByHeight(arr, shallowValue);
        expect(actual).toStrictEqual(expected);
    });
});
