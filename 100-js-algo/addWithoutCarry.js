function addWithoutCarry(value1, value2) {
    const { getInteger } = require(`./utils/Math/getInteger`);
    let result = 0;
    let powerOf10 = 1;
    while (value1 > 0 || value2 > 0) {
        const lastDigit = (value1 + value2) % 10;
        result += powerOf10 * lastDigit;
        value1 = getInteger(value1 / 10);
        value2 = getInteger(value2 / 10);
        powerOf10 *= 10;
    }

    return result;
}

module.exports = { addWithoutCarry };
