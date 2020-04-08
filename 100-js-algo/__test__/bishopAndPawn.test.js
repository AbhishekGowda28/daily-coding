const expect = require("expect");
const { bishopAndPawn } = require("../bishopAndPawn");

describe("Bishop and Pawn", () => {
    test("Bishop capturing the pawn", () => {
        const bishopLocation = "a1";
        const pawnLocation = "c3";
        const actual = bishopAndPawn(bishopLocation, pawnLocation);
        expect(actual).toBeTruthy();
    });
    test("Bishop not capturing the pawn", () => {
        const bishopLocation = "h1";
        const pawnLocation = "h3";
        const actual = bishopAndPawn(bishopLocation, pawnLocation);
        expect(actual).toBeFalsy();
    });
});
