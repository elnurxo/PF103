let numbers = [1, 2, 3, 4];
let number = 5;

function addNumToList(arr, num = 0) {
  arr.push(num);
  return arr;
}
// console.log(addNumToList(numbers, number)); //[1,2,3,4,5]

function removeFromList(arr, idx) {
  arr.splice(idx, 1);
  return arr;
}
// console.log(removeFromList(numbers, 3));

//REGEX
// const regex = /abc/i;
// console.log(regex.test("abc"));

//Math Object - min, max, random, ceil, floor, round, PI, E, pow, sqrt, abs
//Date Object -
const today = new Date();
console.log(today.toLocaleString());
console.log(today.getFullYear());
console.log(today.getDate());
console.log(today.getTime()); //1970 1 Jan - current date (milliseconds)

//callback functions - HOF
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Jack", sayBye);
