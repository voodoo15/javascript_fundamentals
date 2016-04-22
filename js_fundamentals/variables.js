// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: job title, geographic location, partner's name, number of children.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var jobTitle = "Web Developer";
var geographicLocation = "Toronto";
var partnerName = "Ada";
var numberOfChildren = "1";
var sentence = "You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kid.";
document.write( sentence );

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their age based on the stored values.
// Output them to the screen like so: "They are NN years old.", substituting the values.

//ANSWER
function calculateAge( birthYear, currentYear ) {
  var age = currentYear - birthYear;
  return "Yo, you're " + age + "years old?  You're old dude!";
}

//Trying to see if I can get the function to work via variable
var getAge = calculateAge;

document.write( getAge( 1979, 2016 ) );


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

//ANSWER

function lifeTimeSupply( currentAge, maxAge, foodAmount ) {
  var yearsRemaining = maxAge - currentAge;
  var totalAmtFood = yearsRemaining * foodAmount * 365;
  return "You will need "+ totalAmtFood + " snacks to last you until the ripe old age of " + maxAge + "!";
}

document.write( lifeTimeSupply( 37, 99, 3 ) );


// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

//ANSWER

function geometrizer( radius ) {
  var diameter = radius * 2;
  var pi = 3.14;
  var circumference = diameter * pi;
  var area = pi * Math.pow( radius, 2 );
  return "Based on the radius of " + radius + ", the circumference is " + circumference + " and the area is " + area + ".";
}

document.write( geometrizer( 4 ) );


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

//ANSWER

function tempConverter( temp, unitType ) {

  var finalTemp = null;
  var statement = null;

  if ( unitType === "c" ) {
    finalTemp = ( temp * 9 / 5 ) + 32;
    statement = temp + "C is " + finalTemp + "F";
    return statement;

  } else if ( unitType === "f" ) {
      finalTemp = ( temp - 32 ) * 5 / 9;
      statement = temp + "F is " + finalTemp + "C";
      return statement;

  } else {
      return "Dunno what unit type is dude.";
  }
}

document.write( tempConverter( 32, "c" ) );
document.write( tempConverter( 32, "f" ) );
