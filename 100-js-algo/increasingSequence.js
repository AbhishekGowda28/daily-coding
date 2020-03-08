const { checkForElementInArray } = require("./utils");

function increasingSequence(input) {
  const sequence = input.map((element, index) => {

    const clone = input.slice();
    clone.splice(index, 1);

    return checkIncreasingSequence(clone);
  });

  const notIncreasingSequence = checkForElementInArray(sequence, false);

  return !notIncreasingSequence;
}

function checkIncreasingSequence(array) {
  let increaseingOrder = true;
  let previous = array[0];

  for (let i = 1; i < array.length; i++) {
    if (previous >= array[i]) {
      increaseingOrder = false;
    }
    previous = array[i];
  }

  return increaseingOrder;
}

module.exports = {
  increasingSequence,
  checkIncreasingSequence
};
