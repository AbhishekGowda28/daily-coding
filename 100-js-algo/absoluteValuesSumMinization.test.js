import { absoluteValuesSumMinization } from "./absoluteValuesSumMinization";

test("", () => {
    const input = [2, 4, 7];
    const expected = 4;
    const actual = absoluteValuesSumMinization(input);
    expected(actual).toBe(expected);
});
