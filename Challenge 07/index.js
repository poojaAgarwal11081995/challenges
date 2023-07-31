// Challenge 07 Ternary Operator

// Convert the given if else statement into ternary operation and try different value combinations of a and b to verify your code

const a = true;
const b = true;

// if (a) {
//   if (b) {
//     console.log("b is true");
//   } else {
//     console.log("b is false");
//   }
// } else {
//   console.log("a is false");
// }
const combinations = [
  { a: true, b: false },
  { a: false, b: true },
];

combinations.forEach(({ a, b }) => {
  const combination = a
    ? b
      ? "Both a and b are true"
      : "a is true, b is false"
    : "a is false";
  console.log(`a: ${a}, b: ${b} = ${combination}`);
});
