window.addEventListener("DOMContentLoaded", () => {
    fetch("./assets.json").then((result) => {
        console.log(result);
    });
})