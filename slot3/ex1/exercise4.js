const ages = [33, 12, 20, 16];

// Destructuring: first, skip second, third (default 0), restAges
const [first, , third = 0, ...restAges] = ages;

console.log(first);     // 33
console.log(third);     // 20
console.log(restAges);  // [16]