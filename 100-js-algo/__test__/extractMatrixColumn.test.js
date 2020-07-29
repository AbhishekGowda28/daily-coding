const expect = require(`expect`);
const { extractMatrixColumn } = require(`../extractMatrixColumn`);

describe(`Extracting element from column`, () => {
    test(`Valid Matrix and Column`, () => {
        const matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]];
        const column = 2;
        const expected = [1, 0, 3];
        const actual = extractMatrixColumn(matrix, column);
        expect(actual).toStrictEqual(expected);
    });

    test(`Column is greater than the size`, () => {
        const matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]];
        const column = 12;
        const expected = [];
        const actual = extractMatrixColumn(matrix, column);
        expect(actual).toStrictEqual(expected);
    });

    test(`Invalid input`, () => {
        expect(() => {
            const matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]];
            const column = `5`;
            extractMatrixColumn(matrix, column);
        }).toThrowError(`Invalid Input`);
    });
});
