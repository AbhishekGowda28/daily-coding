const expect = require("expect");
const { validateVariable } = require("../validateVariable");

describe("Validating Variable Name", () => {
    test("Valid Variable", () => {
        const name = "var_1__Int";
        const actual = validateVariable(name);
        expect(actual).toBeTruthy();
    });
    test("Invalid Special Character", () => {
        const name = "qq-q";
        const actual = validateVariable(name);
        expect(actual).toBeFalsy();
    });
    test("Starting with numbers", () => {
        const name = "2w2";
        const actual = validateVariable(name);
        expect(actual).toBeFalsy();
    });
});
