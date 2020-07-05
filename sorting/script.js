const { SelectionSort } = require("./selectionSort");

const randomArray = [], ARRAY_SIZE = 130;

function getRandomColor(lightness) {
    return `hsl(240, 99%, ${lightness}%)`;
}

for (let count = 0; count < ARRAY_SIZE; count++) {
    const value = Number((Math.random() * ARRAY_SIZE).toFixed(0));
    randomArray.push(value);
}

function createSquares(el) {
    const color = getRandomColor(ARRAY_SIZE - el)
    const element = document.createElement("div");
    element.style = `width: 50px; height: 50px; background: ${color}; float: left`;
    element.innerText = el;
    const parentElement = document.getElementsByClassName("parentElement")[0];
    parentElement.appendChild(element);
}

document.addEventListener("DOMContentLoaded", () => {
    randomArray.forEach((element) => {
        createSquares(element);
    });
    const result = SelectionSort(randomArray);
    result.forEach((element) => {
        createSquares(element);
    });
    console.log(SelectionSort);
});
