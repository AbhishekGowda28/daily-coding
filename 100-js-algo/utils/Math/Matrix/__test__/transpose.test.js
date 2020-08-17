const expect = require("expect");
const transpose = require("../transpose");

describe("Transpose of a matrix", () => {
    test("Rectangular Matrix", () => {
        const matrix = [[1, 2, 3], [4, 5, 6]];
        const expected = [[1, 4], [2, 5], [3, 6]];
        const actual = transpose(matrix);
        expect(actual).toStrictEqual(expected);
    });
    test("Square Matrix", () => {
        const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const expected = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
        const actual = transpose(matrix);
        expect(actual).toStrictEqual(expected);
    });
});
