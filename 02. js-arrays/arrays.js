// let message = "hello js!";
// let num = 21;
// let isFavorite = true;
// let computer = {
//   id: 1,
//   price: 3400,
//   name: "macBook pro m4",
// };

// //LISTS
// let fruits = ["banana", "apple", "kiwi", "peach"]; //empty array (true) (length - 1) (index starts with 0)

// fruits[0] -> banana
// fruits.length - 3

// const numbers = [1, 2, 3, 4, 5];

// numbers[2] = 33;
// numbers[numbers.length] = 7;

// console.log(numbers);

// console.log(numbers.length);
// console.log(numbers[5]);
// console.log(numbers[numbers.length - 1]);

// let prices = [1.25, 5.5]; //reference type (1.2.4.5.210)
// let price = 99.99; //value type

// // console.log(price == 99.99); //true
// console.log([1] == [1]);

// let numbers = [1, 2, 3];
// let copyArray = numbers; //with different reference

// numbers[0] = "hello";

// console.log(numbers); //? - ['hello',2,3]
// console.log(copyArray); //? - ['hello',2,3]

// let word = "javascript";
// console.log(word[word.length - 1]);

// let fullName = "Mark Doe";

// if (fullName[0] === "J") {
//   console.log(true);
// } else {
//   console.log(false);
// }

//condition statements - if, else if, else, switch, case

//loop statements - for, while, do...while (for-in, for-of)

// let numbers = [4, 2, 8, 7, 9, 12, 21, 8, 5];

// for (let index = numbers.length - 1; index >= 0; index--) {
//   const element = numbers[index];
//   console.log("element: ", element);
// }

// let numbers = [2, 4, 3, 7, 9, 6]; //31
// let sum = 0;
// let result = 1;
// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   result *= element;
//   sum += element;
// }

// console.log("total sum: ", (sum / numbers.length).toFixed(2));
// console.log("total output: ", result);

// let number = 6263;

//check if number is prime or complex
// let num = 6263;
// let counter = 0;
// let divider = 2;

// while (divider < num) {
//   if (num % divider === 0) {
//     counter++;
//     console.log("number is complex!");
//     break;
//   }
//   divider++;
// }

// if (counter == 0) {
//   console.log("number is prime!");
// }

// let num1 = 45;
// let num2 = 68;

// let sum = 0;

// while (num1 < num2) {
//   sum += num1;
//   num1++;
// }
// console.log(`sum of numbers is ${sum}`);

// do {
//   console.log("do while loop iterated!");
// } while (5 === 4);

// while (5 === 4) {
//   console.log("while loop iterated!");
// }

// let students = [
//   {
//     id: 1,
//     fullName: "Zaur Rustemov",
//     GPA: 4.6,
//   },
//   {
//     id: 2,
//     fullName: "Azif Vahidov",
//     GPA: 3.7,
//   },
//   {
//     id: 3,
//     fullName: "Deniz Ismayilova",
//     GPA: 4.5,
//   },
//   {
//     id: 4,
//     fullName: "Gunay Agayeva",
//     GPA: 2.8,
//   },
// ];

// for (let i = 0; i < students.length; i++) {
//   const student = students[i];
//   if (student.GPA >= 4.5) {
//     student.GPA = 5;
//   }
// }

// console.log(students);

// let products = [
//   {
//     id: 1,
//     name: "twix",
//     price: 2.5,
//   },
//   {
//     id: 2,
//     name: "fanta",
//     price: 1.5,
//   },
//   {
//     id: 3,
//     name: "donut",
//     price: 3.6,
//   },
// ];

// for (let i = 0; i < products.length; i++) {
//   const product = products[i];
//   if (product.price > 2) {
//     product.price = product.price - (product.price * 20) / 100;
//   }
// }

// console.log(products);
