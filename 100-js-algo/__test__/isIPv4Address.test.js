const expect = require(`expect`);
const { isIPv4Address } = require(`../isIPv4Address`);

describe(`Is IPv4`, () => {
    test(`Valid IP`, () => {
        const ipAddress = `172.16.254.1`;
        const actual = isIPv4Address(ipAddress);
        expect(actual).toBeTruthy();
    });
    test(`InValid IP`, () => {
        const ipAddress = `.254.255.0`;
        const actual = isIPv4Address(ipAddress);
        expect(actual).toBeFalsy();
    });
    test(`InValid IP 2`, () => {
        const ipAddress = `172.316.254.1`;
        const actual = isIPv4Address(ipAddress);
        expect(actual).toBeFalsy();
    });
    test(`String`, () => {
        const ipAddress = `a.b.c.d`;
        const actual = isIPv4Address(ipAddress);
        expect(actual).toBeFalsy();
    });
    test(`all are 0's`, () => {
        const ipAddress = `0.0.0.0`;
        const actual = isIPv4Address(ipAddress);
        expect(actual).toBeTruthy();
    });
    test(`Lesser fields`, () => {
        const ipAddress = `a.b.c`;
        const actual = isIPv4Address(ipAddress);
        expect(actual).toBeFalsy();
    });
});
