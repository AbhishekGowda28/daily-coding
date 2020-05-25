var HourGlass = /** @class */ (function () {
    function HourGlass() {
        this.array = [[-9, -9, -9, 1, 1, 1], [0, -9, 0, 4, 3, 2], [-9, -9, -9, 1, 2, 3], [0, 0, 8, 6, 6, 0], [0, 0, 0, -2, 0, 0], [0, 0, 1, 2, 4, 0]];
        this.row = 6;
        this.column = 6;
        this.hourGlassSum = [];
    }
    HourGlass.prototype.createHourGlass = function (startRow, startColumn) {
        var sum = 0;
        for (var row = startRow; row <= startRow + 2; row++) {
            for (var column = startColumn; column <= startColumn + 2; column++) {
                if ((row === startRow + 1) && (column === startColumn + 1)) {
                    sum += this.array[row][column];
                }
                else if ((row === startRow + 1)) {
                    //
                }
                else {
                    sum += this.array[row][column];
                }
            }
        }
        this.hourGlassSum.push(sum);
    };
    HourGlass.prototype.findHighestOfHourGlassSum = function () {
        return this.hourGlassSum.sort(function (a, b) { return a > b; }).reverse()[0];
    };
    return HourGlass;
}());
var hourGlass = new HourGlass();
var arrayLength = 6;
for (var rowCount = 0; rowCount < arrayLength - 2; rowCount++) {
    for (var columnCount = 0; columnCount < arrayLength - 2; columnCount++) {
        hourGlass.createHourGlass(rowCount, columnCount);
    }
}
console.log(hourGlass.findHighestOfHourGlassSum());
