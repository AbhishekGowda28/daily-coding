function* yieldBubbleSort(inputArray) {
    if (inputArray.length > 0) {
        if (typeof inputArray === "string") {
            inputArray = inputArray.split("");
        }
        for (let inputArrayIndex = 0; inputArrayIndex < inputArray.length - 1; inputArrayIndex++) {
            for (let counter = 0; counter < inputArray.length - 1 - inputArrayIndex; counter++) {
                if (inputArray[counter] > inputArray[counter + 1]) {
                    let selectedItem = inputArray[counter];
                    inputArray[counter] = inputArray[counter + 1];
                    inputArray[counter + 1] = selectedItem;
                }
            }
            yield inputArray;
        }
    }
    return inputArray;
}

function bubbleSort(inputArray) {
    if (inputArray.length > 0) {
        if (typeof inputArray === "string") {
            inputArray = inputArray.split("");
        }
        for (let inputArrayIndex = 0; inputArrayIndex < inputArray.length - 1; inputArrayIndex++) {
            for (let counter = 0; counter < inputArray.length - 1 - inputArrayIndex; counter++) {
                if (inputArray[counter] > inputArray[counter + 1]) {
                    let selectedItem = inputArray[counter];
                    inputArray[counter] = inputArray[counter + 1];
                    inputArray[counter + 1] = selectedItem;
                }
            }
        }
    }
    return inputArray;
}

export { bubbleSort, yieldBubbleSort };
