// // Falsy Values in JavaScript - false, 0, -0, 0n, "", null, undefined, NaN
// // Truthy Values in JavaScript - true, "non empty string", [], {},
// // non-zero-number, (+-)Infinity, new Date(), Symbol("x"), BigInt(1)
// // if (-Infinity) {
// //   console.log("this is truthy value!");
// // } else {
// //   console.log("this is falsy value!");
// // }

// // TYPE CONVERSIONS (IMPLICIT, EXPLICIT)

// //explicit type conversion (by you)
// // let x = Number("24");
// // let y = parseFloat("12.6");
// // console.log(y);

// // let message = String(0);
// // let text = message.toString();
// // console.log(message);

// // const val = Boolean("hello");
// // console.log(val);

// // let z = "5" == 5;
// // console.log(typeof z);

// // let test = Boolean('false');
// // console.log(test);

// let temperature = 14; // <0 (freezing), (0 - 20 mild), (20 + hot), (40+ too hot)

// if (temperature < 0) {
//   console.log("🧊 freezing, current temperature: ", temperature);
// } else if (temperature >= 0 && temperature <= 20) {
//   console.log("🌤️ mild, current temperature: ", temperature);
// } else if (temperature > 20 && temperature < 40) {
//   console.log("🔥 hot, current temperature: ", temperature);
// } else if (temperature > 40) {
//   console.log("🥵 too hot, current temperature: ", temperature);
// } else {
//   console.log("❌ invalid input!");
// }

// //season checker
// let month = "october";

// if (month === "january" || month === "february" || month === "december") {
//   console.log("current season is winter ❄️");
// } else if (month === "march" || month === "april" || month === "may") {
//   console.log("current seasons is spring 🌸");
// } else if (month === "june" || month === "july" || month === "august") {
//   console.log("current season us summer ☀️");
// } else if (
//   month === "september" ||
//   month === "october" ||
//   month === "november"
// ) {
//   console.log("current season is fall: 🍂");
// } else {
//   console.log("❌ invalid input");
// }

// //SWITCH CASE
// let weekDay = 7;

// switch (weekDay) {
//   case 1:
//     console.log("Monday!");
//     break;
//   case 2:
//     console.log("Tuesday!");
//     break;
//   case 3:
//     console.log("Wednesday!");
//     break;
//   case 4:
//     console.log("Thursday!");
//     break;
//   case 5:
//     console.log("Friday!");
//     break;
//   case 6:
//   case 7:
//     console.log("Hooray this is weekend!");
//     break;
//   default:
//     console.log("❌ invalid day of week!");
//     break;
// }


