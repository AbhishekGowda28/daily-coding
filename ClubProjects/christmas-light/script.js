
document.addEventListener("DOMContentLoaded", () => {
    const bulbs = document.getElementsByClassName("blub");
    const playButton = document.querySelector(".controller button");
    playButton.addEventListener("click", (event) => {
        const text = event.currentTarget.value;
        if (text === "Start") {
            event.currentTarget.value = "Stop"
            playButton.innerText = "Stop";
            start(bulbs);
        } else {
            event.currentTarget.value = "Start"
            playButton.innerText = "Start";
            for (let bulbCount = 0; bulbCount < bulbs.length; bulbCount++) {
                let bulb = bulbs[bulbCount];
                bulb.classList.replace(`lite-${bulbCount + 1}`, `light-${bulbCount + 1}`)
            }
        }
    });

});

function start(bulbs) {
    for (let bulbCount = 0; bulbCount < bulbs.length; bulbCount++) {
        let bulb = bulbs[bulbCount];
        bulb.classList.replace(`light-${bulbCount + 1}`, `lite-${bulbCount + 1}`);
    }
}

