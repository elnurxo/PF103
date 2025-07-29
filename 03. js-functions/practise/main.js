// let, var, const, variables, naming
// data types, js operators, conditions (if, else, switch-case)
// truthy-falsy values
// type conversions (implicit vs. explicit)
// array basics, object basics
// loop statements (for, while, do...while)

// 5 task
// count booleans - [true, false, 1, 0, true, "true"] => 3
// switch-case emoji - 😊, 😢, 😠
// [-1, 3, 5, -2, 0, 10] - sum of positive numbers
// const students =  [{ name: "Aysu", score: 80 },
//   { name: "Yashar", score: 45 },
//   { name: "Nermine", score: 60 },
//   { name: "Emil", score: 30 }]

//   const categories = { name: "Laptop", category: "tech" },
//   { name: "Headphones", category: "tech" },
//   { name: "Shirt", category: "clothing" },
//   { name: "Shoes", category: "clothing" },
//   { name: "Mouse", category: "tech" }

// count booleans
// const bools = [true, false, 1, 0, true, "true", true, false];
// let counter = 0;
// for (let i = 0; i < bools.length; i++) {
//   if (typeof bools[i] === "string") {
//     counter++;
//   }
// }
// console.log(counter);

// case - 😊, 😢, 😠 //happy, sad, angry
// let mood = "cry";

// switch (mood) {
//   case "sad":
//     console.log("😢");
//     break;
//   case "happy":
//     console.log("😊");
//     break;
//   case "angry":
//     console.log("😠");
//     break;

//   default:
//     console.log("invalid mood");
//     break;
// }

// sum of positive
// const numbers = [-1, 3, 5, -2, 0, 10];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     sum += numbers[i];
//   }
// }

// console.log(sum);

// const students = [
//   { name: "Aysu", score: 80 },
//   { name: "Yashar", score: 55 },
//   { name: "Nermine", score: 49 },
//   { name: "Emil", score: 30 },
// ];

// for (let i = 0; i < students.length; i++) {
//   const student = students[i];
//   if (student.score > 50) {
//     console.log(student.name);
//   }
// }

// const products = [
//   { name: "Laptop", category: "tech" },
//   { name: "Headphones", category: "tech" },
//   { name: "M&Ms", category: "candy" },
//   { name: "Shirt", category: "clothing" },
//   { name: "Snickers", category: "candy" },
//   { name: "Mouse", category: "tech" },
//   { name: "Toblerone", category: "candy" },
// ];

// let searchedCategory = window.prompt("search for category: ");
// for (let i = 0; i < products.length; i++) {
//   const product = products[i];
//   if (searchedCategory === product.category) {
//     console.log(product.name);
//   }
// }
