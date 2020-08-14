// @ts-check

/**
 * @param {number} num
 */
function shapeArea(num) {
    const sumValue = require("./utils/Math/Summation/arthimaticProgression").arthimaticSummation(1, 1, num - 1);

    return 4 * sumValue + 1;
}

module.exports = shapeArea;
