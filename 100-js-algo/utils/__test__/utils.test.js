const expect = require("expect");
const { checkForElementInObject, isEmpty, removeDuplicatesFromArray, isDigit } = require("../utils");

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

describe("Test suit to test is object empty", () => {
    test("Object is undefined", () => {
        const inputObject = undefined;
        const actual = isEmpty(inputObject);
        expect(actual).toBeTruthy();
    });
    test("Object is null", () => {
        const inputObject = null;
        const actual = isEmpty(inputObject);
        expect(actual).toBeTruthy();
    });
    test("Object is {}", () => {
        const inputObject = {};
        const actual = isEmpty(inputObject);
        expect(actual).toBeTruthy();
    });
    test("Object contains data", () => {
        const inputObject = { name: "test" };
        const actual = isEmpty(inputObject);
        expect(actual).toBeFalsy();
    });
    test("Object is an array", () => {
        const inputObject = [{ name: "test" }];
        const actual = isEmpty(inputObject);
        expect(actual).toBeFalsy();
    });
    test("Object is an empty array", () => {
        const inputObject = [];
        const actual = isEmpty(inputObject);
        expect(actual).toBeTruthy();
    });
    test("Object is an empty string", () => {
        const inputObject = "";
        const actual = isEmpty(inputObject);
        expect(actual).toBeTruthy();
    });
    test("Object is a string data", () => {
        const inputObject = "Test";
        const actual = isEmpty(inputObject);
        expect(actual).toBeFalsy();
    });
});

describe("Removing duplicates from array", () => {
    test("Array is empty", () => {
        const input = [];
        const expected = [];
        const actual = removeDuplicatesFromArray(input);
        expect(actual).toStrictEqual(expected);
    });
    test("Array contains 1 element", () => {
        const input = ["A"];
        const expected = ["A"];
        const actual = removeDuplicatesFromArray(input);
        expect(actual).toStrictEqual(expected);
    });
    test("Array contains single duplicate element", () => {
        const input = ["A", "A"];
        const expected = ["A"];
        const actual = removeDuplicatesFromArray(input);
        expect(actual).toStrictEqual(expected);
    });
    test("Array contains is string", () => {
        const input = "Kannada";
        const expected = ["K", "a", "n", "d"];
        const actual = removeDuplicatesFromArray(input);
        expect(actual).toStrictEqual(expected);
    });
});

describe("Is provided character a digit", () => {
    test("Providing number", () => {
        const input = 8846;
        const actual = isDigit(input);
        expect(actual).toBeTruthy();
    });
    test("Number as a string", () => {
        const input = "0123";
        const actual = isDigit(input);
        expect(actual).toBeTruthy();
    });
    test("Providing number along with a non-number", () => {
        const input = "rfda2";
        const actual = isDigit(input);
        expect(actual).toBeFalsy();
    });
    test("Providing other type value", () => {
        const input = true;
        const actual = isDigit(input);
        expect(actual).toBeFalsy();
    });
    test("Providing empty string", () => {
        const input = false;
        const actual = isDigit(input);
        expect(actual).toBeFalsy();
    });
});
