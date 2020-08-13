const expect = require("expect");
const fibonacci = require("../fibonacci");

describe("Sum of Odd Fibonacci Numbers", () => {
    test("Num 0", () => {
        const count = 0;
        const expected = [];
        const actual = fibonacci(count);
        expect(actual).toStrictEqual(expected);
    });
    test("Num 1", () => {
        const count = 1;
        const expected = [1];
        const actual = fibonacci(count);
        expect(actual).toStrictEqual(expected);
    });
    test("Num 10", () => {
        const count = 10;
        const expected = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
        const actual = fibonacci(count);
        expect(actual).toStrictEqual(expected);
    });
});
