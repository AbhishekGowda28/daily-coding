const expect = require("expect");
const { closestDuplicate } = require("../closestDuplicate");

describe("Closest Duplicate element in the list", () => {
    test("Presence of duplicate element", () => {
        const inputArray = [2, 1, 3, 5, 3, 2];
        const expected = 3;
        const actual = closestDuplicate(inputArray);
        expect(actual).toBe(expected);
    });
    test("Duplicate element is not present", () => {
        const inputArray = [2, 4, 3, 5, 1];
        const actual = closestDuplicate(inputArray);
        expect(actual).toBeUndefined();
    });
});
