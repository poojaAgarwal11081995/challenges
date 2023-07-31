// Challenge 04 Destructuring

// Populate the person object with your data and covert the printDetails function to use destructuring and call the function.
// The console output should look like 'Abhishek Sawant is 23 years old and lives in Vadodara'

const person = {
  fname: "Pooja",
  lname: "Agarwal",
  age: 27,
  location: "Jaipur",
};

function printDetails(person) {
  const { fname, lname, age, location } = person;
  const details = `${fname} ${lname} is ${age} years old and lives in ${location}`;
  console.log(details);
}

printDetails(person);
