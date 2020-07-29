const expect = require(`expect`);
const { fareEstimator } = require(`../fareEstimator`);

describe(`Uber Fare Estimator`, () => {
    test(`Estimation 1`, () => {
        const rideTime = 30, rideDistance = 7, costPerMinute = [0.2, 0.35, 0.4, 0.45], costPerKm = [1.1, 1.8, 2.3, 3.5];
        const expected = [13.7, 23.1, 28.1, 38];
        const actual = fareEstimator(rideTime, rideDistance, costPerMinute, costPerKm);
        expect(actual).toStrictEqual(expected);
    });
});
