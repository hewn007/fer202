const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St"
    // city is missing
  }
};

// Destructuring with default value for city
const { address: { street, city = "Unknown City" } } = person;

console.log(street); // 123 Main St
console.log(city);   // Unknown City