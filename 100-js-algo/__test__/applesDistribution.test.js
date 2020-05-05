const expect = require("expect");
const { applesDistribution } = require("../applesDistribution");

describe("Distribution of Apple", () => {
    test("Distribute", () => {
        const apples = 7, boxCapacity = 4, maxResidue = 1;
        const actual = applesDistribution(apples, boxCapacity, maxResidue);
        const expected = 3;
        expect(actual).toBe(expected);
    });
    test("Distribute", () => {
        const apples = 8, boxCapacity = 4, maxResidue = 0;
        const actual = applesDistribution(apples, boxCapacity, maxResidue);
        const expected = 4;
        expect(actual).toBe(expected);
    });
});
