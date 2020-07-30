const expect = require("expect");
const { areEquallyStrong } = require("../areEquallyStrong");

describe("Are Equally Strong", () => {
    test("Test 1", () => {
        const person1 = { left: 10, right: 15 };
        const person2 = { left: 15, right: 10 };
        const actual = areEquallyStrong(person1, person2);
        expect(actual).toBeTruthy();
    });
    test("Test 2", () => {
        const person1 = { left: 15, right: 10 };
        const person2 = { left: 10, right: 15 };
        const actual = areEquallyStrong(person1, person2);
        expect(actual).toBeTruthy();
    });
    test("Test 3", () => {
        const person1 = { left: 10, right: 10 };
        const person2 = { left: 10, right: 15 };
        const actual = areEquallyStrong(person1, person2);
        expect(actual).toBeFalsy();
    });
});
