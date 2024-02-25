//Write a function that takes a shape object as input and returns its area.

const shape = {
  radius: 2,
  color: "red",
  height: 10,
  width: 15,
  areaTotal() {
    console.log(`areaTotal is ${this.height * this.width}`);
    return this.height * this.width;
  },
};
// shape.areaTotal()
// console.log(shape.areaTotal());

function shapeObject(shapeInput) {
  //   const { radius, color, height, width } = shapeInput;
  return shapeInput.areaTotal();
}
console.log(shapeObject(shape));


