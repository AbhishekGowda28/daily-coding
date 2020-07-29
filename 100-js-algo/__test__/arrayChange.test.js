const expect = require(`expect`);
const { arrayChange } = require(`../arrayChange`);

describe(`Array Change to find increasing sequence`, () => {
    test(`Elements are same`, () => {
        const input = [1, 1, 1];
        const output = 3;
        const actual = arrayChange(input);
        expect(actual).toBe(output);
    });
    test(`Elements are 0`, () => {
        const input = [0, 0, 0, 0, 0];
        const output = 10;
        const actual = arrayChange(input);
        expect(actual).toBe(output);
    });
    test(`Empty array`, () => {
        const input = [];
        const output = 0;
        const actual = arrayChange(input);
        expect(actual).toBe(output);
    });
    test(`Elements are in ascending order`, () => {
        const input = [1, 2, 3, 5];
        const output = 0;
        const actual = arrayChange(input);
        expect(actual).toBe(output);
    });
    test(`Elements are in descending order`, () => {
        const input = [5, 4, 3, 2];
        const output = 12;
        const actual = arrayChange(input);
        expect(actual).toBe(output);
    });
});
