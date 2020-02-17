// @ts-check

import { square } from './models.js';

function setUpCanvas() {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
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

const canvas = setUpCanvas();
const mesh = toMesh(square);

window.console.log("canvas context", canvas, square, mesh);