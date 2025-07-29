//JS variables - var, let, const => keywords

//JS - variable declare, assign (re-declare, re-assign)
//JS variable naming conventions

//hoisting +

//data types
// JS - 8 data type

//string (data type)
// let carBrand = "BMW";
// let carModel = "G30";

// console.log(carBrand);
// console.log(carModel);

// //char (character)
// let letter = "a";

// //number
// let year = 20;

// console.log(year);

// //big int (integer)
// let x = 13642346n;

// //string, number, bigint, boolean (null, undefined, symbol, object)

// //boolean
// let isNew = false;
// let isMale = true;
// // console.log("is this car new: ", isNew);

// let y = null; //empty string, white space
// let z;

// console.log(z);

// // let id = Symbol('155YSKJ');

// let car = {
//   brand: "Mercedes",
//   model: "Benz",
//   year: 2021,
//   isNew: true,
//   milage: 20_000,
//   color: "black",
// }; //empty object

// let x = 6;
// console.log(typeof x);

//data types +
//let var const +
//variables +
// variable naming
// operators

// camelCase, PascalCase, snake_case, kebab-case x

// let studentAge = 17;
// let CarName = "Mercedes";
// let employee_salary = 6000;
// let hasExperience = true;
// let isRetired = false;

// const PI = 3.14;
// const URL = "https://google.com";

// let num1 = 5;
// let num2 = 8;

// console.log(num1 + num2); //13
// console.log(num1 - num2); //-3
// console.log(num1 * num2); //40
// console.log(num1 / num2); // 5/8
// console.log(num1 ** num2); // 5**8
// console.log(num1 % num2); //5
// console.log(num1);
// console.log(num1++); //5
// console.log(num1);
// console.log(++num1); //7
// console.log(num1--); //6
// console.log(--num1);

// let num3 = 20;
// num3 **= 2;
// num3 -= 10;
// console.log(num3);

// console.log(5 > 2); //true
// console.log(5 == 4);
// console.log(5 != 4);
// console.log(5 >= 5);
// console.log(2 <= 3);
// console.log(1 < 0);

// console.log(5 == "5");
// console.log(5 === "5");
// console.log(5 != 5);
// console.log(5 !== "5");

// let age = 45;
// let ageStatus = age < 18 ? "minor" : age > 18 && age < 30 ? "young" : "adult";
// console.log(ageStatus);

// let firstName = "John";
// let lastName = "Doe";

// let fullName = firstName + " " + lastName;
// console.log(fullName);

// let num1 = 6;
// let num2 = 15;

// // && || !

// let result = num1 > 0 || num2 > 0;
// console.log(result);

// console.log(!(5 > 4));

// let message = "hello";
// let num = 5;
// let num2 = 15;

// console.log(typeof (num2 * message)); //NaN (not a number)

//statements - condition statement, iteration statement

// if, else, else if, switch case
// const userAge = prompt("enter your age: ");
// alert(`your age is: ${userAge}`);

// let num = 7;

// if (num % 2 == 0 && num > 0) {
//   console.log("even and positive");
// } else {
//   console.log("invalid");
// }

// let productName = "coca cola";
// let productSalePrice = 14.5;
// let productCostPrice = 5.7;
// let discount = 9;

// let priceWithDiscount = (
//   productSalePrice -
//   (productSalePrice * discount) / 100
// ).toFixed(2);
// let profit = priceWithDiscount - productCostPrice;

// console.log(priceWithDiscount);
// console.log(profit);

// if (profit > 0) {
//   console.log("your profit is: ", profit.toFixed(2));
// } else {
//   console.log("ziyana satirsan!");
// }

let userAge = 19;
let balance = 15;
const TICKET_PRICE = 7.5;
let ticket_quantity = 4;
let userName = "Zaur";

if (userAge >= 18) {
  console.log("Welcome to park cinema");
  if (balance >= TICKET_PRICE * ticket_quantity) {
    console.log("enjoyed");
    balance -= TICKET_PRICE * ticket_quantity;
    console.log("current balance: ", balance);
  } else {
    console.log("not enough balance");
  }
} else {
  console.log("Age restricted");
  console.log("current balance is: ", balance);
}
