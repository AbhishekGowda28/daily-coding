function SelectionSort(inputArray) {
    // console.time("SelectionSort");
    if (inputArray.length > 0) {
        if (typeof inputArray === "string") {
            inputArray = inputArray.split("");
        }
        let number_of_comprasion = 0;
        for (let inputArrayIndex = 0; inputArrayIndex < inputArray.length; inputArrayIndex++) {
            let selectedCard = inputArray[inputArrayIndex];
            for (let outerIndex = 0; outerIndex < inputArrayIndex; outerIndex++) {
                number_of_comprasion++;
                if (inputArray[outerIndex] > selectedCard) {
                    inputArray[inputArrayIndex] = inputArray[outerIndex];
                    inputArray[outerIndex] = selectedCard;
                    selectedCard = inputArray[inputArrayIndex];
                }
            }
        }
    }
    // console.timeEnd("SelectionSort");
    // console.log("Total comparisions for %s items", inputArray.length, number_of_comprasion);
    return inputArray;
}
const randomArray = [], ARRAY_SIZE = 13;

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
});
