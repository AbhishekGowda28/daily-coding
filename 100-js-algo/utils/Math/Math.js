/**
 * @param {number} integerNumber
 */
function getInteger(integerNumber) {
    integerNumber = Number(integerNumber);

    return Number(integerNumber.toString().split(".")[0]);
}

module.exports = { getInteger };
