const expect = require("expect");
const { convertTime } = require("../clockAngle");

describe("Angle between the 2 hands of the analog time", function () {
    test("Angle between the 01:12", function () {
        const angle = convertTime("01:12");
        expect(angle).toBe(36);
    });
    test("Angle between the 05:30", function () {
        const angle = convertTime("05:30");
        expect(angle).toBe(15);
    });
    test("Angle between the 12:00", function () {
        const angle = convertTime("12:00");
        expect(angle).toBe(0);
    });
    test("Angle between the 10:10", function () {
        const angle = convertTime("10:10");
        expect(angle).toBe(115);
    });
    test("Angle between the 23:00", function () {
        const angle = convertTime("23:00");
        expect(angle).toBe(30);
    });
    test("Angle between the 13:00", function () {
        const angle = convertTime("13:00");
        expect(angle).toBe(30);
    });
    test("Angle between the 02:30", function () {
        const angle = convertTime("02:30");
        expect(angle).toBe(105);
    });

    test("Angle between the 13:42", function () {
        const angle = convertTime("13:42");
        expect(angle).toBe(159);
    });

    test("Angle between the 01:42", function () {
        const angle = convertTime("01:42");
        expect(angle).toBe(159);
    });

    test("Angle between the 01:43", function () {
        const angle = convertTime("01:43");
        expect(angle).toBe(153.5);
    });

    test("Angle between the 00:00", function () {
        const angle = convertTime("00:00");
        expect(angle).toBe(0);
    });

    test("Angle between the 12:01", function () {
        const angle = convertTime("12:01");
        expect(angle).toBe(5.5);
    });

    test("Angle between the 18:00", function () {
        const angle = convertTime("18:00");
        expect(angle).toBe(180);
    });

    test("Time provided is of invalid format", function () {
        expect(() => {
            convertTime("25:12");
        }).toThrowError();
    });
});
