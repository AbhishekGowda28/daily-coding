const expect = require("expect");
const addition = require("../addition");

describe("Addition of a matrix", () => {
    test("Rectangular Matrix", () => {
        const matrix1 = [[1, 2, 3], [4, 5, 6]];
        const matrix2 = [[7, 8, 9], [4, 5, 6]];
        const expected = [[8, 10, 12], [8, 10, 12]];
        const actual = addition(matrix1, matrix2);
        expect(actual).toStrictEqual(expected);
    });
    test("Square Matrix", () => {
        const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const matrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const expected = [[2, 4, 6], [8, 10, 12], [14, 16, 18]];
        const actual = addition(matrix1, matrix2);
        expect(actual).toStrictEqual(expected);
    });
});
