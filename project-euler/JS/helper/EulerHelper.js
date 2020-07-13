var EulerHelper = /** @class */ (function () {
    function EulerHelper() {
    }
    EulerHelper.prototype.sum = function (arr) {
        return arr.reduce(function (acc, next) { return acc + next; });
    };
    EulerHelper.prototype.evenNumbers = function (startingNumber, endingNumber) {
        if (startingNumber > endingNumber) {
            startingNumber = startingNumber + endingNumber;
            endingNumber = startingNumber - endingNumber;
            startingNumber = startingNumber - endingNumber;
        }
        var evenNumbersList = [];
        for (var evenNumber = startingNumber; evenNumber <= endingNumber; evenNumber++) {
            if (evenNumber % 2 === 0) {
                evenNumbersList.push(evenNumber);
            }
        }
        return evenNumbersList;
    };
    return EulerHelper;
}());
var eulerHelper = new EulerHelper();
console.log(eulerHelper.sum([1, 2, 43, 5, 6]));
console.log(eulerHelper.evenNumbers(-3, 3));
