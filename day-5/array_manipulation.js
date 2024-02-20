/*
1. a function to reverse the elements in an array. 
2. a function to concatenate two arrays without using the buit-in concat method.
*/

// reversing the array using a function;
const array = [2, 5, 12, 40, 4, 21, 60, 3];
console.log(array);

function reverse() {
  let reverseArray = [];
  for (const arr of array) {
    reverseArray.unshift(arr);
  }
  console.log(reverseArray);
}
reverse();

// another method of reversing the array using a function
const numbers = [1, 2, 12, 8, 5];
const empty = [];

for (let b = numbers.length - 1; b >= 0; b--) {
  empty.push(numbers[b]);
}
console.log(empty);

// concatenating two arrays without the concat method
const firstArray = [1, 2, 3];
const secondArray = [3, 4, 5];
const thirdArray = [21, 40, 25];
// using the concat method
console.log(firstArray.concat(secondArray, thirdArray));

function concatArray() {
  let empty = [];
  // loop indvidual array
  for (let i = 0; i < firstArray.length; i++) {
    empty.push(firstArray[i]);
  }

  // loop through the second array
  for (let j = 0; j < secondArray.length; j++) {
    empty.push(secondArray[j]);
  }
  console.log(empty);
}
concatArray();

// using the spread operator to concatenate two arrays
const firstNum = [4, 4, 5];
const secondNum = [8, 9, 0];

function concatNum() {
  let reverseNum = [];
  let result = [...firstNum];

  // push the elements of the secondNum
  result.push(...secondNum);
  console.log(result);

  // reverse the answer in the array
  for (const arr of result) {
    reverseNum.unshift(arr);
  }
  console.log(reverseNum);
}
concatNum();
