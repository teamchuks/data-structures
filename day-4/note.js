/* === serialization ===
Serialization is the process of converting a data structure or object into a format that can be easily stored, transmitted, or reconstructed later. In JavaScript, JSON (JavaScript Object Notation) is commonly used for serialization, as it provides a lightweight and human-readable format for data interchange.
*/ 

const user = {
  username: "john_doe",
  email: "john@example.com",
};
console.log(user);

// Serialize object to JSON string
const jsonString = JSON.stringify(user);
console.log(jsonString);

// Deserialize JSON string to object
const parsedUser = JSON.parse(jsonString);
console.log(parsedUser);
