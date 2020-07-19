const expect = require("expect");
const { fileNaming } = require("../fileNaming");

describe("File Naming", () => {
    test("With duplicate files", () => {
        const fileNames = ["doc", "doc", "image", "doc(1)", "doc"];
        const expected = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"];
        const actual = fileNaming(fileNames);
        expect(actual).toStrictEqual(expected);
    });
    test("Same files", () => {
        const fileNames = ["doc", "doc", "doc", "doc"];
        const expected = ["doc", "doc(1)", "doc(2)", "doc(3)"];
        const actual = fileNaming(fileNames);
        expect(actual).toStrictEqual(expected);
    });
    test("Invalid Input", () => {
        expect(() => {
            const fileNames = "doc";
            fileNaming(fileNames);
        }).toThrowError("Invalid Input");
    });
});
