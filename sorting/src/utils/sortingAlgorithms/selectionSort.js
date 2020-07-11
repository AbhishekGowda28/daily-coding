function* yeildSelectionSort(inputArray) {
    if (typeof inputArray === "string") {
        inputArray = inputArray.split("");
    }
    for (let inputArrayIndex = 0; inputArrayIndex < inputArray.length; inputArrayIndex++) {
        let leastValueIndex = inputArrayIndex;
        let counter = inputArrayIndex + 1;
        while (counter < inputArray.length) {
            if (inputArray[counter] < inputArray[leastValueIndex]) {
                leastValueIndex = counter;
            }
            counter++;
        }
        if (leastValueIndex !== inputArrayIndex) {
            let swapPlaceHolder = inputArray[inputArrayIndex];
            inputArray[inputArrayIndex] = inputArray[leastValueIndex];
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
    for (let inputArrayIndex = 0; inputArrayIndex < inputArray.length; inputArrayIndex++) {
        let leastValueIndex = inputArrayIndex;
        let counter = inputArrayIndex + 1;
        while (counter < inputArray.length) {
            if (inputArray[counter] < inputArray[inputArrayIndex]) {
                leastValueIndex = counter;
            }
            counter++;
        }
        if (leastValueIndex !== inputArrayIndex) {
            let swapPlaceHolder = inputArray[inputArrayIndex];
            inputArray[inputArrayIndex] = inputArray[leastValueIndex];
            inputArray[leastValueIndex] = swapPlaceHolder;
        }
    }
    return inputArray;
}

export { yeildSelectionSort, selectionSort };
