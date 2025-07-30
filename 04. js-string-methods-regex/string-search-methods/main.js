// let message = "hello world!";

// // -> ['hello','world!'];
// // -> HELLO WORLD!
// // -> heo word!

// console.log(message.split(" "));
// console.log(message.toUpperCase());
// console.log(message.replaceAll("l", ""));
// // hello...
// console.log("hello".replaceAll("l", "1"));
// console.log("a-b-c-d".split("-")); //['a','b','c','d']

// console.log(text.indexOf("programming", 17));

// let fullName = "Jane Jonathan";
// console.log("search result: ", fullName.search(/Jane/));

// let text = "SPAIN stays mainly in the plain";
// console.log(text.matchAll(/ain/g));

// console.log(fullName.indexOf("a"));
// console.log(fullName.lastIndexOf("a"));

// let text = "iPhone 14 pro max.";
// let input = "  ayfon    ";
// console.log(text.toLowerCase().includes(input.toLowerCase().trim()));

// let url = "https://google.com";

// console.log(url.startsWith("http"));
// console.log(url.endsWith(".net"));

// let phoneNumber = "(535)-24-23-55";
// let email = "elnur@code.edu.az";

// let regex = new RegExp("abc");
// let regexSimpler = /abc/;

//EMAIL REGEX
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\(\+994\)-(55|50|51|70|77|10)-\d{3}-\d{2}-\d{2}$/;
const fullNameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
const birthDateRegex =
  /^(18\d{2}|19\d{2}|20[0-4]\d|2050)\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/;
const finCodeRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{7}$/;
const carRegex = /^(10|99|90|77)-[A-Z]{2}-\d{3}$/;

console.log(carRegex.test("10-ON-717"));

// console.log(birthDateRegex.test("2001/16/11"));

// if (phoneRegex.test("(+994)-55-431-63-13")) {
//   console.log("✅ valid phone number");
// } else {
//   console.log("❌ invalid phone number");
// }

// if (fullNameRegex.test(window.prompt("enter your full name: "))) {
//   console.log("✅ valid full name");
// } else {
//   console.log("❌ invalid full name format");
// }

