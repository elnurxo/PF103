let num = 35.88;

// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(Math.trunc(num));

// console.log(Math.abs(-45)); //? - 45
// console.log(Math.sign(45.2)); //? -1
// console.log(Math.sqrt(25));

console.log(Math.floor(Math.random() * 1000));
console.log(Math.floor(Math.random() * 10) + 1);

let numbers = [1, 2, 3, 5, 7, 3, 2, 5, 6, 32, 24, 6, 56, 43];
console.log(Math.min(...numbers));

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 6)); // Dice roll: 1 to 6

function generatePassword(length = 8) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * chars.length);
    password += chars[randIndex];
  }
  return password;
}

console.log(generatePassword(8)); // e.g., "A4k@f92X!q"
