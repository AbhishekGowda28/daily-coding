var screen = document.getElementById("screen");
var value = 0;


// Clear whole input field
function clearData() {
    value = 0;
    screen.value = "";
    // console.log("screen Cleared");
}


//Clear only previous entry
function clearPreviousData() {
    var data = screen.value;
    var dataArray = data.split("");
    dataArray.pop();
    data = dataArray.join("");
    screen.value = data;
}


function calculate(btn) {
    // tmp is the value currently received from user.
    let tmp = btn.value;
    if (tmp == "=") {
        var regex = /([-+*\/])/;
        // elementsSrray is the elements obtainer elementsArray = ["1", "+", "6", "9"]
        var elementsArray = screen.value.split(regex);
        while (elementsArray.length > 1) {
            var element = elementsArray.shift();
            if (element == '*' || element == '/' || element == '+' || element == '-') {
                var operator = element;
                var value2 = elementsArray.shift();
                elementsArray.unshift(performOperation(value1, value2, operator));
            } else {
                var value1 = element;
            }
        }
        screen.value = elementsArray[0];
    } else
        screen.value += tmp;
}


// Restricting the decimal values to 3 precision
function trimToThreeDecimals(num) {
    regex = /\.\d{3,}/;
    var numberOver3Precision = regex.test(num);
    if (numberOver3Precision)
        num = num.toFixed(3);
    return num;
}


// Performing Arthimatic operation
function performOperation(val1, val2, op) {
    var val = 0;
    switch (op) {
        case '+':
            val = Number(val1) + Number(val2);
            break;
        case '-':
            val = Number(val1) - Number(val2);
            break;
        case '*':
            val = Number(val1) * Number(val2);
            val = trimToThreeDecimals(val);
            break;
        case '/':
            val = Number(val1) / Number(val2);
            val = trimToThreeDecimals(val);
            break;
    }
    console.log(val1 + "" + op + "" + val2 + "=" + val)
    return val;
}