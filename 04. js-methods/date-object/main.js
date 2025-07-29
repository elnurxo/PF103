const d = new Date(); //29 july 2025 (11:21)

// d.setDate(9);
// d.setFullYear(2026);

// console.log(d.toLocaleDateString());

//DATE GETTER METHODS
// console.log(d.getFullYear());
// console.log(d.getMonth() + 1);
// console.log(d.getDay());
// console.log(d.getTime()); //return milliseconds from 1 jan 1970 to date
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// console.log(months[d.getMonth()]);

// console.log("date:", d.toString());
// console.log("date:", d.toDateString());
// console.log("date:", d.toISOString());
// console.log("date:", d.toLocaleDateString());
// console.log("date:", d.toLocaleString());
// console.log("date:", d.toLocaleTimeString());
// console.log("date: ", d.toJSON());
// console.log("date: ", d.toUTCString());
// console.log("date: ", d.toTimeString());
//libraries - date-picker-js, moment-js

function compareBirthdates(date1Str, date2Str) {
  const date1 = new Date(date1Str);
  const date2 = new Date(date2Str);

  if (isNaN(date1) || isNaN(date2)) {
    return "Invalid date(s)";
  }

  let older, younger; //undefined

  if (date1 < date2) {
    older = date1;
    younger = date2;
    console.log("User 1 is older");
  } else if (date2 < date1) {
    older = date2;
    younger = date1;
    console.log("User 2 is older");
  } else {
    return "Both users are the same age";
  }

  // Calculate age difference
  const diffTime = younger - older; // in milliseconds
  const diffDate = new Date(diffTime);

  const years = diffDate.getUTCFullYear() - 1970;
  const months = diffDate.getUTCMonth();
  const days = diffDate.getUTCDate() - 1;

  return `${years} year(s), ${months} month(s), and ${days} day(s) older`;
}

// Example usage
console.log(compareBirthdates("1993-07-18", "2005-05-31")); // User 1 is older
