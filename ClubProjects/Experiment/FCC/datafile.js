// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {


  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

function symetric(a, b) {
  var c = a.filter(function (val) {
    return !b.includes(val);
  });
  var d = b.filter(function (val) {
    return !a.includes(val);
  });
  d.forEach(function (val) {
    c.push(val);
  });
  return c.sort(function (a, b) {
    return a - b;
  });
}

function removeRepativeElements(arr) {
  return arr.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
}

function sym(args) {
  var totalArguments = arguments.length;
  var returnList = symetric(arguments[0], arguments[1]);
  for (var i = 2; i < totalArguments; i++) {
    returnList = symetric(returnList, arguments[i]);
  }
  return removeRepativeElements(returnList);
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);


/* FCC */

// Exact Change

function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  // Here is your change, ma'am.
  if (change === totalChangeInCounter(cid))
    return "Closed";
  else if (change > totalChangeInCounter(cid))
    return "Insufficient Funds";
  else {
    var changeToCustomer = drain(change, cid);
    if (changeToCustomer === "Insufficient Funds")
      return "Insufficient Funds"
    else
      return changeToCustomer;
  }
}

function totalChangeInCounter(cid) {
  var total = 0;
  for (i = 0; i < cid.length; i++) {
    total += cid[i][1];
  }
  return Number(total.toFixed(2));
}

function getBillValue(bill) {
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
      return 1.00;
    case "FIVE":
      return 5.00;
    case "TEN":
      return 10.00;
    case "TWENTY":
      return 20.00;
    case "ONE HUNDRED":
      return 100.00;
  }
}

function returnChanges(bill, cid) {
  var value = getBillValue(bill);
  var i = 0;
  while (cid[i][0] !== bill) i++;
  cid[i][1] -= value;
  return cid;
}

function drain(change, cid) {
  var initialChange = change;
  var totalMoney = 0;
  var returnChangeToCustomer = [];
  var pushValue = false;
  var drainValue = 0;
  for (var i = cid.length - 1; i >= 0; i--) {
    var bill = cid[i][0];
    var value = getBillValue(bill);
    while (value <= change && cid[i][1] >= value) {
      drainValue += value;
      change = Number(change.toFixed(2)) - Number(value.toFixed(2));
      totalMoney += value;
      cid = returnChanges(bill, cid);
      pushValue = true;
    }
    if (pushValue) {
      var arr = [];
      arr.push(bill);
      arr.push(Number(drainValue.toFixed(2)));
      returnChangeToCustomer.push(arr);
      pushValue = false;
      drainValue = 0;
    }
  }
  if (Number(totalMoney.toFixed(2)) !== initialChange)
    return "Insufficient Funds"
  else
    return returnChangeToCustomer;
}


/* Reccurision  */

var data = "abb";


// arrFirstElement = ["a", "b", "b"];
// arrElements = ["bb", "ba", "ab"];


function createReccurissionArray(data) {
  var arrFirstElement = [];
  var arrElements = [];

  var firstElemetVerification = data.splice(0, 1);

  do {
    var firstElement = firstElemetVerification;
    var elements = data;

    arrFirstElement.push(firstElement);
    arrElements.push(elements);
    elements.push(firstElement);
    firstElement = data.splice(0, 1);
  } while (firstElement !== firstElemetVerification);

  var reccurisiveObject = {
    singleElements: arrFirstElement,
    elements: arrElements
  }

  return reccurisiveObject;
}



// arrFirstElement[i]+arrElements[arrElements.length-2]+arrElements[arrElements.length-1]




// rotateElements
// given : abb
// output : bba
function rotateElement(arr) {
  var fetcherArray = arr,
    counter = 0;
  var element = arr.splice(0, 1);
  while (counter <= fetcherArray.length) {
    premitative.push(singleElement + arr.toString + element);

    counter++;
  }
}

function pairwise(arr, arg) {
  var count = 0;
  arr.map(function (value, index, array) {
    var re = /[0-9]+/gi;
    if (re.test(value)) {
      var inverseValue = arg - value;
      var inverseIndex = array.indexOf(inverseValue);
      if (inverseIndex !== -1 && inverseIndex != index) {
        count = count + index + inverseIndex;
        console.log(`value : ${value}\nindex : ${index}\nInverseValue : ${inverseValue}\nInverseIndex : ${inverseIndex}`);
        array[index] = "A";
        array[inverseIndex] = "B";
      }
    }
  });
  return count;
}

/* Map the Debris  */

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  arr.map(function (value) {
    var alt = value.avgAlt;
    delete value.avgAlt;
    value.orbitalPeriod = Number((2 * Math.PI * Math.sqrt(Math.pow((earthRadius + alt), 3) / GM)).toFixed(0));
  });
  return arr;
}