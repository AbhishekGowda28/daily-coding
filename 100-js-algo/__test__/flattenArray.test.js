const expect = require(`expect`);
const { flattenArray } = require(`../flattenArray`);

describe(`Flatten Array`, () => {
    test(`Single array`, () => {
        const inputArray = [1, `a`, 3, 4, 5, 5, `b`];
        const expected = [1, `a`, 3, 4, 5, 5, `b`];
        const actual = flattenArray(inputArray);
        expect(actual).toStrictEqual(expected);
    });
    test(`Nested array`, () => {
        const inputArray = [[1, [2], [3, [[4]]]]];
        const expected = [1, 2, 3, 4];
        const actual = flattenArray(inputArray);
        expect(actual).toStrictEqual(expected);
    });
});
