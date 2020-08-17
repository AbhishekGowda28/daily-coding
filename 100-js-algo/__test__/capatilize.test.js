const expect  = require("expect");
const capatilize = require("../capatilize");

describe("Proper Noun Correction", () => {
    test("Correcting a word to proper Noun", () => {
        const word = "john";
        const expected = "John";
        const actual = capatilize(word);
        expect(actual).toBe(expected);
    });
    test("Another word to test", () => {
        const word = "Pluto";
        const expected = "Pluto";
        const actual = capatilize(word);
        expect(actual).toBe(expected);
    });
});
