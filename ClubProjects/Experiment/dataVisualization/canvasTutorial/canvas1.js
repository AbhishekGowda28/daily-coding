function draw() {
    var rectangle = document.getElementById("rectangle");
    var square = document.getElementById("square");
    var circle = document.getElementById("circle");
    var clear = document.getElementById("clear");

    rectangle.addEventListener("click", drawRectangle);
    square.addEventListener("click", drawSquare);
    circle.addEventListener("click", drawCircle);
    clear.addEventListener("click", clearCanvas);
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function drawRectangle() {
    ctx.fillStyle = getRandomColors();
    ctx.fillRect(0, 0, 150, 75);
}

function drawSquare() {
    ctx.fillStyle = getRandomColors();
    ctx.fillRect(180, 100, 200, 200);
}

function drawCircle() {
    ctx.fillStyle = getRandomColors();
    ctx.beginPath();
    ctx.arc(400, 50, 40, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function clearCanvas() {
    ctx.fillStyle = "#f5f5f5";
    console.log("cleared canvas");
    ctx.fillRect(0, 0, 500, 300);
}

function getRandomColors() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}