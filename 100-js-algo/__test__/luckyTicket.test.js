const expect = require("expect");
const { luckyTicket } = require("../luckyTicket");

describe("Lucky Lotteryt Ticket", () => {
    test("Lucky Number", () => {
        const number = 1230;
        const actual = luckyTicket(number);
        expect(actual).toBeTruthy();
    });
    test("Not Lucky Number", () => {
        const number = 239017;
        const actual = luckyTicket(number);
        expect(actual).toBeFalsy();
    });
});
