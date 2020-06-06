// Reterive all DOM controller elements
const play_pause_button = document.getElementById("play");
const reset_button = document.getElementById("reset");
const up_arrow = document.getElementById("up");
const down_arrow = document.getElementById("down");
const left_arrow = document.getElementById("left");
const right_arrow = document.getElementById("right");
const digital_time = document.querySelectorAll(".display span");

let firstDigit = digital_time[0].innerText;
let secondDigit = digital_time[1].innerText;
let thirdDigit = digital_time[3].innerText;
let fourthDigit = digital_time[4].innerText;

// Contants
let show_blinker = true;
const BLINK_INTERVAL = 1000;
let position = 4;
const STATUS = {
    Playing: "playing",
    Stopped: "stopped",
    Paused: "paused"
};
let timer_status = STATUS.Stopped;

let intervalPointer = setInterval(showAndHideBlinker, BLINK_INTERVAL);
let startTimer_interval_pointer;

play_pause_button.onclick = function () {
    if (timer_status === STATUS.Paused) {
        play_pause_button.innerHTML = `<img src="Assets/play.svg" alt="play" />`;
        clearInterval(intervalPointer);
        resetValue();
        timer_status = STATUS.Playing;
        pauseTimer();
    } else {
        startTimer_interval_pointer = setInterval(startTimer, BLINK_INTERVAL)
        play_pause_button.innerHTML = `<img src="Assets/pause.svg" alt="pause" />`;
        clearInterval(intervalPointer);
        resetValue();
        timer_status = STATUS.Paused;
    }
}

reset_button.onclick = stopTimer;

/**
 * @description Moving bliner to the left of the digital screen
 */
left_arrow.onclick = function () {
    resetValue();
    if (position === 0) {
        position = 0;
    } else {
        if (position === 3) {
            position = 1;
        } else {
            position = position - 1;
        }
    }
}

/**
 * @description Moving bliner to the right of the digital screen
 */
right_arrow.onclick = function () {
    resetValue();
    if (position === 4) {
        position = 4;
    } else {
        if (position === 1) {
            position = 3;
        } else {
            position = position + 1;
        }
    }
}

up_arrow.onclick = incrementValue;
down_arrow.onclick = decrementValue;

/**
 * @param {string} value 
 * @description Converts the string to number
 */
function sanitizeValue(value) {
    // When value is _, resets the value to 0
    if (Number(value) === NaN) {
        return 0;
    }
    return Number(value);
}

function currentValue() {
    switch (position) {
        case 0: return digital_time[0].innerText;
        case 1: return digital_time[1].innerText;
        case 3: return digital_time[3].innerText;
        case 4: return digital_time[4].innerText;
        default: return digital_time[0].innerText;
    }
}

function previousValue() {
    switch (position) {
        case 0: return firstDigit;
        case 1: return secondDigit;
        case 3: return thirdDigit;
        case 4: return fourthDigit;
        default: return firstDigit;
    }
}

function updatePreviousValue() {
    switch (position) {
        case 0: firstDigit = digital_time[position].innerText; break;
        case 1: secondDigit = digital_time[position].innerText; break;
        case 3: thirdDigit = digital_time[position].innerText; break;
        case 4: fourthDigit = digital_time[position].innerText; break;
        default: firstDigit = digital_time[0].innerText;
    }
}

function showAndHideBlinker() {
    show_blinker = !show_blinker;
    if (show_blinker === true) {
        updatePreviousValue();
        digital_time[position].innerText = "_";
    } else {
        if (digital_time[position].innerText === "_") {
            digital_time[position].innerText = sanitizeValue(previousValue());
        } else {
            digital_time[position].innerText = sanitizeValue(currentValue());
        }
    }
}

/**
 * @description On moving when the binker is show used to end up showing binker,
 * this reset the value to the previous value before the binker, even when moved
 */
function resetValue() {
    const value = previousValue();
    if (digital_time[position].innerText === "_") {
        digital_time[position].innerText = value;
    }
}

/**
 * @description Resetting the Digital Time value to 0
 */
function resetClock() {
    digital_time[0].innerText = 0;
    digital_time[1].innerText = 0;
    digital_time[3].innerText = 0;
    digital_time[4].innerText = 0;
}

function startTimer() {
    position = 4;
    if (sanitizeValue(digital_time[0].innerText) === 0 && sanitizeValue(digital_time[1].innerText) === 0 && sanitizeValue(digital_time[3].innerText) === 0 && sanitizeValue(digital_time[4].innerText) === 0) {
        stopTimer();
    } else if (sanitizeValue(digital_time[1].innerText) === 0 && sanitizeValue(digital_time[3].innerText) === 0 && sanitizeValue(digital_time[4].innerText) === 0) {
        position = 0;
        digital_time[1].innerText = 9;
        digital_time[3].innerText = 5;
        digital_time[4].innerText = 9;
    } else if (sanitizeValue(digital_time[3].innerText) === 0 && sanitizeValue(digital_time[4].innerText) === 0) {
        position = 1;
        digital_time[3].innerText = 5;
        digital_time[4].innerText = 9;
    } else if (sanitizeValue(digital_time[4].innerText) === 0) {
        position = 3;
        digital_time[4].innerText = 9;
    }
    decrementValue();
}

function pauseTimer() {
    clearInterval(startTimer_interval_pointer);
}

function stopTimer() {
    resetClock();
    clearInterval(intervalPointer);
    play_pause_button.innerHTML = `<img src="Assets/play.svg" alt="play" />`;
    intervalPointer = setInterval(showAndHideBlinker, BLINK_INTERVAL);
    position = 4;
    timer_status = STATUS.Stopped;
    clearInterval(startTimer_interval_pointer);
}

function decrementValue() {
    let currentPositionValue = currentValue();
    if (currentPositionValue === "_") {
        currentPositionValue = sanitizeValue(previousValue())
    }
    currentPositionValue -= 1;
    if (currentPositionValue < 0) {
        currentPositionValue = 0;
    }
    digital_time[position].innerText = currentPositionValue;
}

function incrementValue() {
    let currentPositionValue = currentValue();
    if (currentPositionValue === "_") {
        currentPositionValue = sanitizeValue(previousValue())
    }
    currentPositionValue = Number(currentPositionValue);
    currentPositionValue += 1;
    if (currentPositionValue > 9) {
        currentPositionValue = 9
    }
    if (position === 0 || position === 3) {
        if (currentPositionValue > 5) {
            currentPositionValue = 5
        }
    }
    digital_time[position].innerText = currentPositionValue;
}
