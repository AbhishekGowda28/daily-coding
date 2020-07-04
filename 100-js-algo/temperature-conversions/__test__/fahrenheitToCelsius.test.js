const expect = require("expect");
const { fahrenheitToCelsius } = require("../fahrenheitToCelsius");

describe("Conversion of Fahrenheit to Celsius ", () => {
    test("When temperature is 0", () => {
        const temperature = 0;
        const expected = -17.78;
        const actual = fahrenheitToCelsius(temperature);
        expect(actual).toEqual(expected);
    });
    test("When temperature is less than 0", () => {
        const temperature = -5;
        const expected = -20.56;
        const actual = fahrenheitToCelsius(temperature);
        expect(actual).toEqual(expected);
    });
    test("When temperature is greater 0", () => {
        const temperature = 25;
        const expected = -3.89;
        const actual = fahrenheitToCelsius(temperature);
        expect(actual).toEqual(expected);
    });
    test("Temperature is not a number", () => {
        const temperature = "32";
        const expected = "Invalid Input";
        expect(() => {
            fahrenheitToCelsius(temperature);
        }).toThrowError(expected);
    });
    test("Temperature is in decimals", () => {
        const temperature = 28.5;
        const expected = -1.94;
        const actual = fahrenheitToCelsius(temperature);
        expect(actual).toEqual(expected);
    });
});
