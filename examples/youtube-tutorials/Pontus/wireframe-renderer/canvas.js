function setUpCanvas() {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");
    context.strokeStyle = "#fff";
    return context;
}


/**
 * @param {{ x: number; y: number; z: number; }} point
 * @param {HTMLCanvasElement} canvas
 */
function offsetToCenter(point, canvas) {
    point.x += canvas.width / 2;
    point.y += canvas.height / 2;
}

export { setUpCanvas, offsetToCenter };
