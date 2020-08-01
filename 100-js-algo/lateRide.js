const { secondsToMinute } = require("./time-coversion/secondsToMinute");

function lateRide(seconds) {
    const time = secondsToMinute(seconds).split(":");
    let result = 0;
    time.forEach(ele => {
        result += ele.split("").reduce((prev, cur) => prev + Number(cur), 0);
    });

    return result;
}

module.exports = { lateRide };
