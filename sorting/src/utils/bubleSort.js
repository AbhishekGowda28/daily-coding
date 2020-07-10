function* yieldBubbleSort(inputArray) {
    if (inputArray.length > 0) {
        if (typeof inputArray === "string") {
            inputArray = inputArray.split("");
        }
        for (let counter = 0; counter < inputArray.length - 1; counter++) {
            for (let innerCounter = 0; innerCounter < inputArray.length - 1 - counter; innerCounter++) {
                if (inputArray[innerCounter] > inputArray[innerCounter + 1]) {
                    let selectedItem = inputArray[innerCounter];
                    inputArray[innerCounter] = inputArray[innerCounter + 1];
                    inputArray[innerCounter + 1] = selectedItem;
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
        for (let counter = 0; counter < inputArray.length - 1; counter++) {
            for (let innerCounter = 0; innerCounter < inputArray.length - 1 - counter; innerCounter++) {
                if (inputArray[innerCounter] > inputArray[innerCounter + 1]) {
                    let selectedItem = inputArray[innerCounter];
                    inputArray[innerCounter] = inputArray[innerCounter + 1];
                    inputArray[innerCounter + 1] = selectedItem;
                }
            }
        }
    }
    return inputArray;
}

export { bubbleSort, yieldBubbleSort };
