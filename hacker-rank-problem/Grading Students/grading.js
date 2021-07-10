function finalScore(gradeScored) {
    let finalGrade = gradeScored;
    if (finalGrade > 37) {
        let remainder = gradeScored % 5;
        let nearMultipleOfFive = gradeScored / 5;
        if (remainder > 2) {
            // toFixed does the floor of the object when less than 5 , eg: 7.4 => 7
            // toFixed does the ceil of the object when greater than 5 , eg: 7.6 => 8 
            finalGrade = (parseInt(nearMultipleOfFive.toFixed(0))) * 5;
        }
    }
    return finalGrade;
}

module.exports = { finalScore };