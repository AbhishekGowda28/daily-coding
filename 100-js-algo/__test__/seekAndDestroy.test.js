const expect = require("expect");
const seekAndDestroy = require("../seekAndDestroy");

describe("Seek and Destroy", () => {
    test("Remove elements from inital array", () => {
        const initalArr = [1, 2, 3, 5, 4, 1, 2];
        const valueToBeRemoved = [1,4];
        const expected  = [ 2, 3, 5, 2];
        const actual = seekAndDestroy(initalArr, valueToBeRemoved);
        expect(actual).toStrictEqual(expected);
    });
});
