function kelvinToCelsius(temperature) {
    if (typeof temperature === "number") {
        return Number((temperature - 273.15).toFixed(2));
    }
    throw "Invalid Input";
}

module.exports = { kelvinToCelsius };
