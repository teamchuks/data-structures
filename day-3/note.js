// object inheritance
// object inheritance
// == We are modeling a hierarchy of vehicles where Car, Truck, and Motorcycle inherit common characteristics from the Vehicle superclass.

//  parent class.
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  drive() {
    console.log(
      `the model of the vehicle is ${this.model}, and the vehicle make is ${this.make}...`
    );
  }
}

// the child classes: Car, Truck, Motorcycle
class Car extends Vehicle {
  constructor(make, model, color) {
    super(make, model);
    this.color = color;
  }

  park() {
    console.log(
      `parking, this is the ${this.make}. Come to ${this.model}..the color of the car is ${this.color}`
    );
  }
}

class Truck extends Vehicle {
  constructor(make, model, condition) {
    super(make, model);
    this.condition = condition;
  }

  loadTruck() {
    console.log(
      `let us load the ${this.make}. the current model is ${this.model}. We all know the truck condition is ${this.condition} `
    );
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model);
    this.year = year;
  }

  wheeling() {
    console.log(
      `we have gotten ourselves a new ${this.make}. The model we bought is ${this.model} and it is super mad. It was produced in the year ${this.year}...`
    );
  }
}

// creating the vehicle objects
const newCar = new Car("Toyota", "Camry", "red");
newCar.drive();
newCar.park();

const newTruck = new Truck("Trailer", "F-150", "bad");
newTruck.drive();
newTruck.loadTruck();

const newMotorcycle = new Motorcycle("sportbike", "GT-200", 2000);
newMotorcycle.drive();
newMotorcycle.wheeling();

// object composition
// object composition
// == We are building a system to manage car manufacturing. Each car consists of various components like Engine, Wheels, Chassis, and Transmission.

/* 1- first of all for object compositon, we create our individual smaller components. 
    2 - we create an object to wrap the various individual samller components created.
*/
// the smaller components: Engine, Wheels, Chassis, Seat
class Engine {
  start() {
    console.log("we have started this engine.");
  }
}

class Wheels {
  move() {
    console.log("this car has started moving");
  }
}

class Chassis {
  constructor(color) {
    this.color = color;
  }

  getChassis() {
    console.log(`the color of this car is ${this.color}`);
  }
}

class Seat {
  constructor(totalSeat) {
    this.totalSeat = totalSeat;
  }
}

// class motor object to wrap the individual components.
class Motor {
  constructor(Engine, Wheels, Chassis, Seat) {
    this.engine = engine;
    this.wheels = wheels;
    this.chassis = chassis;
    this.seat = seat;
  }

  start() {
    this.engine.start();
  }

  move() {
    this.wheels.move();
  }

  getChassis() {
    this.chassis.getChassis();
  }
}

// creating car objects- where they now serve as method.
const engine = new Engine();
const wheels = new Wheels();
const chassis = new Chassis("black");
const seat = new Seat(5);

const newMotor = new Motor(Engine, Wheels, Chassis, Seat);
newMotor.start();
newMotor.move();
console.log(newMotor.seat.totalSeat);
newMotor.getChassis();
