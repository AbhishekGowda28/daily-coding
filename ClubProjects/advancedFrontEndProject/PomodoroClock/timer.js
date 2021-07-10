var pomdoro = document.getElementsByClassName("pomdoro")[0];
var pomdoroBreak = document.getElementsByClassName("break")[0];
var timer = document.getElementsByClassName("timer")[0];
var pomdoroInc = document.getElementsByClassName("pomdoroInc")[0];
var pomdoroDec = document.getElementsByClassName("pomdoroDec")[0];
var pomdoroBreakInc = document.getElementsByClassName("pomdoroBreakInc")[0];
var pomdoroBreakDec = document.getElementsByClassName("pomdoroBreakDec")[0];
var start = document.getElementsByClassName("start")[0];
var stop = document.getElementsByClassName("stop")[0];
var reset = document.getElementsByClassName("reset")[0];
var alarm = document.getElementsByClassName("alarm")[0];
var seconds = 00;




// Timer id of setTimeOut
var timerID;
var intervalID;


pomdoroInc.addEventListener("click", incrementPomodoro);
pomdoroDec.addEventListener("click", decerementPomodoro);
pomdoroBreakInc.addEventListener("click", incrementPomodoroBreak);
pomdoroBreakDec.addEventListener("click", decerementPomodoroBreak);
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);


function incrementPomodoro() {
    pomdoro.value++;
    if (pomdoro.value > 59) {
        pomdoro.value = 59;
        console.log("Cannot increase above 59");
    }
    pomdoro.innerHTML = pomdoro.value;
    timer.innerText = pomdoro.value + ":" + seconds;
}

function decerementPomodoro() {
    pomdoro.value--;
    if (pomdoro.value < 0) {
        pomdoro.value = 0;
        console.log("Cannot reduce below 0");
    }
    pomdoro.innerHTML = pomdoro.value;
    timer.innerText = pomdoro.value + ":" + seconds;
}

function incrementPomodoroBreak() {
    pomdoroBreak.value++;
    if (pomdoroBreak.value > 59) {
        pomdoroBreak.value = 59;
        console.log("Cannot increase above 59");
    }
    pomdoroBreak.innerHTML = pomdoroBreak.value;
}

function decerementPomodoroBreak() {
    pomdoroBreak.value--;
    if (pomdoroBreak.value < 0) {
        pomdoroBreak.value = 0;
        console.log("Cannot reduce below 0");
    }
    pomdoroBreak.innerHTML = pomdoroBreak.value;
}

function startTimer() {
    let pomdoroValue = pomdoro.value;
    let pomdoroBreakValue = pomdoroBreak.value;
    intervalID = setInterval(() => {

        seconds--;
        if (seconds < 0) {
            pomdoro.value--;
            seconds = 59;
        }
        timer.innerText = pomdoro.value + ":" + seconds;


    }, 1000);
    timerID = setTimeout(() => {
        alarm.play();
        stopTimer();
        alert("TimeOut");
    }, pomdoroValue * 1000 * 60);
}

function stopTimer() {
    seconds = "00";
    let pomdoroValue = pomdoro.value;
    let pomdoroBreakValue = pomdoroBreak.value;
    clearTimeout(intervalID);
    clearTimeout(timerID);
    timer.innerText = pomdoro.value + ":" + seconds;
    alert("Timer Stopped");
    alert("Take break for " + pomdoroBreakValue + " minutes.");
}


function resetTimer() {
    clearTimeout(intervalID);
    clearTimeout(timerID);
    pomdoro.value = 25;
    seconds = "00";
    pomdoroBreak.value = 5;
    pomdoro.innerText = pomdoro.value;
    pomdoroBreak.innerText = pomdoroBreak.value;
    timer.innerText = pomdoro.value + ":" + seconds;
}