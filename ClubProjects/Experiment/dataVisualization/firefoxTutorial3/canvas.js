var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", clearCavas1);
var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", clearCavas2);

// Draw rectangel using Path2D() function

(function drawRectangle(x, y, width, height) {

    var rectangle = new Path2D();

    rectangle.rect(0, 0, 100, 100);

    ctx.fillStyle = "#Af9AAC";

    ctx.stroke(rectangle);
    ctx.fill(rectangle);

})();


(function drawCircle(x, y, radius) {
    var circle = new Path2D();

    circle.arc(100, 205, 100, 0, 2 * Math.PI, true);

    ctx.fillStyle = "#C0C0F2";

    ctx.fill(circle);
})();

(function rectangleFillStyle() {
    let xStart = 450;
    let yStart = 400;
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
                Math.floor(255 - 42.5 * j) + ', 0)';
            ctx.fillRect(xStart + j * 25, yStart + i * 25, 25, 25);
        }
    }

    for (var i = 0; i < 6; i++) {
        let xStart = 300;
        let yStart = 250;
        for (var j = 0; j < 6; j++) {
            ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' +
                Math.floor(255 - 42.5 * j) + ')';
            ctx.beginPath();
            ctx.arc(xStart + 12.5 + j * 25, yStart + 12.5 + i * 25, 10, 0, Math.PI * 2, true);
            ctx.stroke();
        }
    }

})();

function clearCavas1() {
    ctx.clearRect(0, 0, 1000, 600);
    horizontalLineWidth();
    verticalLineWidth();
}


function horizontalLineWidth() {
    for (let i = 1; i < 10; i++) {
        ctx.lineWidth = 1 + i;
        ctx.beginPath();
        ctx.moveTo(10 * i, 50);
        ctx.lineTo(10 * i, 100);
        ctx.stroke();
    }
}

function verticalLineWidth() {
    for (let i = 1; i < 10; i++) {
        ctx.lineWidth = 0.1 + i;
        ctx.lineCap = 'butt';
        ctx.beginPath();
        ctx.moveTo(250, 10 * i);
        ctx.lineTo(300, 10 * i);
        ctx.stroke();
    }
    for (let i = 1; i < 10; i++) {
        ctx.lineWidth = 0.1 + i;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(350, 10 * i);
        ctx.lineTo(400, 10 * i);
        ctx.stroke();
    }
    for (let i = 1; i < 10; i++) {
        ctx.lineWidth = 0.1 + i;
        ctx.lineCap = 'square';
        ctx.beginPath();
        ctx.moveTo(450, 10 * i);
        ctx.lineTo(550, 10 * i);
        ctx.stroke();
    }
}


function clearCavas2() {
    ctx.clearRect(0, 0, 1000, 600);
    lineJoin();
}

function lineJoin() {
    var lineJoin = ['round', 'bevel', 'miter'];
    ctx.lineWidth = 10;
    for (var i = 0; i < lineJoin.length; i++) {
        ctx.lineJoin = lineJoin[i];
        ctx.beginPath();
        ctx.moveTo(-5, 5 + i * 40);
        ctx.lineTo(35, 45 + i * 40);
        ctx.lineTo(75, 5 + i * 40);
        ctx.lineTo(115, 45 + i * 40);
        ctx.lineTo(155, 5 + i * 40);
        ctx.stroke();
    }
}