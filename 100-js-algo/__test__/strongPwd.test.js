const expect = require("expect");
const stongPwd = require("../strongPwd");

describe("Strong Password", () => {
    test("Less than 8 characters with other requirement fullfilled", () => {
        const pwd = "_rQ6";
        const actual = stongPwd(pwd);
        expect(actual).toBeFalsy();
    });
    test("Greater than 8 characters with other requirement fullfilled", () => {
        const pwd = "_(QWer21)_";
        const actual = stongPwd(pwd);
        expect(actual).toBeTruthy();
    });
    test("No special character", () => {
        const pwd = "ABCD1234ancf";
        const actual = stongPwd(pwd);
        expect(actual).toBeFalsy();
    });
    test("No lower case", () => {
        const pwd = "__#ABNCD12564";
        const actual = stongPwd(pwd);
        expect(actual).toBeFalsy();
    });
    test("No uppercase", () => {
        const pwd = "_(avasdf565464)_";
        const actual = stongPwd(pwd);
        expect(actual).toBeFalsy();
    });
    test("No number", () => {
        const pwd = "_(hkdhskfDSHJK)_";
        const actual = stongPwd(pwd);
        expect(actual).toBeFalsy();
    });
});
