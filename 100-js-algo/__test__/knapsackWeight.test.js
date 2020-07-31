const expect = require("expect");
const { knapsackWeight } = require("../knapsackWeight");

describe("Knapsack Weight", () => {
    test("sum of weights equal to max weight", () => {
        const weight1 = 12, weight2 = 18, value1 = 100, value2 = 200, maxWeight = 30;
        const expected = 300;
        const actual = knapsackWeight(value1, weight1, value2, weight2, maxWeight);
        expect(actual).toBe(expected);
    });
    test("weight 1", () => {
        const weight1 = 12, weight2 = 20, value1 = 100, value2 = 200, maxWeight = 15;
        const expected = 100;
        const actual = knapsackWeight(value1, weight1, value2, weight2, maxWeight);
        expect(actual).toBe(expected);
    });
    test("weight 2", () => {
        const weight1 = 20, weight2 = 12, value1 = 100, value2 = 200, maxWeight = 15;
        const expected = 200;
        const actual = knapsackWeight(value1, weight1, value2, weight2, maxWeight);
        expect(actual).toBe(expected);
    });
    test("weight 1 equals weight 2 value 1 greater", () => {
        const weight1 = 12, weight2 = 12, value1 = 500, value2 = 200, maxWeight = 12;
        const expected = 500;
        const actual = knapsackWeight(value1, weight1, value2, weight2, maxWeight);
        expect(actual).toBe(expected);
    });
    test("weight 1 equals weight 2 value 2 greater", () => {
        const weight1 = 15, weight2 = 15, value1 = 500, value2 = 1200, maxWeight = 15;
        const expected = 1200;
        const actual = knapsackWeight(value1, weight1, value2, weight2, maxWeight);
        expect(actual).toBe(expected);
    });
});
