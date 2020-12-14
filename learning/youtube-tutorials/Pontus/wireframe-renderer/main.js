// @ts-check

import { square } from './models.js';
import { Camera } from './camera.js';
import { setUpCanvas } from './canvas.js';
import { drawPolygon, toMesh } from './geometry.js';

const canvas = setUpCanvas();
const mesh = toMesh(square);
const camera = new Camera();

const position = { x: 0, y: 0, z: 0 };

/**
 * @param {{ x: number; y: number; z: number; }} point
 * @param {{ x: number; y: number; z: number; }} position
 */
function offSet(point, position) {
    point.x += position.x;
    point.y += position.y;
    point.z += position.z;
}

/**
 * @param {{ x: number; y: number; z: number; }} point
 */
function movePoints(point) {
    point.x += 0.1;
    point.y += 0.1;
    point.z += 0.1;
}

/**
 * @param {{x: number; y: number; z: number;}[][]} mesh
 */
function drawMesh(mesh) {
    mesh.forEach(shape => {
        const shapeCopy = shape.map(point => ({ ...point }));
        shapeCopy.forEach(point => {
            offSet(point, position);
            camera.transform(point);
        });
        drawPolygon(shapeCopy, canvas);
    });
}

function animate(time) {
    canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    position.x += Math.sin(time / 1000);
    position.y += Math.sin(time / 750);
    camera.distance.z += 0.1;
    drawMesh(mesh);
    requestAnimationFrame(animate);
}

animate(0);
