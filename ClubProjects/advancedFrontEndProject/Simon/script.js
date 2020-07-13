//colors
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var green = document.querySelector(".green");
var yellow = document.querySelector(".yellow");

// score
var score = document.getElementsByClassName("score")[0];

//power button
var power = document.getElementById("on");

// start game button
var startButton = document.querySelector(".start");

// strict game button
var strictButton = document.querySelector(".strict");

// strict light
var strictLight = document.querySelector(".strick-light");

// Event listiners

// Click on strat button reset's the game
startButton.onclick = resetGame;


// local variables

var powerOn = false; // power On/Off control button
var colors = [red, blue, yellow, green];
var colorArray = []; // Random colors generated are stored
var userColorArray = []; //user selected colors 
var strictGame = false; // strict game
var gameScore = 1;
var gameStart = false;
var userInputCounter = 0; // keep track of number of click of the user
var color; // color selected
var sequenceComplete = false;

// functions

power.onclick = () => {
    if (powerOn) {
        console.log("OFF");
        powerOn = false;
        score.innerText = "--";
        power.style.float = "left";
        power.style.backgroundColor = "red";
        strictLight.style.backgroundColor = "#941414";
        strictGame = true;
        resetColors();
    } else {
        powerOn = true;
        power.style.float = "right";
        power.style.backgroundColor = "green";
        resetBoard();
    }
}

/*
    Description: Reset the game board
*/
function resetBoard() {
    strictLight.style.backgroundColor = "#941414";
    strictGame = false;
    score.innerText = "01";
    colorArray = [];
    userColorArray = [];
    gameScore = 1;
}


/*
    Description: Reset the game variables back
*/
function resetGame() {
    if (powerOn) {
        console.log("Game ON");
        resetBoard();
        resetColors();
        startGame();
    }
}


/*
    Description: Change opacity of the colors to 0.7
*/
function resetColors() {
    for (var i = 0; i < colors.length; i++) {
        colors[i].style.opacity = "0.7";
    }
}

/*
    Description: Display game is played in strict-mode by displaying red light.
*/
strictButton.onclick = () => {
    if (powerOn) {
        if (!strictGame) {
            strictLight.style.backgroundColor = "#ff0000";
            strictGame = true;
            console.log("You are playing strict game");
        } else {
            strictLight.style.backgroundColor = "#941414";
            console.log("Strict game is disabled");
            strictGame = false;
        }
    }
}


function startGame() {

    console.log("Playing the game");
    sequenceComplete = false;
    colorArray.push(generateRandomColor());
    displayPreviousColors();
}


/*
    Description:    Display previous colors to the user
*/
function displayPreviousColors() {
    userInputCounter = 0;
    userColorArray = [];
    displayColor();
    sequenceComplete = true;
}


/*
    Description: Displays color to the user
*/
function displayColor() {

    if (colorArray.length > 19) {
        return won();
    }

    var i = 0,
        speed = 1000;


    // Displaying score        
    colorArray.length < 10 ? score.innerText = "0" + colorArray.length : score.innerText = colorArray.length;


    // Increaing speed of the game
    if (colorArray.length > 15)
        speed = 600;
    else if (colorArray.length > 4)
        speed = 800;


    // Displaying colors
    var colorDisplayInterval = setInterval(() => {
        var color = colorArray[i];
        color.style.opacity = "1.0";
        color.childNodes[1].play();
        var resetColorTimeOut = setTimeout(() => {
            color.style.opacity = "0.7";
        }, speed / 2);
        i++;
        if (i == colorArray.length) {
            clearInterval(colorDisplayInterval);
            sequencePlay = false;
        }
    }, speed);
}

/*
    Description: Generate Random Colors
*/
function generateRandomColor() {
    console.log("generated new color");
    return colors[Math.floor(Math.random() * 4)];
}


/*
    Description: When the user reaches 20 level
*/
function won() {
    score.innerHTML = "W";
    setTimeout(resetGame, 3000);
}


/*
    Description: Comparing userInput and colorArray
*/
function compareUserInput() {
    for (var i = 0; i < colorArray.length; i++) {
        if (colorArray[i] == userColorArray[i]) continue;
        else return false;
    }
    return true;
}

red.onclick = callMe;
blue.onclick = callMe;
green.onclick = callMe;
yellow.onclick = callMe;

function callMe(event) {
    if (sequenceComplete) {
        event.target.style.opacity = "1";
        event.target.childNodes[1].play();
        setTimeout(resetColors, 500);
        userColorArray.push(event.target);
        userInputCounter++;
        if (userInputCounter == colorArray.length) {
            if (compareUserInput()) {
                console.log("callMe startGame")
                startGame();
            } else if (strictGame) {
                resetGame();
            } else {
                console.log("displaying previous color");
                displayPreviousColors();
            }
        }
    }
}



/*
**********************************
    Unnecessary functions, could be used for future references
**********************************
*/
/*
    Description: Waiting for specified seconds
*/
function wait(seconds) {
    var current = Date.now();
    var untill = (seconds * 1000) + current;
    while (current < untill) {
        current = Date.now();
    }
}