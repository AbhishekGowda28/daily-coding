const expect = require("expect");
const sortByField = require("../sortByField");

describe("Sorting of Array based on provided field", () => {
    test("Sort Numbers", () => {
        const arr = [{ name: "A", gender: "F", age: 1 }, { name: "B", gender: "M", age: 2 }, { name: "C", gender: "M", age: 3 }];
        const field = "age";
        const expected = [{ name: "A", gender: "F", age: 1 }, { name: "B", gender: "M", age: 2 }, { name: "C", gender: "M", age: 3 }];
        const actual = sortByField(arr, field);
        expect(actual).toStrictEqual(expected);
    });
    test("Sort string", () => {
        const arr = [{ name: "C", gender: "F", age: 1 }, { name: "B", gender: "M", age: 2 }, { name: "A", gender: "M", age: 3 }];
        const field = "name";
        const expected = [{ name: "A", gender: "M", age: 3 }, { name: "B", gender: "M", age: 2 }, { name: "C", gender: "F", age: 1 }];
        const actual = sortByField(arr, field);
        expect(actual).toStrictEqual(expected);
    });
    test("Sort boolean", () => {
        const arr = [{ name: "A", male: false, age: 1 }, { name: "B", male: true, age: 2 }, { name: "C", male: false, age: 3 }];
        const field = "male";
        const expected = [{ name: "A", male: false, age: 1 }, { name: "C", male: false, age: 3 }, { name: "B", male: true, age: 2 }];
        const actual = sortByField(arr, field);
        expect(actual).toStrictEqual(expected);
    });
});
