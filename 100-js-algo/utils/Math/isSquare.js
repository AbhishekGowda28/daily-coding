// @ts-check
/**
 * @param {number} number
 */
function isSquare(number) {
    const d = Math.floor(Math.sqrt(number));
    if (d * d === number) {
        return true;
    }

    return false;
}

module.exports = { isSquare };
