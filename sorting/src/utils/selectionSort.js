function* yeildSelectionSort(inputArray) {
    if (typeof inputArray === "string") {
        inputArray = inputArray.split("");
    }
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
