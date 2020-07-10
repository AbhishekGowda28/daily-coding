function* yieldInsertionSort(inputArray) {
    if (inputArray.length > 0) {
        if (typeof inputArray === "string") {
            inputArray = inputArray.split("");
        }
        for (let inputArrayIndex = 0; inputArrayIndex < inputArray.length; inputArrayIndex++) {
            let selectedCard = inputArray[inputArrayIndex];
            for (let counter = 0; counter < inputArrayIndex; counter++) {
                if (inputArray[counter] > selectedCard) {
                    inputArray[inputArrayIndex] = inputArray[counter];
                    inputArray[counter] = selectedCard;
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
            for (let counter = 0; counter < inputArrayIndex; counter++) {
                if (inputArray[counter] > selectedCard) {
                    inputArray[inputArrayIndex] = inputArray[counter];
                    inputArray[counter] = selectedCard;
                    selectedCard = inputArray[inputArrayIndex];
                }
            }
        }
    }
    return inputArray;
}

export { insertionSort, yieldInsertionSort };

