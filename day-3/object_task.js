// Create two objects representing different shapes (e.g., circle and rectangle) with properties and methods related to their shape.

const square = {
  color: "red",
  length: 10,
  breadth: 5,
  Area() {
    return this.length * this.breadth;
  },
};

const rectangle = {
  color: "black",
  width: 20,
  height: 8,
  Area() {
    return this.width + this.height;
  },
};

console.log(square.Area());
console.log(rectangle.Area());

//  Object composition to create a complex shape
const complexShape = {
  square: square,
  rectangle: rectangle,
  condition: "very-complex",
  calculateTotal() {
    console.log(
      `this is our ${this.condition} and ${
        this.square.Area() + this.rectangle.Area()
      }`
    );
    return this.square.Area() + this.rectangle.Area();
  },
};
console.log(complexShape.calculateTotal());

// ==== task two ===
// ==== task two ===
// ==== task two ===

// Implement inheritance by creating a parent object and child objects inheriting properties and methods from the parent.
// const Shape = {
//     Total() {
//         console.log('the total is not implemented');
//     }
// }

// parent object
class Shape {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }
  calculateTotal() {
    console.log(`the total calculation of the shape is ${this.width + this.length}`);
    return this.width + this.length;
  }
}

// the child classes: Triangle, Kite, Polygon
class Triangle extends Shape {
  constructor(width, length, sides) {
    super(width, length);
    this.sides = sides;
  }
  triangleArea() {
    console.log(
      `this triangle has ${this.sides}...this is the width: ${this.width}...this is the length: ${this.length}`
    );
  }
}

class Kite extends Shape {
  constructor(width, length, color) {
    super(width, length);
    this.color = color;
  } 
  kiteArea() {
    console.log(
      `this is for kite. width is ${this.width}...it has color ${this.color} as the kite color`
    );
  }
}

class Polygon extends Shape {
  constructor(width, length, height) {
    super(width, length);
    this.height = height;
  }
  polygonArea() {
    console.log(
      `this is for polygon. polygon width is ${this.width}...height is ${this.height}...lenght is ${this.length}`
    );
  }
}

const newTriangle = new Triangle (5, 10, "4 sides");
newTriangle.calculateTotal();
newTriangle.triangleArea();

const newKite = new Kite (20, 20, "red");
newKite.calculateTotal();
newKite.kiteArea();

const newPolygon = new Polygon (100, 200, 5);
newPolygon.calculateTotal();
newPolygon.polygonArea();


