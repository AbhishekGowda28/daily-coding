// @ts-check

/**
 * @param {number} num
 */
function spiralNumbers(num) {
    const sprialArray = [[]];

    let count = 1;
    let row = 0;
    let column = 0;
    let direction = "right";
    while (count <= num * num) {
        if (sprialArray[row][column] === undefined) {
            sprialArray[row][column] = count++;
            nextStep();
        }
    }

    function nextStep() {
        console.log({ sprialArray, row, column, count });
        if (direction === "right") {
            column++;
        } else if (direction === "down") {
            row++;
            if (sprialArray[row] === undefined) {
                sprialArray[row] = [];
            }
        } else if (direction === "left") {
            column--;
        } else {
            row--;
        }
        if (column === num) {
            column--;
            row++;
            direction = "down";
            if (sprialArray[row] === undefined) {
                sprialArray[row] = [];
            }
        }
        if (column < 0) {
            column++;
            row--;
            direction = "up";
        }
        if (row === num) {
            direction = "left";
            column--;
            row--;
        }
        if (row < 0) {
            direction = "right";
            column++;
            row++;
        }
    }
    console.log(sprialArray);

    return sprialArray;
}

spiralNumbers(4);

module.exports = spiralNumbers;
