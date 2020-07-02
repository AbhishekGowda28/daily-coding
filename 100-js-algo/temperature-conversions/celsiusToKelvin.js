function celsiusToKelvin(temperature) {
    if (typeof temperature === "number") {
        return Number((temperature + 273.15).toFixed(20));
    }
    throw "Invalid Input";
}

module.exports = { celsiusToKelvin };
