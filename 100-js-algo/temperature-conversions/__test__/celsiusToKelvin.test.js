const expect = require("expect");
const { celsiusToKelvin } = require("../celsiusToKelvin");

describe("Conversion of Celsius to Kelvin", () => {
    test("When temperature is 0", () => {
        const temperature = 0;
        const expected = 273.15;
        const actual = celsiusToKelvin(temperature);
        expect(actual).toEqual(expected);
    });
    test("When temperature is less than 0", () => {
        const temperature = -5;
        const expected = 268.15;
        const actual = celsiusToKelvin(temperature);
        expect(actual).toEqual(expected);
    });
    test("When temperature is greater 0", () => {
        const temperature = 25;
        const expected = 298.15;
        const actual = celsiusToKelvin(temperature);
        expect(actual).toEqual(expected);
    });
    test("Temperature is not a number", () => {
        const temperature = "32";
        const expected = "Invalid Input";
        expect(() => {
            celsiusToKelvin(temperature);
        }).toThrowError(expected);
    });
    test("Temperature is in decimals", () => {
        const temperature = 28.5;
        const expected = 301.65;
        const actual = celsiusToKelvin(temperature);
        expect(actual).toEqual(expected);
    });
});
