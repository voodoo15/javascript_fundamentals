// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

//ANSWER

var counter = 0;

var even = false;

while ( counter <= 20 ) {

  even = ( counter % 2 === 0 )  ? true : false;

  if ( even === true ) {
     document.write( counter + " is even<br />" );

  } else {
     document.write( counter + " is odd<br />" );
  }

  counter++;
}

// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

//ANSWER

var counter = 0;
var multiplyByNine = undefined;
var nestedMultiplier = undefined;

while ( counter <= 10 ) {

  multiplyByNine = "main_loop:  " + counter * 9 + "<br />";
  document.write( multiplyByNine );

  if ( counter > 0 ) {
    for (i = 1; i <= 10; i++ ) {
      nestedMultiplier = "nested_loop:  " + i * counter  + "<br />";
      document.write( nestedMultiplier )
    }
  }

  counter++;

}

// EXERCISE: The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

//ANSWER

function gradeAnalyzer( gradeNumber ) {

  var output = undefined;

  if ( gradeNumber > 90 ) {
    output = "A+";
    return output;

    } else if ( gradeNumber >= 80 && gradeNumber <= 89 ) {
      output = "A";
      return output;

    } else if ( gradeNumber >= 70 && gradeNumber <= 79 ) {
      output = "B";
      return output;

    } else if ( gradeNumber >= 60 && gradeNumber <= 69 ) {
      output = "C";
      return output;

      } else if ( gradeNumber >= 50 && gradeNumber < 59 ) {
      output = "D";
      return output;

    } else {
      output = "F";
      return output;
  }
}

var counter = 60;

while ( counter <= 100 ) {
  statement = "For " + counter + ", you get a " + gradeAnalyzer( counter ) + "!<br />";
  document.write( statement );
  counter++;
}
