document.addEventListener("DOMContentLoaded", () => {
    let count = 0,
        speed = 0;
    const bulbs = document.getElementsByClassName("blub");
    const playButton = document.querySelector(".controller button");
    const slider = document.getElementById("slider");
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

    slider.addEventListener("change", (event) => {
        const sliderValue = event.currentTarget.value;
        speed = 1 * Number(sliderValue);
        clearInterval(timer);
        startBlub();
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
        console.log(speed);
        timer = setInterval(start, 100 + speed);
    }

});