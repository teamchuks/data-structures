// calculating the age of the car using the method in the object
const car = {
  make: "Benz",
  model: "glk",
  year: 2000,
  color: "black",
  age: function () {
    let currentYear = 2024;
    const info = currentYear - car.year;
    console.log(info);
  },
};
car.age();
// console.log(car);
