function angleType(angle) {
    let returnAngle = "Angle is more than 180";
    if (angle < 0) {
        returnAngle = "Angle is less than 0";
    } else if (angle < 90) {
        returnAngle = "acute";
    } else if (angle === 90) {
        returnAngle = "right";
    } else if (angle === 180) {
        returnAngle = "straight";
    } else if (angle > 90 && angle < 180) {
        returnAngle = "obtuse";
    }

    return returnAngle;
}

module.exports = { angleType };
