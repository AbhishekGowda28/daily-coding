const expect = require("expect");
const { bishopAndPawn } = require("../bishopAndPawn");

describe("Bishop and Pawn", () => {
    test("Bishop capturing the pawn with Top Right Movement", () => {
        const bishopLocation = "a1";
        const pawnLocation = "c3";
        const actual = bishopAndPawn(bishopLocation, pawnLocation);
        expect(actual).toBeTruthy();
    });
    test("Bishop capturing the pawn with Top Left Movement", () => {
        const bishopLocation = "d4";
        const pawnLocation = "c5";
        const actual = bishopAndPawn(bishopLocation, pawnLocation);
        expect(actual).toBeTruthy();
    });
    test("Bishop capturing the pawn with Down Right Movement", () => {
        const bishopLocation = "a8";
        const pawnLocation = "h1";
        const actual = bishopAndPawn(bishopLocation, pawnLocation);
        expect(actual).toBeTruthy();
    });
    test("Bishop capturing the pawn with Down Left Movement", () => {
        const bishopLocation = "g7";
        const pawnLocation = "d4";
        const actual = bishopAndPawn(bishopLocation, pawnLocation);
        expect(actual).toBeTruthy();
    });
    test("Bishop not capturing the pawn", () => {
        const bishopLocation = "h1";
        const pawnLocation = "h3";
        const actual = bishopAndPawn(bishopLocation, pawnLocation);
        expect(actual).toBeFalsy();
    });
    test("Bishop does not exist", () => {
        const bishopLocation = "i1";
        const pawnLocation = "h3";
        const actual = bishopAndPawn(bishopLocation, pawnLocation);
        expect(actual).toBeFalsy();
    });
    test("Pawn does not exist", () => {
        const bishopLocation = "a1";
        const pawnLocation = "a9";
        const actual = bishopAndPawn(bishopLocation, pawnLocation);
        expect(actual).toBeFalsy();
    });
});
