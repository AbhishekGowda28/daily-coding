const { getInteger } = require("./utils/math");
function centuryFromYear(year) {
    if (year < 1) {
        return "Please provide proper year";
    }
    const century = getInteger(year / 100);
    if (year % 100 === 0) {
        return century;
    }

    return century + 1;
}

module.exports = { centuryFromYear };
