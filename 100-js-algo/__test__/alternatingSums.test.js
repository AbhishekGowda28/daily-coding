const expect = require(`expect`);
const { alternatingSums } = require(`../alternatingSums`);

describe(`Alternating sum`, () => {
    test(`Empty array`, () => {
        const input = [];
        const expected = [0, 0];
        const actual = alternatingSums(input);
        expect(actual).toStrictEqual(expected);
    });
    test(`Single Element`, () => {
        const input = [98];
        const expected = [98, 0];
        const actual = alternatingSums(input);
        expect(actual).toStrictEqual(expected);
    });
    test(`Random positive Element`, () => {
        const input = [98, 3, 8, 6, 2];
        const expected = [108, 9];
        const actual = alternatingSums(input);
        expect(actual).toStrictEqual(expected);
    });
    test(`Random negative Element`, () => {
        const input = [-98, -3, -8, -6, -2];
        const expected = [-108, -9];
        const actual = alternatingSums(input);
        expect(actual).toStrictEqual(expected);
    });
    test(`All zero Element`, () => {
        const input = [0, 0, 0, 0, 0];
        const expected = [0, 0];
        const actual = alternatingSums(input);
        expect(actual).toStrictEqual(expected);
    });
    test(`Odd aternative zero Element`, () => {
        const input = [0, 10, 0, 5, 0];
        const expected = [0, 15];
        const actual = alternatingSums(input);
        expect(actual).toStrictEqual(expected);
    });
    test(`Odd aternative zero Element`, () => {
        const input = [10, 0, 5, 0];
        const expected = [15, 0];
        const actual = alternatingSums(input);
        expect(actual).toStrictEqual(expected);
    });
    test(`Random Element`, () => {
        const input = [50, 60, 60, 45, 70];
        const expected = [180, 105];
        const actual = alternatingSums(input);
        expect(actual).toStrictEqual(expected);
    });
});
