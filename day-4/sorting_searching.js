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
