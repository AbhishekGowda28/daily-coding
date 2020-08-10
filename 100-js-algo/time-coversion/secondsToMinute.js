function secondsToMinute(seconds) {
    const minute = (seconds / 60).toFixed(0);
    seconds %= 60;

    return `${minute}:${seconds}`;
}

module.exports = { secondsToMinute };
