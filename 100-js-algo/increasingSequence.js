function increasingSequence() {
  console.log("increasingSequence");
  console.log(checkIncreasingSequence([1, 2, 3, 4]));
  console.log(checkIncreasingSequence([1, 2, 5, 4]));
  console.log(checkIncreasingSequence([]));
  console.log(checkIncreasingSequence([1]));
  console.log(checkIncreasingSequence([2, 1]));
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

// module.exports = {
//   increasingSequence,
// };

increasingSequence();
