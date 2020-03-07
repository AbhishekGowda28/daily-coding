function increasingSequence() {
  // console.log("increasingSequence");
}

function checkIncreasingSequence(array) {
  let increaseingOrder = true;
  let previous = array[0];

  for (let i = 1; i < array.length; i++) {
    if (previous > array[i]) {
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

increasingSequence();
