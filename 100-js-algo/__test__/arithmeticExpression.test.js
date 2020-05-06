const expect = require("expect");
const { arithmeticExpression } = require("../arithmeticExpression");

describe("Artimatic Expression", () => {
    test("Test for + operator", () => {
        const operand1 = 2;
        const operand2 = 3;
        const result = 5;
        const actual = arithmeticExpression(operand1, operand2, result);
        expect(actual).toBeTruthy();
    });
    test("Test for - operator when operand 1 is greater", () => {
        const operand1 = 12;
        const operand2 = 3;
        const result = 9;
        const actual = arithmeticExpression(operand1, operand2, result);
        expect(actual).toBeTruthy();
    });
    test("Test for - operator when operand 2 is greater", () => {
        const operand1 = 2;
        const operand2 = 13;
        const result = 11;
        const actual = arithmeticExpression(operand1, operand2, result);
        expect(actual).toBeTruthy();
    });
    test("Test for * operator", () => {
        const operand1 = 2;
        const operand2 = 3;
        const result = 6;
        const actual = arithmeticExpression(operand1, operand2, result);
        expect(actual).toBeTruthy();
    });
    test("Test for / operator ", () => {
        const operand1 = 2;
        const operand2 = 3;
        const result = 1;
        const actual = arithmeticExpression(operand1, operand2, result);
        expect(actual).toBeTruthy();
    });
    test("Test for no match of operators", () => {
        const operand1 = 2;
        const operand2 = 1;
        const result = 5;
        const actual = arithmeticExpression(operand1, operand2, result);
        expect(actual).toBeFalsy();
    });
});
