const numbers = [20, 20, 20, 20, 20];

// function to calculate all numbers while looping through the array.
function sumNumbers(array) {
  let totalNumbers = 0;
  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i];
    totalNumbers = totalNumbers + currentNumber;
  }
  return totalNumbers;
}
console.log(sumNumbers(numbers));

// using the for loop without creating a function
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total = total + numbers[i];
}
console.log(total);

// using the reduce method to calculate all numbers.
const TotalNumbers = numbers.reduce(sum, 0);

function sum(accumulator, value) {
  return accumulator + value;
}
console.log(TotalNumbers);

// a one-liner
const allNumbers = numbers.reduce(
  (accumulator, value) => accumulator + value,
  0
);
console.log(allNumbers);

// using the for of loop method
const arr = [23, 34, 77, 99, 324];
let sum = 0;
for (const newSum of arr) {
  sum = sum + newSum;
}
console.log(sum);


// const digits = [4, 4, 1, 8, 3, 9, 0, 0, 5];

// function sum() {
//   let total = 0;
//   for (let i = 0; i < digits.length; i++) {
//     let current = digits[i];
//     total = total + current;
//   }
//   return total;
// }
// console.log(sum(digits));
// sum(digits);