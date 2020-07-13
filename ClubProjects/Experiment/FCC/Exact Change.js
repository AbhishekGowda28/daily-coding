// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.
// Otherwise, return change in coin and bills, sorted in highest to lowest order.

checkCashRegister(19.50, 20.00, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]);

function checkCashRegister(price, cash, cid) {
    // change to be returned to the customer
    var change = cash - price;
    // Bills to be returned to the customer
    var bills = [];

    // Iterating through the bills in the counter, starting from highest to lowest
    for (var i = cid.length - 1; i >= 0 && change != 0; i--) {
        // Actual value of the bill
        var bill = cid[i];
        var currency = valueOfBill(bill[0]);
        // Comaring the bill value with the change
        while (change >= currency && currency > 0) {
            // Decrement the value of change
            change -= currency;
            bills.push(bill);
            cid = removeBillsFromCounter(cid, bill[0]);
            currency = valueOfBill(bill[0]);
        }
    }

    return bills;
}

// Function to return the value of the bill

function valueOfBill(bill) {
    switch (bill) {
        case "PENNY":
            return 0.01;
        case "NICKEL":
            return 0.05;
        case "DIME":
            return 0.1;
        case "QUARTER":
            return 0.25;
        case "ONE":
            return 1;
        case "FIVE":
            return 5;
        case "TEN":
            return 10;
        case "TWENTY":
            return 20;
        case "ONE HUNDRED":
            return 100;
    }
}

function removeBillsFromCounter(counter, bill) {
    switch (bill) {
        case "PENNY":
            counter[0][1] = Number(counter[0][1]) - 0.01;
            break;
        case "NICKEL":
            counter[1][1] = Number(counter[1][1]) - 0.05;
            break;
        case "DIME":
            counter[2][1] = Number(counter[2][1]) - 0.1;
            break;
        case "QUARTER":
            counter[3][1] = Number(counter[3][1]) - 0.25;
            break;
        case "ONE":
            counter[4][1] = Number(counter[4][1]) - 1;
            break;
        case "FIVE":
            counter[5][1] = Number(counter[5][1]) - 5;
            break;
        case "TEN":
            counter[6][1] = Number(counter[6][1]) - 10;
            break;
        case "TWENTY":
            counter[7][1] = Number(counter[7][1]) - 20;
            break;
        case "ONE HUNDRED":
            counter[8][1] = Number(counter[8][1]) - 100;
            break;
    }
    return counter;
}