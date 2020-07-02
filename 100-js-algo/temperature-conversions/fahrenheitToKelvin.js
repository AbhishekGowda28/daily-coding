const { fahrenheitToCelsius } = require("./fahrenheitToCelsius");
const { celsiusToKelvin } = require("./celsiusToKelvin");

function fahrenheitToKelvin(temperature) {
    if (typeof temperature === "number") {
        return Number(celsiusToKelvin(fahrenheitToCelsius(temperature)).toFixed(2));
    }
    throw "Invalid Input";
}

module.exports = { fahrenheitToKelvin };
