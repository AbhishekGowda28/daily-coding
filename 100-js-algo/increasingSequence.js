function increasingSequence(input) {
  const sequence = input.map((element, index) => {

    const clone = input.slice();
    clone.splice(index, 1);

    return checkIncreasingSequence(clone);
  });

  return !sequence.includes(false);
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

console.log(increasingSequence([1, 2, 3, 2]));
console.log(increasingSequence([1, 2, 3]));
