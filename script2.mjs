const currentYear = document.getElementById(`year`)
const currentSeason = document.getElementById(`season`)
const currentHeight = document.getElementById(`height`)
const currentStr = document.getElementById(`sturdiness`)


let yearIs = 0
let seasonIs = `Spring`
let heightIs = 1
let strIs = 1

currentYear.textContent = `It is year ${yearIs}`
currentSeason.textContent = `The time of year is ${seasonIs}`
currentHeight.textContent = `You are ${heightIs}cm tall`
currentStr.textContent = `Your sturdiness is ${strIs}`

let yearIs = 0;

// Get the button element
const button = document.querySelector('.choicebutton');

// Add an event listener to the button
button.addEventListener('click', function() {
  // Increment the yearIs variable
  yearIs += 1;

  // Display the updated value
  console.log(yearIs);
});

