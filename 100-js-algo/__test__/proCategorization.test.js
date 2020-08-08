const expect = require("expect");
const { proCategorization } = require("../proCategorization");

describe("Agency job Selection", () => {
    test("Job Selection", () => {
        const pro = ["Jack", "Leon", "Maria"];
        const preference = [["Computer repair", "Handyman", "House cleaning"], ["Computer lessons", "Computer repair", "Data recovery service"], ["Computer lessons", "House cleaning"]];
        const expected = [
            [["Computer lessons"], ["Leon", "Maria"]],
            [["Computer repair"], ["Jack", "Leon"]],
            [["Data recovery service"], ["Leon"]],
            [["Handyman"], ["Jack"]],
            [["House cleaning"], ["Jack", "Maria"]]
        ];
        const actual = proCategorization(pro, preference);
        expect(actual).toStrictEqual(expected);
    });
});
