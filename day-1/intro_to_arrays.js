const favouriteColors = ["purple", "blue", "yellow", "red", "orange"];
console.log(favouriteColors);

//accessing an index
console.log(favouriteColors[2]);

favouriteColors[2] = "newColor"; //updating an array
favouriteColors[0] = "newColor"; //updating an array
favouriteColors[1] = "newColor"; //updating an array
console.log(favouriteColors);

// === ARRAY METHODS ==

// adding a color to the end of the array
favouriteColors.push("indigo"); //start the addition from the last item.
console.log(favouriteColors);

// adding a color to the beginning of the array
favouriteColors.unshift("pink", "brown"); //starts the addition from the beginning.
console.log(favouriteColors);

// removing a color from the array
favouriteColors.pop(); //removes the last item.
console.log(favouriteColors);

// removing a color from the array
favouriteColors.shift(); //removes the first item.
console.log(favouriteColors);

// adding items to empty array.
const newArray = [];
favouriteColors.forEach((newColors) => {
  newArray.push(newColors);
});
console.log(newArray);

const emptyArray = [];
emptyArray.push("boy", "girl", "fan");
console.log(emptyArray);
