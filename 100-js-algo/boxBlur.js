function boxBlur(image) {
    let sum=0;
    image.forEach((data) => {
        sum+=data;
    });
    sum = sum/9;
    sum = Number(sum.toFixed(0))
    return sum;
}

module.exports = { boxBlur };
