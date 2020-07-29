const expect = require(`expect`);
const { circleOfNumbers } = require(`../circleOfNumbers`);

describe(`Circle of Number`, () => {
    test(`Number of players are 0`, () => {
        const numberOfPlayers = 0;
        const playerNumber = 5;
        const actual = circleOfNumbers(numberOfPlayers, playerNumber);
        const expected = `There are no players`;
        expect(actual).toMatch(expected);
    });
    test(`Player number is greater than number of players`, () => {
        const numberOfPlayers = 10;
        const playerNumber = 15;
        const actual = circleOfNumbers(numberOfPlayers, playerNumber);
        const expected = `Player does not exist`;
        expect(actual).toMatch(expected);
    });
    test(`Radially opposite player`, () => {
        const numberOfPlayers = 10;
        const playerNumber = 2;
        const actual = circleOfNumbers(numberOfPlayers, playerNumber);
        const expected = 7;
        expect(actual).toBe(expected);
    });
});
