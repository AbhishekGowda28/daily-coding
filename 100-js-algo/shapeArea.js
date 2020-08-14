// @ts-check

/**
 * @param {number} num
 */
function shapeArea(num) {
    const sumValue = require("./utils/Math/Summation/arthimaticProgression").arthimaticSummation(1, 1, num - 1);

    return 4 * sumValue + 1;

    /**
     * 
     * Better Solution :
     * 
     * return Math.pow(num, 2)+Math.pow(num-1, 2);
     * 
     */
}

module.exports = shapeArea;
