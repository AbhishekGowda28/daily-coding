const expect = require("expect");
const { fahrenheitToKelvin } = require("../fahrenheitToKelvin");

describe("Conversion of Fahrenheit to Kelvin ", () => {
    test("When temperature is 0", () => {
        const temperature = 0;
        const expected = 255.37;
        const actual = fahrenheitToKelvin(temperature);
        expect(actual).toEqual(expected);
    });
    test("When temperature is less than 0", () => {
        const temperature = -5;
        const expected = 252.59;
        const actual = fahrenheitToKelvin(temperature);
        expect(actual).toEqual(expected);
    });
    test("When temperature is greater 0", () => {
        const temperature = 25;
        const expected = 269.26;
        const actual = fahrenheitToKelvin(temperature);
        expect(actual).toEqual(expected);
    });
    test("Temperature is not a number", () => {
        const temperature = "32";
        const expected = "Invalid Input";
        expect(() => {
            fahrenheitToKelvin(temperature);
        }).toThrowError(expected);
    });
    test("Temperature is in decimals", () => {
        const temperature = 28.5;
        const expected = 271.21;
        const actual = fahrenheitToKelvin(temperature);
        expect(actual).toEqual(expected);
    });
});
