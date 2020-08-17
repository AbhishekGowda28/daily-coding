// @ts-check

/**
 * @param {string} pattern
 * @param {number} num
 */
function Cone(pattern, num) {
    const _funnel = [];
    for (let _row = Math.ceil(num / 2); _row >= 0; _row--) {
        _funnel[_row] = [];
        for (let _column = 0; _column < num; _column++) {
            _funnel[_row][_column] = `${pattern} ${_row} ${_column}`;
        }
    }

    return _funnel;
}

console.log(Cone("*", 3));

module.exports = Cone;
