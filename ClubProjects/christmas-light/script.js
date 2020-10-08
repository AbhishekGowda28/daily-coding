document.addEventListener("DOMContentLoaded", () => {
    let count = 0;
    const bulbs = document.getElementsByClassName("blub");
    const playButton = document.querySelector(".controller button");
    playButton.addEventListener("click", (event) => {
        const text = event.currentTarget.value;
        if (text === "Start") {
            event.currentTarget.value = "Stop"
            playButton.innerText = "Stop";
            startBlub();
        } else {
            event.currentTarget.value = "Start"
            playButton.innerText = "Start";
            for (let bulbCount = 0; bulbCount < bulbs.length; bulbCount++) {
                let bulb = bulbs[bulbCount];
                bulb.classList.replace(`lite-${bulbCount + 1}`, `light-${bulbCount + 1}`)
            }
            clearInterval(timer);
        }
    });

    function start() {
        for (let bulbCount = 0; bulbCount < bulbs.length; bulbCount++) {
            let bulb = bulbs[bulbCount];
            if (bulbCount % 2 === count) {
                bulb.classList.replace(`light-${bulbCount + 1}`, `lite-${bulbCount + 1}`);
            } else {
                bulb.classList.replace(`lite-${bulbCount + 1}`, `light-${bulbCount + 1}`)
            }
        }
        count = (count + 1) % 2;
    }
    let timer;

    function startBlub() {
        timer = setInterval(start, 500);
    }

});