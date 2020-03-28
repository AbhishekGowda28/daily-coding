const expect = require("expect");
const { arrayReplace } = require("../arrayReplace");

describe("Array Element Replace", () => {
    text("Test element", () => {
        const inputArray = [];
        const elementToReplace = "";
        const substituteElement = "";
        const expected = [];
        const actual = arrayReplace(inputArray, elementToReplace, substituteElement);
        expect(actual).toBe(expected);
    });
});
