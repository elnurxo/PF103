let employee1 = {
  id: 1,
  fullName: "Vahid Osmanov",
  salary: 2_500,
  experience: 2.5,
  department: "Finance",
};
let employee2 = {
  id: 2,
  fullName: "Emil Yaqubov",
  salary: 3_800,
  experience: 4,
  department: "IT",
};
let employee3 = {
  id: 3,
  fullName: "Rashad Tahirov",
  salary: 1_500,
  experience: 1,
  department: "HR",
};

// bonus system
// let bonusPercentage = 60;
// let employee1Bonus = (employee1.salary * bonusPercentage) / 100;
// let employee2Bonus = (employee2.salary * bonusPercentage) / 100;
// let employee3Bonus = (employee3.salary * bonusPercentage) / 100;

// console.log(employee1Bonus);
// console.log(employee2Bonus);
// console.log(employee3Bonus);

//function declaration (parameter)
// function calculateSum(num1, num2) {
//   console.log(num1 + num2);
// }

//function call (invoke) => (arguments)
// let num = 46;
// calculateSum(25, num);
// calculateSum(100, 57);
// calculateSum(420, 235);

// function greet(dayTime, fullName = "anonym") {
//   console.log(`good ${dayTime} ${fullName}`);
// }

// greet("morning");

// function calculateBirthYear(age = 0) {
//   const currentYear = new Date().getFullYear();
//   console.log(currentYear - age);
// }

// calculateBirthYear(21);

// function calculateSum(num1, num2) {
//   const sum = num1 + num2;
//   return sum;
// }

// const res = calculateSum(10, 12);
// console.log(res);

// function checkOddOrEven(num) {
//   if (num % 2 == 0) {
//     console.log(`${num} is even`);
//   } else {
//     console.log(`${num} is odd`);
//   }
// }

// checkOddOrEven(444);

// function findFactorial(num) {
//   //6 -> 2*3*4*5*6
//   let factorial = 1;
//   for (let i = 2; i <= num; i++) {
//     factorial *= i;
//   }
//   return factorial;
// }

// console.log(findFactorial(4));

//regular func
// function calculateSum(num1, num2) {
//   return num1 + num2;
// }

// calculateSum(34, 78);

// //anonym func (function expression)
// const calculateSumAnonym = function (num1, num2) {
//   return num1 + num2;
// };

// //arrow function (function expression)
// const calculateSumArrow = (x, y) => x + y;

// calculateSumArrow(12, 15);

// const num1 = Number(window.prompt("enter number 1: "));
// const num2 = Number(window.prompt("enter number 2: "));

// function findSumBetween(x, y) {
//   let sum = 0;
//   for (let i = x; i <= y; i++) {
//     sum += i;
//   }
//   return sum;
// }

// const result = findSumBetween(num1, num2); //1, 10 => 10
// alert(`sum of numbers between ${num1} & ${num2} is equals to ${result}`);

//Simple Cinema App
// function initCinemaApp(ticketPrice) {
//   const fullName = window.prompt("enter your fullName: ");
//   const age = Number(window.prompt("enter your age: "));
//   if (age < 18) {
//     alert("age restricted!");
//     return;
//   }
//   let balance = Number(window.prompt("enter your balance: "));
//   const ticketQuantity = Number(
//     window.prompt("how many tickets do you want? ")
//   );

//   if (balance >= ticketPrice * ticketQuantity) {
//     balance -= ticketPrice * ticketQuantity;
//     alert(`welcome ${fullName} to the cinema!`);
//     alert(
//       `remaining balance is ${balance} | ticket price: ${ticketPrice} | ticket quantity: ${ticketQuantity}`
//     );
//   } else {
//     alert("insufficient balance!");
//   }
// }

// initCinemaApp(5.5);

// function test(message = "no text given") {
//   let x = 5;
//   console.log(x);
//   return x;
// }

//IIFE
(function (x = 1) {
  console.log("hey there Immediately Invoked Function Expression", x ** 2);
})(25);
