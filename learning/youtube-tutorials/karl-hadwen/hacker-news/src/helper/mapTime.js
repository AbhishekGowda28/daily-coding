function mapTime(time) {

    const timeDiff = Math.floor((new Date() - time) / 1000);

    const Seconds_In_A_Year = 31536000;
    const Seconds_In_A_Month = 2592000;
    const Seconds_In_A_Day = 86400;
    const Seconds_In_A_Hour = 3600
    const Seconds_In_A_Minute = 60;

    let interval = Math.floor(timeDiff / Seconds_In_A_Year);

    if (interval > 1) {
        return `${interval} Years ago`;
    }
    interval = Math.floor(timeDiff / Seconds_In_A_Month);
    if (interval > 1) {
        return `${interval} Months ago`;
    }
    interval = Math.floor(timeDiff / Seconds_In_A_Day);
    if (interval > 1) {
        return `${interval} Days ago`;
    }
    interval = Math.floor(timeDiff / Seconds_In_A_Hour);
    if (interval > 1) {
        return `${interval} Hours ago`;
    }
    interval = Math.floor(timeDiff / Seconds_In_A_Minute);
    if (interval > 1) {
        return `${interval} Minutes ago`;
    } else {
        interval = Math.floor(timeDiff / 60);
        const seconds = timeDiff / 60;
        if (interval === 0) {
            return `${seconds.toFixed(0)} seconds ago`;
        } else if (seconds.toFixed(0) === "0") {
            return "Just now";
        } else {
            return `${interval} Minute ${seconds.toFixed(0)} seconds ago`;
        }
    }
}

export { mapTime };