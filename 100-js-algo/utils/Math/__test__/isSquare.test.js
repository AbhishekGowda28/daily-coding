const expect = require("expect");
const { isSquare } = require("../isSquare");

describe("Check number is square", () => {
    test("perfect square", () => {
        const number = 100;
        const actual = isSquare(number);
        expect(actual).toBeTruthy();
    });
    test("not perfect square", () => {
        const number = 120;
        const actual = isSquare(number);
        expect(actual).toBeFalsy();
    });
});