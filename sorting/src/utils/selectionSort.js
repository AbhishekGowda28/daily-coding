// @ts-check

function* yeildSelectionSort() {
    yield true;
    return "";
}

/**
 * @param {any[]} inputArray
 */
function selectionSort(inputArray) {
    for (let index = 0; index < inputArray.length - 1; index++) {
        let leastValueIndex = index;
        let elementCounter = index + 1;
        while (elementCounter < inputArray.length - 1) {
            if (inputArray[index] > inputArray[elementCounter]) {
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