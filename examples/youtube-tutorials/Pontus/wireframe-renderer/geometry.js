import { offsetToCenter } from "./canvas.js";

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

export { drawPolygon, toMesh };
