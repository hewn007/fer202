const people = [
  { name: "Ann", age: 19 },
  { name: "Bob", age: 12 },
  { name: "Cindy", age: 15 },
  { name: "David", age: 22 }
];

// Lọc tuổi teen và map sang chuỗi "Tên (tuổi)"
const teens = people
  .filter(person => person.age >= 13 && person.age <= 19)
  .map(person => `${person.name} (${person.age})`);

teens.forEach(str => console.log(str));
// Kết quả:
// Ann (19)
// Cindy (15)