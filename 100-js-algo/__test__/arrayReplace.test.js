const expect = require(`expect`);
const { arrayReplace } = require(`../arrayReplace`);

describe(`Array Element Replace`, () => {
    test(`Empty input arry`, () => {
        const inputArray = [];
        const elementToReplace = ``;
        const substituteElement = ``;
        const expected = [];
        const actual = arrayReplace(inputArray, elementToReplace, substituteElement);
        expect(actual).toStrictEqual(expected);
    });
    test(`Element to replace`, () => {
        const inputArray = [1, 2, 1];
        const elementToReplace = 1;
        const substituteElement = 3;
        const expected = [3, 2, 3];
        const actual = arrayReplace(inputArray, elementToReplace, substituteElement);
        expect(actual).toStrictEqual(expected);
    });
    test(`Replace element not present in the array`, () => {
        const inputArray = [1, 2, 1];
        const elementToReplace = 5;
        const substituteElement = 3;
        const expected = [1, 2, 1];
        const actual = arrayReplace(inputArray, elementToReplace, substituteElement);
        expect(actual).toStrictEqual(expected);
    });
    test(`Empty Substitute element`, () => {
        const inputArray = [1, 2, 1];
        const elementToReplace = 1;
        const substituteElement = ``;
        const expected = [1, 2, 1];
        const actual = arrayReplace(inputArray, elementToReplace, substituteElement);
        expect(actual).toStrictEqual(expected);
    });
    test(`String of array`, () => {
        const inputArray = [`a`, `b`, `c`, `d`];
        const elementToReplace = `d`;
        const substituteElement = `c`;
        const expected = [`a`, `b`, `c`, `c`];
        const actual = arrayReplace(inputArray, elementToReplace, substituteElement);
        expect(actual).toStrictEqual(expected);
    });
});
