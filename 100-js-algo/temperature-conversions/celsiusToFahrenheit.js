function celsiusToFahrenheit(temperature) {
    if (typeof temperature === "number") {
        return Number(((temperature * 1.8) + 32).toFixed(2));
    }
    throw "Invalid Input";
}

module.exports = { celsiusToFahrenheit };
