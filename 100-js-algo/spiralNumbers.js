// @ts-check

const Directions = {
    Right: "right",
    Left: "left",
    Up: "up",
    Down: "down"
};

/**
 * @param {number} num
 */
function spiralNumbers(num) {
    const sprialArray = [[]];
    let count = 1;
    let row = 0;
    let column = 0;
    let direction = Directions.Right;
    while (count <= num * num) {
        sprialArray[row][column] = count++;
        nextStep();
    }

    function nextStep() {
        if (count <= num * num) {

            if (direction === Directions.Right) {
                column++;
            } else if (direction === Directions.Down) {
                row++;
                if (sprialArray[row] === undefined && row < num) {
                    sprialArray[row] = [];
                }
            } else if (direction === Directions.Left) {
                column--;
            } else {
                row--;
            }
            if (column === num) {
                column--;
                row++;
                direction = Directions.Down;
                if (sprialArray[row] === undefined) {
                    sprialArray[row] = [];
                }
            }
            if (column < 0) {
                direction = Directions.Up;
                column++;
                row--;
            }
            if (row === num) {
                direction = Directions.Left;
                column--;
                row--;
            }
            if (sprialArray[row][column] !== undefined && direction === Directions.Up) {
                direction = Directions.Right;
                row++;
                column++;
            }
            if (sprialArray[row][column] !== undefined && direction === Directions.Right) {
                direction = Directions.Down;
                row++;
                column--;
            }
            if (sprialArray[row][column] !== undefined && direction === Directions.Down) {
                direction = Directions.Left;
                column--;
                row--;
            }
            if (sprialArray[row][column] !== undefined && direction === Directions.Left) {
                direction = Directions.Up;
                column++;
                row--;
            }
        }
    }

    return sprialArray;
}

module.exports = spiralNumbers;
