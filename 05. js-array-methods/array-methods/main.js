// const numbers = [5, 1, 3, 9, 7, 4, 6, 7];

// console.log(
//   "sorted array: ",
//   numbers.sort((x, y) => x - y)
// );

// let GPAs = [45, 99, 66.6, 83, 88, 54];

// console.log(GPAs.reverse()[0]); //? - 54
// const sortedArr =GPAs.toSorted((x, y) => x - y); //CHANGES OG ARRAY
// console.log(GPAs);

// let students = [
//   "gunay",
//   "zaur",
//   "gunel",
//   "Zamin",
//   "alizamin",
//   "babek",
//   "eldar",
//   "yashar",
// ];

// console.log(
//   students.sort((stud1, stud2) => {
//     return stud1.toLowerCase().trim().localeCompare(stud2.toLowerCase().trim());
//   })
// );

// let students = [
//   {
//     id: 1,
//     fullName: "John Doe",
//     major: "IT",
//     GPA: 3.5,
//     age: 21,
//   },
//   {
//     id: 2,
//     fullName: "Jane Smith",
//     major: "Business",
//     GPA: 3.8,
//     age: 22,
//   },
//   {
//     id: 3,
//     fullName: "Alice Johnson",
//     major: "Engineering",
//     GPA: 3.2,
//     age: 20,
//   },
//   {
//     id: 4,
//     fullName: "Bob Brown",
//     major: "Mathematics",
//     GPA: 3.9,
//     age: 23,
//   },
//   {
//     id: 5,
//     fullName: "Charlie White",
//     major: "Physics",
//     GPA: 3.6,
//     age: 21,
//   },
//   {
//     id: 6,
//     fullName: "David Wilson",
//     major: "Chemistry",
//     GPA: 3.4,
//     age: 22,
//   },
// ];

// //sort by GPA
// console.log(
//   students.sort((stu1, stu2) => {
//     return stu1.GPA - stu2.GPA;
//   })
// );

// //sort by Age (ascending)
// console.log(
//   students.sort((stu1, stu2) => {
//     return stu2.age - stu1.age;
//   })
// );

// //sort by fullName (A-Z)
// console.log(
//   students.sort((stu1, stu2) => {
//     return stu1.fullName.localeCompare(stu2.fullName);
//   })
// );

// let numbers = [3, 5, 7, 5, 21, 1, 9, 81, 9, 6, 8];

// console.log(numbers.indexOf(9)); //? - 6
// console.log(numbers.lastIndexOf(9)); //? - 8
// console.log(numbers.includes(99)); //? true/false
// console.log(
//   numbers.findIndex((num) => {
//     return num % 2 === 0;
//   })
// );

// let products = [
//   {
//     id: 1,
//     name: "Laptop",
//     price: 999.99,
//     category: "Electronics",
//   },
//   {
//     id: 2,
//     name: "Smartphone",
//     price: 599.99,
//     category: "Electronics",
//   },
//   {
//     id: 3,
//     name: "Tablet",
//     price: 399.99,
//     category: "Electronics",
//   },
//   {
//     id: 4,
//     name: "Headphones",
//     price: 199.99,
//     category: "Accessories",
//   },
//   {
//     id: 5,
//     name: "Smartwatch",
//     price: 249.99,
//     category: "Accessories",
//   },
//   {
//     id: 6,
//     name: "Wireless Charger",
//     price: 49.99,
//     category: "Accessories",
//   },
//   {
//     id: 7,
//     name: "Office Chair",
//     price: 199.99,
//     category: "Furniture",
//   },
//   {
//     id: 8,
//     name: "Desk Lamp",
//     price: 89.99,
//     category: "Furniture",
//   },
//   {
//     id: 9,
//     name: "Bookshelf",
//     price: 299.99,
//     category: "Furniture",
//   },
// ];

//find first product price < 100
// const cheapProduct = products.find((product) => {
//   return product.price < 100;
// });
// console.log(cheapProduct);

// //category - Furniture (first product)
// const allFurniture = products.filter((p) => {
//   return p.category === "Furniture" && p.price < 100;
// });

// const input = "shelf";

// const foundProduct = products.find(function (prod) {
//   return prod.name.toLowerCase().trim().includes(input.toLowerCase().trim());
// });

// console.log("found product: ", foundProduct);

// let numbers = [2, 5, 3]; // [4, 10, 6]

// //iteration methods (array) - FOREACH does not return
// const result = numbers.forEach((num) => {
//   return num * 2;
// });

// console.log("result: ", result); //? - undefined

// const result2 = numbers.map((num) => {
//   return num * 2;
// });
// console.log("result 2: ", result2); //? - [4, 10, 6]

// console.log(
//   numbers.filter((n) => {
//     return n % 2 === 1;
//   })
// );

// console.log(
//   numbers.every((n) => {
//     return n % 2 === 0;
//   })
// );

// console.log(
//   numbers.some((n) => {
//     return n % 2 === 0;
//   })
// );

// const majors = ["it", "finance", "hr"];

// const copy = [...majors];

// let phones = ["iphone", "samsung", "nokia", "mi"];
// let first, rest;

// [first, ...rest] = [...phones];

// console.log("iphone:", first);
// console.log("rest: ", rest);

const numbers = [1, 3, 5, 7, 4, 2];

const sum = numbers.reduceRight((acc, currentVal) => {
  return (acc += currentVal);
}, 0);

console.log("sum: ", sum);
