const expect = require("expect");
const { kelvinToCelsius } = require("../kelvinToCelsius");

describe("Conversion of Kelvin to Celsius ", () => {
    test("When temperature is 0", () => {
        const temperature = 0;
        const expected = -273.15;
        const actual = kelvinToCelsius(temperature);
        expect(actual).toEqual(expected);
    });
    test("When temperature is less than 0", () => {
        const temperature = -5;
        const expected = -278.15;
        const actual = kelvinToCelsius(temperature);
        expect(actual).toEqual(expected);
    });
    test("When temperature is greater 0", () => {
        const temperature = 25;
        const expected = -248.15;
        const actual = kelvinToCelsius(temperature);
        expect(actual).toEqual(expected);
    });
    test("Temperature is not a number", () => {
        const temperature = "32";
        const expected = "Invalid Input";
        expect(() => {
            kelvinToCelsius(temperature);
        }).toThrowError(expected);
    });
    test("Temperature is in decimals", () => {
        const temperature = 28.5;
        const expected = -244.65;
        const actual = kelvinToCelsius(temperature);
        expect(actual).toEqual(expected);
    });
});
