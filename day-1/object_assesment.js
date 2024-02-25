const person = {
  name: "John Donne",
  age: 30,
  country: "Nigeria",
  greet: function() {
    console.log(`I am from ${this.country}`)
  }
};
person.greet()
console.log(person);

// ===
const { name, age, country } = person;
console.log(`The name of the man is ${name}`);

// === creating a function that accepts the object as an input
function getUserInfo(user) {
  const { name, age } = user;

  const userInfo = `I am ${age} years old. My name is ${name}.`;
  return userInfo;
}
console.log(getUserInfo(person));
