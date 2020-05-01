const expect = require("expect");
const { checkForElementInObject } = require("../utils");

describe("Checking for element in object", () => {
    test("Presence of element", () => {
        const inputObjet = { name: "" };
        const property = "name";
        const actual = checkForElementInObject(inputObjet, property);
        expect(actual).toBeTruthy();
    });

    test("Absense of element", () => {
        const inputObjet = { name: "" };
        const property = "firstName";
        const actual = checkForElementInObject(inputObjet, property);
        expect(actual).toBeFalsy();
    });
});
