function convertTime(time) {
    const timeRe = /([01][0-9]|2[0-3]):([0-5][0-9])/gi;
    const match = timeRe.exec(time);
    if (match !== null) {
        let hr = match[1];
        const min = match[2];
        hr = convertTo12Hrs(hr);
        let angle = ((min * 6) - (hr * 30)) - min * 0.5;
        angle = Math.abs(angle);

        return Math.min(angle, 360 - angle);
    }
    throw new Error("Input time is invalid");
}

function convertTo12Hrs(hour) {
    if (hour >= 12) {
        hour -= 12;
    }

    return hour;
}

module.exports = { convertTime };
