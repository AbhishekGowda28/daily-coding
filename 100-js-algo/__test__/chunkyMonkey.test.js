const expect = require("expect");
const { chunkyMonkey } = require("../chunkyMonkey");

describe("Chunck Monkey ", () => {
    test("Empty Data Array", () => {
        const dataArray = [];
        const splitCount = 2;
        const actual = chunkyMonkey(dataArray, splitCount);
        const expected = [];
        expect(actual).toStrictEqual(expected);
    });
    test("Split count is 0", () => {
        const dataArray = [];
        const splitCount = 0;
        const actual = chunkyMonkey(dataArray, splitCount);
        const expected = "Split count has to be greater than 0";
        expect(actual).toMatch(expected);
    });
    test("Test split", () => {
        const dataArray = ["a", "b", "c", "d"];
        const splitCount = 2;
        const actual = chunkyMonkey(dataArray, splitCount);
        const expected = [["a", "b"], ["c", "d"]];
        expect(actual).toStrictEqual(expected);
    });
    test("Split count is more than array size", () => {
        const dataArray = ["a", "b", "c", "d"];
        const splitCount = 5;
        const actual = chunkyMonkey(dataArray, splitCount);
        const expected = [["a", "b", "c", "d"]];
        expect(actual).toStrictEqual(expected);
    });
    test("Data array size is equal to split count", () => {
        const dataArray = ["a", "b", "c", "d"];
        const splitCount = 4;
        const actual = chunkyMonkey(dataArray, splitCount);
        const expected = [["a", "b", "c", "d"]];
        expect(actual).toStrictEqual(expected);
    });
    test("Data array size is empty and split count 0", () => {
        const dataArray = [];
        const splitCount = 0;
        const actual = chunkyMonkey(dataArray, splitCount);
        const expected = "Split count has to be greater than 0";
        expect(actual).toMatch(expected);
    });
});
