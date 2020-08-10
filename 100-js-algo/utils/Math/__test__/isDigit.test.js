const expect = require("expect");
const { isDigit } = require("../isDigit");
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
