// @ts-check

const readLine = require("readline");
const process = require("process");

const readLineInterface = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

function randomChoice(numberOfChoices) {
    for (let choiceNumber = 1; choiceNumber <= numberOfChoices; choiceNumber++) {
        readLineInterface.question(`Enter choice ${choiceNumber}`, (choice) => {
            console.log("choice", choice);
        });
        if(numberOfChoices === choiceNumber){
            stopReadingChoice();
        }
    }
}

function stopReadingChoice() {
    readLineInterface.close();
}

randomChoice(5);
