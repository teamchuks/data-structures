// Write a function that takes a car object as input and checks if it has a method to calculate its age. Return true if the method exists, otherwise false.

const bus = {
  make: "coaster",
  model: "32 seater",
  year: 2000,
  color: "grey",
  age: function () {
    console.log(
      `this ${this.coaster} is mine, and it is a ${this.model}. The color is ${this.color}, and it was made in the year ${this.year}.`
    );
  },
};

// creating a function that takes the car object as an input...
function vehicle(bus) {
  // if (bus.color === 'grey') {
    //     return true;
    // } else {
      //     return false;
      // };
    
  // const { make, model, year, color } = bus;
      
  if ("age" in bus && typeof bus.age === "function") {
    return true;
  } else {
    return false;
  }
}
console.log(vehicle(bus));

// function hasCalculateAgeMethod(car) {
//   return typeof car.calculateAge === 'function';
// }

// console.log(hasCalculateAgeMethod(car));
