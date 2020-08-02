// @ts-check

/**
 * @param {string} numeric
 */
function binaryToDecimal(numeric) {
    let value = 0;
    const base = 2;
    for (let counter = numeric.length - 1; counter >= 0; counter--) {
        // const baseValue = Math.pow(base, Number(numeric[counter]));
        let baseValue = 0;
        if (Number(numeric[counter]) !== 0) {
            baseValue = Math.pow(base, counter);
        }
        value += baseValue;
        console.log({ value, counter, baseValue });
    }

    return value;
}

// module.exports = { binaryToDecimal };

console.log(binaryToDecimal("101"));

console.log(binaryToDecimal("01001000"));
console.log(binaryToDecimal("0010.0001"));
