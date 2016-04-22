// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

//ANSWER

function fortuneTeller( jobTitle, geographicLocation, partnerName, numberOfChildren ) {
  var sentence = "You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " +  numberOfChildren + " kid(s).";
  return sentence;
}

document.write( fortuneTeller("Web Developer", "Toronto", "Ada", "1") );

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

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

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function lifeTimeSupply( currentAge, maxAge, foodAmount ) {
  var yearsRemaining = maxAge - currentAge;
  var totalAmtFood = yearsRemaining * foodAmount * 365;
  return "You will need "+ totalAmtFood + " snacks to last you until the ripe old age of " + maxAge + "!";
}

document.write( lifeTimeSupply( 37, 99, 3 ) );

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

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

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function tempConverter( temp, unitType ) {

  var finalTemp = undefined;
  var statement = undefined;

  if ( unitType === "c" ) {
    finalTemp = ( temp * 9 / 5 ) + 32;
    statement = temp + "C is " + finalTemp.toFixed(2) + "F";
    return statement;

  } else if ( unitType === "f" ) {
      finalTemp = ( temp - 32 ) * 5 / 9;
      statement = temp + "F is " + finalTemp.toFixed(2) + "C";
      return statement;

  } else {
      return "Dunno what unit type is dude.";
  }
}

document.write( tempConverter( 32, "c" ) );
document.write( tempConverter( 32, "f" ) );
