const expect = require("expect");
const { messageFromBinaryCode } = require("../messageFromBinaryCode");

describe("Encrypte Binary Code", () => {
    test("Hello", () => {
        const encryptedCode = "010010000110010101101100011011000110111100100001";
        const expected = "Hello!";
        const actual = messageFromBinaryCode(encryptedCode);
        expect(actual).toBe(expected);
    });
});
