var itemList = [{
        name: "Soap",
        quantity: 5,
        cost: 1
    },
    {
        name: "Pencil",
        quantity: 5,
        cost: 1
    },
    {
        name: "Pen",
        quantity: 5,
        cost: 1
    }
];

function valueCount(objArr, key) {

    let hash = [];

    objArr.array.forEach(element => {
        hash.map(function (val) {
            return !element.includes(val);
        });
    });


}


function uniqueArray(array) {
    let uniqueElements = [];
    array.forEach(function (ele) {
        if (!uniqueElements.includes(ele)) uniqueElements.push(ele);
    });
}

function getTime() {
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var d = document.getElementById("time");
    document.write(hour + " : " + minutes + " : " + seconds);
}

function primeList(num) {
    var numberList = [];

    for (i = 2; i <= num; i++)
        numberList.push(i);

    var counter = 0;
    while (counter < numberList.length) {
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

function multiples(num) {
    var numberList = [];
    for (var i = 1; i <= 100; i++)
        numberList.push(i);
    return numberList.filter(function (val, index) {
        return numberList[index] % num === 0;
    });

}