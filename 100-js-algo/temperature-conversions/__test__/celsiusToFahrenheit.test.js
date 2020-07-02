const expect = require("expect");
const { celsiusToFahrenheit } = require("../celsiusToFahrenheit");

describe("Conversion of Celsius to Fahrenheit", () => {
    test("When temperature is 0", () => {
        const temperature = 0;
        const expected = 32;
        const actual = celsiusToFahrenheit(temperature);
        expect(actual).toEqual(expected);
    });
    test("When temperature is less than 0", () => {
        const temperature = -5;
        const expected = 23;
        const actual = celsiusToFahrenheit(temperature);
        expect(actual).toEqual(expected);
    });
    test("When temperature is greater 0", () => {
        const temperature = 25;
        const expected = 77;
        const actual = celsiusToFahrenheit(temperature);
        expect(actual).toEqual(expected);
    });
    test("Temperature is not a number", () => {
        const temperature = "32";
        const expected = "Invalid Input";
        expect(() => {
            celsiusToFahrenheit(temperature);
        }).toThrowError(expected);
    });
    test("Temperature is in decimals", () => {
        const temperature = 28.5;
        const expected = 83.3;
        const actual = celsiusToFahrenheit(temperature);
        expect(actual).toEqual(expected);
    });
});
