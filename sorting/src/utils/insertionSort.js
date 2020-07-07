function* yieldInsertionSort(inputArray) {
    if (inputArray.length > 0) {
        if (typeof inputArray === "string") {
            inputArray = inputArray.split("");
        }
        for (let inputArrayIndex = 0; inputArrayIndex < inputArray.length; inputArrayIndex++) {
            let selectedCard = inputArray[inputArrayIndex];
            for (let outerIndex = 0; outerIndex < inputArrayIndex; outerIndex++) {
                if (inputArray[outerIndex] > selectedCard) {
                    inputArray[inputArrayIndex] = inputArray[outerIndex];
                    inputArray[outerIndex] = selectedCard;
                    selectedCard = inputArray[inputArrayIndex];
                }
            }
            yield inputArray
        }
    }
    return inputArray;
}

function insertionSort(inputArray) {
    if (inputArray.length > 0) {
        if (typeof inputArray === "string") {
            inputArray = inputArray.split("");
        }
        for (let inputArrayIndex = 0; inputArrayIndex < inputArray.length; inputArrayIndex++) {
            let selectedCard = inputArray[inputArrayIndex];
            for (let outerIndex = 0; outerIndex < inputArrayIndex; outerIndex++) {
                if (inputArray[outerIndex] > selectedCard) {
                    inputArray[inputArrayIndex] = inputArray[outerIndex];
                    inputArray[outerIndex] = selectedCard;
                    selectedCard = inputArray[inputArrayIndex];
                }
            }
        }
    }
    return inputArray;
}

export { insertionSort, yieldInsertionSort };

