// eslint-disable-next-line max-params
function arithmeticExpression(operand1, operand2, result) {
    const { getInteger } = require("./utils/Math/Math");
    if (getInteger(operand1 + operand2) === result) {
        return true;
    }
    if ((getInteger(operand1 - operand2) === result) || getInteger(operand2 - operand1) === result) {
        return true;
    }
    if (getInteger(operand1 * operand2) === result) {
        return true;
    }
    if ((getInteger(operand1 / operand2) === result) || getInteger(operand2 / operand1) === result) {
        return true;
    }

    return false;
}

module.exports = { arithmeticExpression };
