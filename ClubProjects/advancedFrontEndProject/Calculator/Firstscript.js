var screen = document.getElementById("screen");

var value = 0;

function clearData() {
    value = 0;
    screen.value = 0;
    console.log("screen Cleared");
}

function clearPreviousData() {
    var data = screen.value;
    var dataArray = data.split("");
    dataArray.pop();
    data = dataArray.join("");
    screen.value = data;
}


function calculate(btn) {
    let tmp = btn.value;
    if (tmp == "=") {
        var regex = /([-+*\/])/;
        var d = screen.value.split(regex);
        var val1 = d[0];
        var op = d[1];
        var val2 = d[2];
        console.log(d);
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
        screen.value = val;
    } else
        screen.value += tmp;

}

function trimToThreeDecimals(num) {
    regex = /\.\d{3,}/;
    var dec = regex.test(num);
    if (dec)
        num = num.toFixed(3);
    return num;
}