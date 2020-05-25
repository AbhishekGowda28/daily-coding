var rows = 5,
    columns = 5;

function getColor(row, column) {
    if (row === column) {
        return 'match';
    } else if (row > column) {
        return 'lower';
    } else {
        return 'greater';
    }
}

function createBlocks(rows, columns) {
    var blockElement = document.getElementById('block');
    var tableElement = document.createElement('table');

    for (var rowIndex = 1; rowIndex <= rows; rowIndex++) {
        var tableRow = document.createElement("tr");
        for (var columnIndex = 1; columnIndex <= columns; columnIndex++) {
            var tableData = document.createElement('td');
            tableData.id = `${rowIndex}-${columnIndex}`;
            tableData.innerText = `${rowIndex}-${columnIndex}`;
            tableData.className = getColor(rowIndex, columnIndex);
            tableRow.appendChild(tableData);
        }
        tableElement.appendChild(tableRow);
    }
    blockElement.appendChild(tableElement);
}

createBlocks(rows, columns);