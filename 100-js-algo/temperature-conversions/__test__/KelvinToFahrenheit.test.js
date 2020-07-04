const expect = require("expect");
const { KelvinToFahrenheit } = require("../KelvinToFahrenheit");

describe("Conversion of Kelvin to Fahrenheit ", () => {
    test("When temperature is 0", () => {
        const temperature = 0;
        const expected = -459.67;
        const actual = KelvinToFahrenheit(temperature);
        expect(actual).toEqual(expected);
    });
    test("When temperature is less than 0", () => {
        const temperature = -5;
        const expected = -468.67;
        const actual = KelvinToFahrenheit(temperature);
        expect(actual).toEqual(expected);
    });
    test("When temperature is greater 0", () => {
        const temperature = 25;
        const expected = -414.67;
        const actual = KelvinToFahrenheit(temperature);
        expect(actual).toEqual(expected);
    });
    test("Temperature is not a number", () => {
        const temperature = "32";
        const expected = "Invalid Input";
        expect(() => {
            KelvinToFahrenheit(temperature);
        }).toThrowError(expected);
    });
    test("Temperature is in decimals", () => {
        const temperature = 28.5;
        const expected = -408.37;
        const actual = KelvinToFahrenheit(temperature);
        expect(actual).toEqual(expected);
    });
});
