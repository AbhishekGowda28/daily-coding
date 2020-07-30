function angleType(angle) {
    if (angle < 0) {
        return "Angle is less than 0";
    }
    if (angle < 90) {
        return "acute";
    }
    if (angle === 90) {
        return "right";
    }
    if (angle === 180) {
        return "straight";
    }
    if (angle > 90 && angle < 180) {
        return "obtuse";
    }

    return "Angle is more than 180";
}

module.exports = { angleType };
