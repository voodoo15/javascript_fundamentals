// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

//ANSWER

function biggerNumber( number1, number2 ) {
  if ( number1 > number2 ) {
    return "Yo, " + number1 + " is bigger than " + number2 + "!<br />";
   } else {
     return "Yo, " + number2 + " is bigger than " + number1 + "!<br />";
   }
}

document.write( biggerNumber( 3, 2 ) );

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

//ANSWER

function helloWorld( language ) {

  var sayHello = undefined;

  switch( language ) {

    case "en":

    //Hello World in english
    sayHello = "Hello World!<br />";
    return sayHello;
    break;

    case "ta":

    //Hello World in tagalog ( filipino )
    sayHello = "Kumusta Mundo!<br />";
    return sayHello;
    break;

    case "fr":

    //Hello World in french
    sayHello = "Bonjour Monde!<br />";
    return sayHello;
    break;

    default:
    //return I don't understand
    sayHello = "No entiendo mi amigo!<br />";
    return sayHello;
  }
}

document.write( helloWorld( "en" ) );
document.write( helloWorld( "ta" ) );
document.write( helloWorld( "fr" ) );
document.write( helloWorld( "wha" ) );

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

//ANSWER

function gradeAnalyzer( gradeNumber ) {

  var output = undefined;

  if ( gradeNumber > 90 ) {
    output = "Wow, you're an A+ student!<br />";
    return output;

    } else if ( gradeNumber >= 80 && gradeNumber <= 89 ) {
      output = "Wow, you're an A student!<br />";
      return output;

    } else if ( gradeNumber >= 70 && gradeNumber <= 79 ) {
      output = "Wow, you're an B student!<br />";
      return output;

    } else if ( gradeNumber >= 60 && gradeNumber <= 69 ) {
      output = "Wow, you're an C student!<br />";
      return output;

    } else if ( gradeNumber >= 50 && gradeNumber < 59 ) {
      output = "Wow, you're an D student!<br />";
      return output;

    } else {
      output = "Wow...EPIC FAIL!<br />";
      return output;
  }
}

document.write( gradeAnalyzer( 95 ) );
document.write( gradeAnalyzer( 85 ) );
document.write( gradeAnalyzer( 75 ) );
document.write( gradeAnalyzer( 65 ) );
document.write( gradeAnalyzer( 55 ) );
document.write( gradeAnalyzer( 45 ) );

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize( word, number ) {

  var output = undefined;
  var pluralizedWord = undefined;

  if ( number > 1 ) {
    //check if I have to change the word to pluralize

    if ( word === "goose" ) {
      pluralizedWord = "geese";

    } else if ( word === "elk" ) {
      pluralizedWord = "elk";

    } else if ( word === "deer" ) {
      pluralizedWord = "deer";

    } else if (word === "sheep") {
      pluralizedWord = "sheep";

    } else if (word === "ox") {
      pluralizedWord = "oxen";

    } else {

      //Check if the word has an s at the end ( change to s or es)
      var checkForS = word.split("");

      if ( checkForS[ checkForS.length - 1 ] === "s" ) {
        pluralizedWord = word + "es";

      } else {
        pluralizedWord = word + "s";
      }
    }

    output = "There are " + number + " " + pluralizedWord + ".<br />";
    return output;

  } else {

    //singular
    output = "There is " + number + " " + word + ".<br />";
    return output;
  }
}

document.write( pluralize( "horse", 1 ) );
document.write( pluralize( "cow", 2 ) );
document.write( pluralize( "sheep", 3 ) );
document.write( pluralize( "deer", 4 ) );
document.write( pluralize( "elk", 5 ) );
document.write( pluralize( "ox", 6 ) );
