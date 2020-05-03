function angleType(angle) {
    if (angle < 0) {
        return "Angle is less than 0";
    } else if (angle < 90) {
        return "acute";
    } else if (angle === 90) {
        return "right";
    } else if (angle === 180) {
        return "straight";
    } else if (angle > 90 && angle < 180) {
        return "obtuse";
    } else {
        return "Angle is more than 180";
    }
}

module.exports = { angleType };
