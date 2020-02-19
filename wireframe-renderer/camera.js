class Camera {
    constructor() {
        this.distance = { z: 100 };
        this.zoomFactor = 7; 
    }

    /**
     * @param {{ x: number; y: number; z: number; }} point
     * @param {number} distance
     */
    persepective(point, distance) {
        const focal = point.z + distance;
        point.x /= focal;
        point.y /= focal;
    }

    /**
     * @param {{ x: number; y: number; z: number; }} point
     * @param {number} factor
     */
    zoom(point, factor) {
        const scale = Math.pow(factor, 2);
        point.x *= scale;
        point.y *= scale;
    }

    /**
     * @param {{ x: number; y: number; z: number; }} point
     */
    transform(point) {
        this.persepective(point, this.distance.z);
        this.zoom(point, this.zoomFactor);
    }
}

export { Camera };
