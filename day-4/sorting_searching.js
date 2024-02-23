/* time complexity = tells us the execution time of an agorithm in relation to the size of the problem; the input size. */

// const numbers = [-1, 2, 5, 9, 10, 30, 50];
// binary search

const binarySearch = (numbers, target) => {
  let startNumber = 0;
  let endNumber = numbers.length - 1;
  //   let target = 10;

  // using a while loop;
  while (startNumber <= endNumber) {
    let middleNumber = Math.floor((startNumber + endNumber) / 2);

    if (numbers[middleNumber] === target) {
      return middleNumber;
    } else if (numbers[middleNumber] < target) {
      startNumber = middleNumber + 1;
    } else {
      endNumber = middleNumber - 1;
    }
  }
  return "No such value in the array";
};
console.log(binarySearch([-1, 2, 5, 9, 10, 30, 50], 10));
console.log(binarySearch([-1, 2, 5, 9, 10, 30, 50], 30));
console.log(binarySearch([-1, 2, 5, 9, 10, 30, 50], 6));

// another example
// const num = [-1, 3, 5, 7, 9, 11, 13, 15, 31];

function search(num, target) {
  // binary search
  // let target = 13;
  let startCount = 0;
  let endCount = num.length - 1;

  while (startCount <= endCount) {
    let middleCount = Math.floor((startCount + endCount) / 2);

    if (num[middleCount] === target) {
      return middleCount;
    } else if (num[middleCount] < target) {
      startCount = middleCount + 1;
    } else {
      endCount = middleCount - 1;
    }
  }
  return "invalid";
}
console.log(search([-1, 3, 5, 7, 9, 11, 13, 15, 31], 13));

// === sorting an array in descending order ===
const reOrder = () => {
  const array = [2, 5, 12, 40, 4, 21, 60, 3];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        let currentValue = array[i];
        array[i] = array[j];
        array[j] = currentValue;
      }
    }
  }
  console.log(array);
};
reOrder();
