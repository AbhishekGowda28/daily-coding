var rotator = document.getElementById("btn5");

var northWest = document.getElementsByName("NW")[0];
var north = document.getElementsByName("N")[0];
var northEast = document.getElementsByName("NE")[0];
var west = document.getElementsByName("W")[0];
var center = document.getElementsByName("C")[0];
var east = document.getElementsByName("E")[0];
var southWest = document.getElementsByName("SW")[0];
var south = document.getElementsByName("S")[0];
var southEast = document.getElementsByName("SE")[0];


rotator.addEventListener("click", rotat);

function rotat() {
    var data = document.getElementsByName("C")[0];
    console.log(data.name);
    changeLocationName();
}

function changeLocationName() {
    var temp = northWest.name;
    var tempValue = northWest.innerText;

    northWest.name = west.name;
    northWest.innerText = west.innerText;

    west.name = southWest.name;
    west.innerText = southWest.innerText;

    southWest.name = south.name;
    southWest.innerText = south.innerText;

    south.name = southEast.name;
    south.innerText = southEast.innerText;

    southEast.name = east.name;
    southEast.innerText = east.innerText;

    east.name = northEast.name;
    east.innerText = northEast.innerText;

    northEast.name = north.name;
    northEast.innerText = north.innerText;

    north.name = temp;
    north.innerText = tempValue;
}
