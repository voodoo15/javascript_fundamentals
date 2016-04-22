// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

//ANSWER

function Recipe  {
  name:  "mole",
  servings:  2,
  ingredients: [ "cinnamon", "cumin", "cocoa" ]
}

document.write( Recipe.ingredients[1] )

// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

//ANSWER

var comicSeries = [
   { title:  "The Walking Dead",
     author:  "Robert Kirkman",
     alreadyRead:  true
   },
   { title:  "Saga",
     author:  "Brian K. Vaughan",
     alreadyRead:  true
   },
   { title:  "Preacher",
     author:  "Garth Ennis",
     alreadyRead:  false
   }
 ]

 var output = undefined;

 for ( i = 0; i < comicSeries.length; i++ ) {

   if ( comicSeries.alreadyRead === true ) {
     output = "That series " + comicSeries[ i ].title + " by " + comicSeries[ i ].author + ", I read it!<br />";
     document.write( output );

   } else {
     output = "That series " + comicSeries[ i ].title + " by " + comicSeries[ i ].author + ", I gotta read it!<br />";
     document.write( output );

   }
 }

// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

function Film() {
  this.title = "";
  this.duration = "";
  this.cast = [];
}

favouriteFilm = new Film();
favouriteFilm.title = "Notting Hill";
favouriteFilm.duration = "124";
favouriteFilm.cast = [ "Julia Roberts", "Hugh Grant", "Rhys Ifans" ];

favouriteFilm.output = function() { document.write( this.title + " lasts for " + this.duration + " minutes. Starring: " + this.cast.join(", ") + ". Makes me cry, every time!") };

favouriteFilm.output();
