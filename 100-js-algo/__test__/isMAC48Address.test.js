const expect = require("expect");
const { isMAC48Address } = require("../isMAC48Address");

describe("MAC Address", () => {
    test("Valid", () => {
        const address = "00-1B-63-84-45-E6";
        const actual = isMAC48Address(address);
        expect(actual).toBeTruthy();
    });
    test("InValid address", () => {
        const address = "Z1-1B-63-84-45-E6";
        const actual = isMAC48Address(address);
        expect(actual).toBeFalsy();
    });
    test("InValid string", () => {
        const address = "not a MAC-48 address";
        const actual = isMAC48Address(address);
        expect(actual).toBeFalsy();
    });
});
