// @ts-check

import { square } from './models.js';

function setUpCanvas() {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    context.strokeStyle = "#fff";
    return context;
}

/**
 * @param {number[]} values
 */
function toPoint(values) {
    return {
        x: values[0],
        y: values[1],
        z: values[2]
    };
}

/**
 * 
 * @param {number[][]} points 
 */
function toPolygon(points) {
    return points.map(toPoint);
}

/**
 * 
 * @param {number[][][]} shape 
 */
function toMesh(shape) {
    return shape.map(toPolygon);
}

/**
 * @param {{ x: number; y: number; z: number; }[]} shape
 * @param {CanvasRenderingContext2D} context
 */
function drawPolygon(shape, context) {
    shape.forEach(point => {
        offsetToCenter(point, context.canvas);
    });
    context.beginPath();

    const first = shape[0];
    context.moveTo(first.x, first.y);
    shape.forEach(point => {
        context.lineTo(point.x, point.y);
    });
    context.lineTo(first.x, first.y);
    context.stroke();

}

/**
 * @param {{ x: number; y: number; z: number; }} point
 * @param {HTMLCanvasElement} canvas
 */
function offsetToCenter(point, canvas) {
    point.x += canvas.width / 2;
    point.y += canvas.height / 2;
}


/**
 * @param {{ x: number; y: number; z: number; }} point
 * @param {number} distance
 */
function persepective(point, distance) {
    const focal = point.z + distance;
    point.x /= focal;
    point.z /= focal;
}


const mesh = toMesh(square);
const canvas = setUpCanvas();

mesh.forEach(shape => {
    shape.forEach(point => {
        window.console.log("before", point);
        persepective(point, 50);
        window.console.log("after", point);
    });
    drawPolygon(shape, canvas);
});
