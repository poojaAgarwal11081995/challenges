// Challenge 01 Template Literals

// Using the below variables in a template literal make a string 'Today's date is 23rd July 2023, temprature today will be 32 Celcius and weather will be Cloudy'

const day = "23rd July 2023";
const temprature = "32 Celcius";
const weather = "Cloudy";
const isoDate = new Date();
const date = isoDate.getDate();
const year = isoDate.getFullYear();
const monthIdx = isoDate.getMonth();
const months = [
  "January",
  "Febuary",
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
function getDateWithSuffix(date) {
  if (date > 3 && date < 21) {
    return date + "th";
  } else {
    switch (date % 10) {
      case 1:
        return date + "st";
      case 2:
        return date + "nd";
      case 3:
        return date + "rd";
      default:
        return date + "th";
    }
  }
}

console.log(
  `Today's date is ${getDateWithSuffix(date)} ${
    months[monthIdx]
  } ${year} , temprature today will be ${temprature} and weather will be ${weather}`
);

console.log(
  `Today's date is ${day}, temprature today will be ${temprature} and weather will be ${weather}`
);

// Now instead of using static variables use a make a function that accepts day, temprature and weather as parameters and print the same string using a function

function printString(day, temprature, weather) {
  console.log(
    `Today's date is ${day}, temprature today will be ${temprature} and weather will be ${weather}`
  );
}

printString(day, temprature, weather);

// Bonus challenge: Instead entering the date manually use the JavaScript Date Object (MDN LINK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) to get the date and pass it to the function.
