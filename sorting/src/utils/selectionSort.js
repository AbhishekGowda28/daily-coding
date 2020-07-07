// @ts-check

function* yeildSelectionSort(inputArray) {
    for (let index = 0; index < inputArray.length; index++) {
        let leastValueIndex = index;
        let elementCounter = index + 1;
        while (elementCounter < inputArray.length) {
            if (inputArray[elementCounter] < inputArray[leastValueIndex]) {
                leastValueIndex = elementCounter;
            }
            elementCounter++;
        }
        if (leastValueIndex !== index) {
            let swapPlaceHolder = inputArray[index];
            inputArray[index] = inputArray[leastValueIndex];
            inputArray[leastValueIndex] = swapPlaceHolder;
        }
        yield inputArray;
    }
    return inputArray;
}

/**
 * @param {any[] | string} inputArray
 */
function selectionSort(inputArray) {
    if (typeof inputArray === "string") {
        inputArray = inputArray.split("");
    }
    for (let index = 0; index < inputArray.length; index++) {
        let leastValueIndex = index;
        let elementCounter = index + 1;
        while (elementCounter < inputArray.length) {
            if (inputArray[elementCounter] < inputArray[index]) {
                leastValueIndex = elementCounter;
            }
            elementCounter++;
        }
        if (leastValueIndex !== index) {
            let swapPlaceHolder = inputArray[index];
            inputArray[index] = inputArray[leastValueIndex];
            inputArray[leastValueIndex] = swapPlaceHolder;
        }
    }
    return inputArray;
}

export { yeildSelectionSort, selectionSort };

// let result = selectionSort([]);
// console.log(result)
// result = selectionSort("");
// console.log(result)
// result = selectionSort([1, 5, 3, 4, 2]);
// console.log(result)
// result = selectionSort(["a", "b", "h", "i", "s", "h", "e", "k"]);
// console.log(result)
// result = selectionSort("gowda");
// console.log(result)
// result = selectionSort("Abhishek Gowda");
// console.log(result)
