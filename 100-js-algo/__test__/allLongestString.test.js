const expect = require(`expect`);
const { longestString } = require(`../allLongestString`);

describe(`All longest string`, () => {
    test(`Random Array`, () => {
        const input = [`aba`, `aa`, `ad`, `vcd`, `aba`];
        const expected = [`aba`, `vcd`, `aba`];
        const actual = longestString(input);
        expect(actual).toEqual(expected);
    });
    test(`Array with empty string`, () => {
        const input = [``, `af`];
        const expected = [`af`];
        const actual = longestString(input);
        expect(actual).toEqual(expected);
    });
    test(`Array with single string`, () => {
        const input = [`aabb`];
        const expected = [`aabb`];
        const actual = longestString(input);
        expect(actual).toEqual(expected);
    });
    test(`Array with only empty stings`, () => {
        const input = [``, ``, ``, ``];
        const expected = [``, ``, ``, ``];
        const actual = longestString(input);
        expect(actual).toEqual(expected);
    });
    test(`Empty array`, () => {
        const input = [];
        const expected = [];
        const actual = longestString(input);
        expect(actual).toEqual(expected);
    });
    test(`All string with same length`, () => {
        const input = [`1`, `2`, `3`, `4`];
        const expected = [`1`, `2`, `3`, `4`];
        const actual = longestString(input);
        expect(actual).toEqual(expected);
    });
    test(`All same string`, () => {
        const input = [`a`, `a`, `a`, `a`, `a`];
        const expected = [`a`, `a`, `a`, `a`, `a`];
        const actual = longestString(input);
        expect(actual).toEqual(expected);
    });
});
