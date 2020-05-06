function circleOfNumbers(numberOfPlayers, playerNumber) {
    if (numberOfPlayers < 1) {
        return "There are no players";
    }
    if (playerNumber > numberOfPlayers) {
        return "Player does not exist";
    }
    const { getInteger } = require("./utils/math");
    const split = getInteger(numberOfPlayers / 2);

    return playerNumber + split;
}

module.exports = { circleOfNumbers };
