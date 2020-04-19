function boxBlur(image) {
    let sum = 0;
    image.forEach((err) => {
        err.forEach((data) => {
            sum += data;
        });
    });
    sum = sum / 9;
    sum = Math.floor(sum);

    return [[sum]];
}

module.exports = { boxBlur };
