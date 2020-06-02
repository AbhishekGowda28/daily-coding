// Reterive all DOM controller elements
const play_pause_button = document.getElementById("play");
const stop_reset_button = document.getElementById("stop");

play_pause_button.onclick = function () {
    const text = play_pause_button.innerText;
    if (text.toLowerCase() === "play") {
        play_pause_button.innerText = "Pause";
        play_pause_button.style = `
        background-color: red
        `;
    } else {
        play_pause_button.innerText = "Play";
        play_pause_button.style = `
        background-color: green
        `;
    }
}

stop_reset_button.onclick = function () {
    const text = stop_reset_button.innerText;
    if (text.toLowerCase() === "stop") {
        stop_reset_button.innerText = "Reset";
        stop_reset_button.style = `
        background-color: blue
        `;
    } else {
        stop_reset_button.innerText = "Stop";
        stop_reset_button.style = `
        background-color: grey
        `;
    }
}