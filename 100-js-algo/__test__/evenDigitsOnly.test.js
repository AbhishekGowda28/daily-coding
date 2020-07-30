const expect = require("expect");
const { evenDigitsOnly } = require("../evenDigitsOnly");

describe("Even Digits Only", () => {
    test("Only even Numbers", () => {
        const input = 24680;
        const actual = evenDigitsOnly(input);
        expect(actual).toBeTruthy();
    });
    test("Only odd Number", () => {
        const input = 79613;
        const actual = evenDigitsOnly(input);
        expect(actual).toBeFalsy();
    });
    test("Odd and even Numbers", () => {
        const input = 1256;
        const actual = evenDigitsOnly(input);
        expect(actual).toBeFalsy();
    });
    test("Decimal numbers", () => {
        const input = 12.56;
        const actual = evenDigitsOnly(input);
        expect(actual).toBeFalsy();
    });
    test("Negative Numbers", () => {
        const input = -286;
        const actual = evenDigitsOnly(input);
        expect(actual).toBeTruthy();
    });
    test("Number is provided as string", () => {
        const input = "1256";
        const actual = evenDigitsOnly(input);
        expect(actual).toBeFalsy();
    });
    test("Invalid string", () => {
        expect(() => {
            evenDigitsOnly("Numbers");
        }).toThrowError("Invalid Input");
    });
    test("Invalid Input", () => {
        expect(() => {
            evenDigitsOnly(false);
        }).toThrowError("Invalid Input");
    });
});
