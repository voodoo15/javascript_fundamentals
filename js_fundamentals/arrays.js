// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var myFavouriteBands = [ "Stone Temple Pilots", "Chvrches", "Young Empires", "Guns n'Roses", "Tokyo Police Club", "Vampire Weekend" ]

var counter = 0;
var choice = 1;
var sentence = undefined;
var choiceSuffix = undefined;

while ( counter <= myFavouriteBands.length - 1 ) {

  if ( choice === 1 ) {
    choiceSuffix = "st";

  } else if ( choice === 2 ) {
    choiceSuffix = "nd";

  } else if (choice === 3 ) {
    choiceSuffix = "rd";

  } else {
    choiceSuffix = "th";
  }

  sentence = "My " + choice + choiceSuffix + " favourite band is " + myFavouriteBands[ counter ] + ".<br />";
  document.write( sentence );

  choice++
  counter++
}
