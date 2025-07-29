let message = "hello javascript";
let firstName = "johnathan";
const planet = "mars";

//string methods
console.log(planet.length); //? - 4
console.log(planet.charAt(0)); //? - m
console.log(planet.at(0)); //? - m
console.log(planet[0]); //? - m
console.log(planet.charCodeAt(0)); //? - 109 (ASCII code)
console.log(planet.codePointAt(0)); //? - 109 (ASCII code)
console.log(planet.concat(" ", "planet")); //? - (+)
console.log(planet.slice(1, 3)); //? - "ar" (can take -1)
console.log(planet.substring(1, 2)); //? - "a"
console.log(planet.substr(1, 2)); //? - "ar"
console.log(planet[0].toUpperCase().concat(planet.slice(1))); //capitalize
console.log("EartH".toLowerCase());
// console.log("\uD83D".isWellFormed());
// let text = "Hello World \uD800";
// let result = text.toWellFormed();
// console.log(result);
console.log("   hello   ".trim());
console.log("hey".padEnd(6, ".")); //? - hey...
console.log("hey".padStart(5, "!")); //? - !!hey
console.log(planet.repeat(3)); //? - marsmarsmars
console.log(planet.replace("m", "M")); //? - Mars
console.log("solom".replaceAll("o", "a"));
console.log("apple,peach,banana".split("")); //? - returns array according to splitter

let fullName = "John Doe";
let fullNameArr = fullName.split(" ");
console.log(fullNameArr[1]);


//functions + string methods
