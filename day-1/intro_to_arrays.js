const favouriteColors = ["purple", "blue", "yellow", "red", "orange"];
// console.log(favouriteColors);

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
