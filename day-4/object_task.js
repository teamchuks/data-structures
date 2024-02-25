// // Tasks:
// Create an object representing a shopping cart with methods to add, remove, and update items.
// Serialize the shopping cart object into JSON format.
// Deserialize the JSON back into a shopping cart object.
// Assessment:
// Write a function that takes a JSON string representing a shopping cart and returns the total price of all items in the cart.

// first solution
const shoppingCart = {
  clothes: 5,
  shoes: 2,
  wristwatch: 1,
  add() {
    console.log("you just added an item to the cart.");
  },
  remove() {
    console.log("you just removed an item to the cart.");
  },
  update() {
    console.log("you just updated the cart.");
  },
};
shoppingCart.update();
console.log(shoppingCart);

const jsonData = JSON.stringify(shoppingCart);
console.log(jsonData);

const parsedData = JSON.parse(jsonData);
console.log(parsedData);

// === second solution ===
// === second solution ===
// === second solution ===
// === second solution ===
// === second solution ===
const shopCart = {
  items: [],
  addItem(item) {
    // console.log(`${this.items.push(item)}`);
    this.items.push(item);
  },
  removeItem(itemId) {
    this.items = this.items.filter((item) => {
      // console.log(`${itemId}`);
      return item.id !== itemId;
    });
  },
  updateQuantity(itemId, newQuantity) {
    const item = this.items.find((firstItem) => {
      if (firstItem.id === itemId) {
        firstItem.quantity = newQuantity;
        return true;
      }
      return false;
    });
  },
};
// console.log(shopCart)

shopCart.addItem({ id: 1, name: "shoes", quantity: 5 });
shopCart.addItem({ id: 2, name: "clothes", quantity: 8 });
shopCart.addItem({ id: 3, name: "sandals", quantity: 4 });

// shopCart.removeItem(33);

shopCart.updateQuantity(3, 13);

// serialize the object.
const serialize = JSON.stringify(shopCart);
console.log(serialize);

// deserialize the object.
const deserialize = JSON.parse(serialize);
console.log(deserialize);
