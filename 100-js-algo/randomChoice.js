// @ts-check

const readLine = require("readline");
const process = require("process");

const readLineInterface = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

function stopReadingChoice() {
    readLineInterface.close();
}

/**
 * @param {number} choiceNumber
 * @param {number} numberOfChoices
 */
function readChoice(choiceNumber, numberOfChoices) {
    /**
     * @param {string} choice
     */
    readLineInterface.question(`Enter choice ${choiceNumber}`, (choice) => {
        console.log("choice", choice);
        if (numberOfChoices === choiceNumber) {
            stopReadingChoice();
        }
    });
}

/**
 * @param {number} numberOfChoices
 */
function randomChoice(numberOfChoices) {
    for (let choiceNumber = 1; choiceNumber <= numberOfChoices; choiceNumber++) {
        console.log("choice number", choiceNumber);
        readChoice(choiceNumber, numberOfChoices);
    }
}

randomChoice(5);
