function largestNumber(number) {
    let value = "";
    if (number < 0) {
        value = "0.";
        number *= -1;
    }
    for (let count = 0; count < number; count++) {
        value = value.concat(9);
    }

    return Number(value);
}

module.exports = { largestNumber };
