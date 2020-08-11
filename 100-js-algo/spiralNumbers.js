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
        if (count <= num * num) {

            if (direction === "right") {
                column++;
            } else if (direction === "down") {
                row++;
                if (sprialArray[row] === undefined && row < num) {
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
                if (sprialArray[row] === undefined && row < num) {
                    sprialArray[row] = [];
                }
            }
            if (column < 0) {
                direction = "up";
                column++;
                row--;
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
            if (sprialArray[row][column] !== undefined && direction === "up") {
                direction = "right";
                row++;
                column++;
            }
            if (sprialArray[row][column] !== undefined && direction === "right") {
                direction = "down";
                row++;
                column--;
            }
            if (sprialArray[row][column] !== undefined && direction === "down") {
                direction = "left";
                column--;
                row--;
            }
            if (sprialArray[row][column] !== undefined && direction === "left") {
                direction = "up";
                column++;
                row--;
            }
        }
    }

    return sprialArray;
}

for (let i = 0; i <= 10; i++) {
    spiralNumbers(i);
}

// spiralNumbers(2);

module.exports = spiralNumbers;
