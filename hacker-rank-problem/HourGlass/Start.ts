class HourGlass {
    array: number[][] = [[-9, -9, -9, 1, 1, 1], [0, -9, 0, 4, 3, 2], [-9, -9, -9, 1, 2, 3], [0, 0, 8, 6, 6, 0], [0, 0, 0, -2, 0, 0], [0, 0, 1, 2, 4, 0]];
    row: number = 6;
    column: number = 6;
    hourGlassSum: any = [];

    createHourGlass(startRow: number, startColumn: number) {
        let sum: number = 0;
        for (let row: number = startRow; row <= startRow + 2; row++) {
            for (let column: number = startColumn; column <= startColumn + 2; column++) {
                if ((row === startRow + 1) && (column === startColumn + 1)) {
                    sum += this.array[row][column];
                } else if ((row === startRow + 1)) {
                    //
                } else {
                    sum += this.array[row][column];
                }
            }
        }
        this.hourGlassSum.push(sum);
    }

    findHighestOfHourGlassSum(): any {
        return this.hourGlassSum.sort((a: number, b: number) => { return a > b; }).reverse()[0];
    }
}

let hourGlass: HourGlass = new HourGlass();
const arrayLength: number = 6;
for (let rowCount: number = 0; rowCount < arrayLength - 2; rowCount++) {
    for (let columnCount: number = 0; columnCount < arrayLength - 2; columnCount++) {
        hourGlass.createHourGlass(rowCount, columnCount);
    }
}

console.log(hourGlass.findHighestOfHourGlassSum());