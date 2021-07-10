var btn = document.getElementsByClassName("btn");

document.addEventListener("click", changeButton);

function changeButton(this) {
    alert("dada!!");
}



function primeList(num) {
    var numberList = [];

    for (i = 2; i <= num; i++)
        numberList.push(i);

    var counter = 0;
    while (counter < Math.ceil(Math.sqrt(num))) {
        var number = numberList[counter];
        for (i = counter + 1; i < numberList.length; i++)
            if (numberList[i] % number === 0 && numberList[i] !== 0)
                numberList[i] = 0;
        counter++;
    }

    return numberList.filter(function (val) {
        return val !== 0;
    });
}

function gcd(a, b) {


    if (a < b) {
        a = a + b;
        b = a - b;
        a = a - b;
    }

    var rem = 1;

    while (rem !== 0) {
        rem = a % b;
        a = b;
        b = rem;
    }

    return a;
}

function beatTheShitUp(arr) {
    var a = arr[0],
        b = arr[1],
        number = [];

    if (a < b) {
        a = a + b;
        b = a - b;
        a = a - b;
    }

    for (var i = b; i <= a; i++)
        number.push(i);

    for (i = 1; i < a; i++) {
        num = number[i];
        j = i + 1;
        while (j < number.length) {
            if (number[j] % num === 0) {
                number[j] = number[j] / num;
            }
            j++;
        }
    }
    return number.reduce(function (a, b) {
        return a *= b;
    });
}


/*
    Input  : flatenArray([1,[2,[3,[4]]]]);
    Output : Array [ 1, 2, 3, 4 ]

*/
function flatenArray(arr) {

    var flatArray = [].concat(...arr);
    return flatArray.some(Array.isArray) ? flatenArray(flatArray) : flatArray;
}


/*
    Input  : factors(205)
    Output : Array [ 1, 5, 41, 205 ]
*/
function factors(number) {
    let fact = [1];
    for (i = 2; i <= number; i++) {
        if (number % i === 0)
            fact.push(i);
    }
    return fact;
}

function multiples(num) {
    var numberList = [];
    for (var i = 1; i <= 100; i++)
        numberList.push(i);
    return numberList.filter(function (val, index) {
        return numberList[index] % num === 0;
    });

}