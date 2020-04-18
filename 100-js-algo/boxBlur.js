function boxBlur(image) {
    let sum=0;
    image.forEach((err) => {
        err.forEach((data) => {
        sum+=data;
        });
    });
    sum = sum/9;
    sum = Number(e.toString().split(".")[0])
    return sum;
}

module.exports = { boxBlur };
