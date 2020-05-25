const { finalScore } = require('./grading');

describe('Grading Student Marks', () => {
    describe('finalScore', () => {
        test('With marks 73 grade', () => {
            let scoredGrade = 73;
            let expectedGrade = 75;
            let actualGrade = finalScore(scoredGrade);
            expect(actualGrade).toEqual(expectedGrade);
        });
        test('With marks 67 grade', () => {
            let scoredGrade = 67;
            let expectedGrade = 67;
            let actualGrade = finalScore(scoredGrade);
            expect(actualGrade).toEqual(expectedGrade);
        });
        test('With marks 38 grade', () => {
            let scoredGrade = 38;
            let expectedGrade = 40;
            let actualGrade = finalScore(scoredGrade);
            expect(actualGrade).toEqual(expectedGrade);
        });
        test('With marks 33 grade', () => {
            let scoredGrade = 33;
            let expectedGrade = 33;
            let actualGrade = finalScore(scoredGrade);
            expect(actualGrade).toEqual(expectedGrade);
        });
        test('With marks 84 grade', () => {
            let scoredGrade = 84;
            let expectedGrade = 85;
            let actualGrade = finalScore(scoredGrade);
            expect(actualGrade).toEqual(expectedGrade);
        });
        test('With marks 29 grade', () => {
            let scoredGrade = 29;
            let expectedGrade = 29;
            let actualGrade = finalScore(scoredGrade);
            expect(actualGrade).toEqual(expectedGrade);
        });
    });
});
