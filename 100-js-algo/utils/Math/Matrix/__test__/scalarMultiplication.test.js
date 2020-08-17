const expect = require("expect");
const scalarMultiplication = require("../scalarMultiplication");

describe("Scalar Multiplication of a matrix", () => {
    test("Rectangular Matrix", () => {
        const matrix = [[1, 2, 3], [4, 5, 6]];
        const scalarValue = 2;
        const expected = [[2, 4, 6], [8, 10, 12]];
        const actual = scalarMultiplication(scalarValue, matrix);
        expect(actual).toStrictEqual(expected);
    });
    test("Square Matrix", () => {
        const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const scalarValue = 2;
        const expected = [[2, 4, 6], [8, 10, 12], [14, 16, 18]];
        const actual = scalarMultiplication(scalarValue, matrix);
        expect(actual).toStrictEqual(expected);
    });
});
