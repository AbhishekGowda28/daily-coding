// @ts-check

import { square } from './models.js';
import { Camera } from './camera.js';
import { setUpCanvas } from './canvas.js';
import { drawPolygon, toMesh } from './geometry.js';

const camera = new Camera();
const mesh = toMesh(square);

const position = { x: 0, y: 0, z: 0 };

const canvas = setUpCanvas();


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

function drawMesh(mesh) {
    mesh.forEach(shape => {
        const drawnShape = shape.map(point => ({ ...point }));
        drawnShape.forEach(point => {
            offSet(point, position);
            camera.transform(point);
            // movePoints(point);
        });
        drawPolygon(drawnShape, canvas);
    });
}

function animate() {
    canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    position.x += 0.1;
    camera.distance.z += 10;
    drawMesh(mesh);
    requestAnimationFrame(animate);
}

animate();
