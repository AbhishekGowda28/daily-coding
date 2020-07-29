const expect = require(`expect`);
const { checkPalindrome } = require(`../checkPalindrome`);

describe(`Check for the string to be palindrom`, () => {
    test(`String is a palindrom`, () => {
        const inputString = `AMMA`;
        const actual = checkPalindrome(inputString);
        expect(actual).toBeTruthy();
    });
    test(`String is not a palindrom`, () => {
        const inputString = `PEN`;
        const actual = checkPalindrome(inputString);
        expect(actual).toBeFalsy();
    });
    test(`Single Character`, () => {
        const inputString = `A`;
        const actual = checkPalindrome(inputString);
        expect(actual).toBeTruthy();
    });
});
