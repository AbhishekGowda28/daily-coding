const CLICKEVENT = "click";

var defaultColor = document.getElementsByClassName("default")[0];
var red = document.getElementsByClassName("red")[0];
var blue = document.getElementsByClassName("blue")[0];
var green = document.getElementsByClassName("green")[0];
var black = document.getElementsByClassName("black")[0];

var body = document.getElementsByTagName("body")[0];

defaultColor.addEventListener(CLICKEVENT, () => {
    body.className = "default-color";
});

red.addEventListener(CLICKEVENT, () => {
    body.className = "red-color";
});

blue.addEventListener(CLICKEVENT, () => {
    body.className = "blue-color";
});

green.addEventListener(CLICKEVENT, () => {
    body.className = "green-color";
});

black.addEventListener(CLICKEVENT, () => {
    body.className = "black-color";
});