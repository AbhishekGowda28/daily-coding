    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgba(255,0,255,0.9)";
    ctx.fillRect(20, 20, 100, 100);

    // draw filled rectangle
    ctx.fillStyle = "rgba(0,0,255,0.5)";
    ctx.fillRect(70, 70, 100, 100);

    // draw outline of the rectangle
    ctx.strokeStyle = "#000";
    ctx.strokeRect(200, 250, 50, 50);
    ctx.fillStyle = "rgba(0,250,255,0.5)";
    ctx.fillRect(200, 250, 50, 50);

    // clear specified region of the rectangle
    ctx.clearRect(95, 95, 50, 50);


    //draw triangle using lines

    (function drawTriangle() {
        ctx.beginPath();
        ctx.moveTo(400, 200);
        ctx.lineTo(200, 200);
        ctx.lineTo(300, 90);
        ctx.lineTo(400, 200);
        ctx.stroke();
        ctx.fillStyle = "rgba(112,2,2,0.6)";
        ctx.fill();
    })();


    (function splitTriangle() {

        //Split triangles

        // filled triangle
        ctx.strokeStyle = "#ccc";
        ctx.strokeRect(300, 250, 200, 200);
        ctx.strokeRect(305, 255, 190, 190);
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.beginPath();
        // draw line towards bottom
        ctx.moveTo(320, 270);
        ctx.lineTo(320, 370);
        // draw line towards right
        ctx.moveTo(320, 270);
        ctx.lineTo(420, 270);
        // connect from right end to bottom end
        ctx.lineTo(320, 370);
        ctx.fill();

        // stroke triangle
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(430, 380);
        ctx.lineTo(330, 380);
        ctx.lineTo(430, 280);
        ctx.lineTo(430, 380);
        ctx.stroke();
    })();


    (function smilyFace() {

        // Red rectangle for boundary
        ctx.strokeStyle = "red";
        ctx.strokeRect(1000, 10, 150, 150);


        // Drawing circle of the smily face

        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.arc(1075, 85, 50, 0, 2 * Math.PI, true);
        ctx.stroke();
        ctx.fillStyle = "#eca";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(1075, 85, 35, 0, Math.PI, false);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(1050, 75, 5, 0, 2 * Math.PI, true);
        ctx.fillStyle = "#00F";
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(1100, 75, 5, 0, 2 * Math.PI, true);
        ctx.fill();
        ctx.stroke();
    })();

    (function bezierAndQuadraticCurves() {
        // ctx.beginPath();
        ctx.strokeRect(800, 200, 400, 300);
        ctx.strokeRect(790, 190, 420, 320);
        ctx.stroke();

        // quadratic curve
        ctx.fillStyle = "red";
        ctx.fillRect(810, 250, 10, 10);
        ctx.beginPath();
        ctx.moveTo(810, 250);
        ctx.lineTo(900, 300);
        ctx.stroke();
        ctx.fillRect(810, 350, 10, 10);
        ctx.fillRect(900, 300, 10, 10);
        ctx.beginPath();
        ctx.moveTo(810, 250);
        ctx.quadraticCurveTo(900, 300, 810, 350);
        ctx.stroke();


        //bezier curve
        ctx.fillStyle = "green";
        ctx.fillRect(1100, 300, 10, 10);
        ctx.fillRect(1100, 400, 10, 10);
        ctx.fillRect(1000, 320, 10, 10);
        ctx.fillRect(1000, 350, 10, 10);
        ctx.beginPath();
        ctx.moveTo(1100, 300);
        ctx.bezierCurveTo(1000, 320, 1000, 350, 1100, 400);
        ctx.stroke();
    })();

    var i = 0,
        j = 0;

    // var timer = setInterval(function () {
    //     ctx.strokeStyle = "black";
    //     var x = 0 + i;
    //     var y = 0 + j;
    //     ctx.strokeRect(x, y, 5, 5);
    //     // i += Math.ceil(Math.random()*10);
    //     // j += Math.ceil(Math.random()*10);
    //     i += 5;
    //     j += 5;
    // }, 500);