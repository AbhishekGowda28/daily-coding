const expect = require("expect");
const tasksTypes = require("../tasksTypes");

describe("Task Type", () => {
    test("No Later task", () => {
        const deadlines = [1, 2, 3, 4, 5];
        const day = 2;
        const expected = [2, 3, 0];
        const actual = tasksTypes(deadlines, day);
        expect(actual).toStrictEqual(expected);
    });
    test("All Task", () => {
        const deadlines = [1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8];
        const day = 1;
        const expected = [2, 8, 2];
        const actual = tasksTypes(deadlines, day);
        expect(actual).toStrictEqual(expected);
    });
});
