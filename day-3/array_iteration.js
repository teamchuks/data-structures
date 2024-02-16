const numbers = [20, 20, 20, 20, 20];

// function to calculate all numbers while looping through the array.
function sumNumbers(array) {
    let totalNumbers = 0;
    for(let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        totalNumbers = totalNumbers + currentNumber;
    }
    return totalNumbers;
}
console.log(sumNumbers(numbers));


// using the reduce method to calculate all numbers.
const TotalNumbers = numbers.reduce(sum, 0);

function sum(accumulator, value) {
    return accumulator + value;
}
console.log(TotalNumbers);

// a one-liner 
const allNumbers = numbers.reduce((accumulator, value) => accumulator + value, 0);
console.log(allNumbers);
