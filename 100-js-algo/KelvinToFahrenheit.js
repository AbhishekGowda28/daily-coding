const { celsiusToFahrenheit } = require("./celsiusToFahrenheit");
const { kelvinToCelsius } = require("./kelvinToCelsius");

function KelvinToFahrenheit(temperature) {
    if (typeof temperature === "number") {
        return Number((celsiusToFahrenheit(kelvinToCelsius(temperature))).toFixed(2));
    }
    throw "Invalid Input";
}

module.exports = { KelvinToFahrenheit };
