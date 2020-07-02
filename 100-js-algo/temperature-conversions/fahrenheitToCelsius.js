function fahrenheitToCelsius(temperature) {
    if (typeof temperature === "number") {
        return Number(((temperature - 32) / 1.8).toFixed(2));
    }
    throw "Invalid Input";
}

module.exports = { fahrenheitToCelsius };
