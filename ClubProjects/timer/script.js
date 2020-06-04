// Reterive all DOM controller elements
const play_pause_button = document.getElementById("play");
const stop_reset_button = document.getElementById("stop");
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
const BLINK_INTERVAL = 750;
let position = 4;

play_pause_button.onclick = function () {
    const text = play_pause_button.innerText;
    if (text.toLowerCase() === "play") {
        play_pause_button.style = `
        background-color: red
        `;
    } else {
        play_pause_button.style = `
        background-color: green
        `;
    }
}

stop_reset_button.onclick = function () {
    const text = stop_reset_button.innerText;
    if (text.toLowerCase() === "stop") {
        stop_reset_button.style = `
        background-color: blue
        `;
    } else {
        stop_reset_button.style = `
        background-color: grey
        `;
    }
}

// Moving bliner to the left of the digital screen
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

// Moving bliner to the right of the digital screen
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

up_arrow.onclick = function () {
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

down_arrow.onclick = function () {
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

function sanitizeValue(value) {
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

function resetValue() {
    const value = previousValue();
    if (digital_time[position].innerText === "_") {
        digital_time[position].innerText = value;
    }
}

// setInterval(showAndHideBlinker, BLINK_INTERVAL);