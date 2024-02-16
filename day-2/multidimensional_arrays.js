const Multi2DArrays = [
  ["rice", "beans", "yam"],
  ["ferrari", "benz", "camry"],
  [1, 2, 3],
];
// console.log(Multi2DArrays);

Multi2DArrays[0][0] = "X"; //updating the value in the array.
Multi2DArrays[2][1] = "XX"; //updating the value in the array.
Multi2DArrays[1][2] = "XXX"; //updating the value in the array.

// loop through the multi2DArray
for (const newArray of Multi2DArrays) {
  const newArrayString = newArray.join(" "); //joins the items together
  console.log(newArrayString);
}

// another method using forEach
// Multi2DArrays.forEach((newArray) => {
//     console.log(newArray);
// })

console.log(Multi2DArrays[1][1]); //print any value at a position.
console.log(Multi2DArrays[0][2]); //print any value at a position.
console.log(Multi2DArrays[2][2]); //print any value at a position.
console.log(Multi2DArrays[0][0]); //print any value at a position.

const states = [
  ["kaduna", "kebbi"],
  ["london", "italy", "malaysia"],
  ["usa", ["abia", "akure", "abuja", "lagos"]],
  ["red", "blue"],
];
console.log(states);

states[2][1][1] = "item-1"; //updating the value in the array.
