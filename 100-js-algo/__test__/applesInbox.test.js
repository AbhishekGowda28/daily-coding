const expect = require("expect");
const { applesInbox } = require("../applesInbox");

describe("Apples in the box", () => {
    test("Odd number of boxes", () => {
        const boxCount = 5;
        const actual = applesInbox(boxCount);
        const expected = "15 Yellow apples";
        expect(actual).toMatch(expected);
    });
    test("Even number of boxes", () => {
        const boxCount = 10;
        const actual = applesInbox(boxCount);
        const expected = "55 Red apples";
        expect(actual).toMatch(expected);
    });
    test("zero boxes", () => {
        const boxCount = 0;
        const actual = applesInbox(boxCount);
        const expected = "There are same number of Red and Yellow apples";
        expect(actual).toMatch(expected);
    });
});
