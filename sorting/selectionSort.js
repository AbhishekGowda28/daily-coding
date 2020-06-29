/**
 * @param {string | any[]} inputArray
 */
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

let result = SelectionSort([]);
console.log(result)
result = SelectionSort("");
console.log(result)
result = SelectionSort([1, 5, 3, 4, 2]);
console.log(result)
result = SelectionSort(["a", "b", "h", "i", "s", "h", "e", "k"]);
console.log(result)
result = SelectionSort("gowda");
console.log(result)
result = SelectionSort("Abhishek Gowda");
console.log(result)