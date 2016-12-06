/*
=======================================================

    ** Week 7 - Project 1  **
*** Ajax and JSON with OMDB ***

This assignment is more open than the past assignments.
You are free to build a simple web page that interacts
with OMBD. It can simply display data within the HTML
page or buttons and text fields can be added to interact
with the data and update the page accordingly.

Have fun!

=======================================================
*/

$(document).ready(function() {

  // Lord of the Rings
  $('#lotr-cover').click(function() {
    $('#lotr').toggleClass('show');
    $('#result').toggleClass('show');

    $('#lotr-1').click(function() {
      $("#target").attr("src", showPoster("tt0120737"));
    });
    $('#lotr-2').click(function() {
      $('#target').attr("src", showPoster("tt0167261"))
    });
    $('#lotr-3').click(function() {
      $('#target').attr('src', showPoster("tt0167260"))
    });
  })

  // Marvel Universe
  $('#marvel-cover').click(function() {
    $('#marvel').toggleClass('show');
    $('#result').toggleClass('show');

    $('#spiderman').click(function() {
      $('#target').attr("src", showPoster("tt0948470"))
    });

    $('#x-men').click(function() {
      $('#target').attr("src", showPoster("tt3385516"))
    });

    $('#avengers').click(function() {
      $('#target').attr('src', showPoster("tt0848228"))
    })

    $('#guardians').click(function() {
      $('#target').attr('src', showPoster("tt2015381"))
    })
  })

  // Click '#target' image to see IMDB Review
  $('#target').click(function() {

  })

  //

  // Show the poster
  function showPoster(id) {
    var movies = [
        {
            "Title": "The Lord of the Rings: The Fellowship of the Ring",
            "Year": "2001",
            "Rated": "PG-13",
            "Released": "19 Dec 2001",
            "Runtime": "178 min",
            "Genre": "Adventure, Drama, Fantasy",
            "Director": "Peter Jackson",
            "Writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay)",
            "Actors": "Alan Howard, Noel Appleby, Sean Astin, Sala Baker",
            "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle Earth from the Dark Lord Sauron.",
            "Language": "English, Sindarin",
            "Country": "New Zealand, USA",
            "Awards": "Won 4 Oscars. Another 108 wins & 122 nominations.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTEyMjAwMDU1OV5BMl5BanBnXkFtZTcwNDQyNTkxMw@@._V1_SX300.jpg",
            "Metascore": "92",
            "imdbRating": "8.8",
            "imdbVotes": "1,261,067",
            "imdbID": "tt0120737",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "The Lord of the Rings: The Two Towers",
            "Year": "2002",
            "Rated": "PG-13",
            "Released": "18 Dec 2002",
            "Runtime": "179 min",
            "Genre": "Adventure, Drama, Fantasy",
            "Director": "Peter Jackson",
            "Writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Stephen Sinclair (screenplay), Peter Jackson (screenplay)",
            "Actors": "Bruce Allpress, Sean Astin, John Bach, Sala Baker",
            "Plot": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
            "Language": "English, Sindarin, Old English",
            "Country": "USA, New Zealand",
            "Awards": "Won 2 Oscars. Another 114 wins & 127 nominations.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_SX300.jpg",
            "Metascore": "88",
            "imdbRating": "8.7",
            "imdbVotes": "1,128,540",
            "imdbID": "tt0167261",
            "Type": "movie",
            "Response": "True"
      },
      {
            "Title": "The Lord of the Rings: The Return of the King",
            "Year": "2003",
            "Rated": "PG-13",
            "Released": "17 Dec 2003",
            "Runtime": "201 min",
            "Genre": "Adventure, Drama, Fantasy",
            "Director": "Peter Jackson",
            "Writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay)",
            "Actors": "Noel Appleby, Ali Astin, Sean Astin, David Aston",
            "Plot": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            "Language": "English, Quenya, Old English, Sindarin",
            "Country": "USA, New Zealand",
            "Awards": "Won 11 Oscars. Another 174 wins & 113 nominations.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4MjA1NTAyMV5BMl5BanBnXkFtZTcwNzM1NDQyMQ@@._V1_SX300.jpg",
            "Metascore": "94",
            "imdbRating": "8.9",
            "imdbVotes": "1,238,528",
            "imdbID": "tt0167260",
            "Type": "movie",
            "Response": "True"
      },
      {
            "Title": "The Amazing Spider-Man",
            "Year": "2012",
            "Rated": "PG-13",
            "Released": "03 Jul 2012",
            "Runtime": "136 min",
            "Genre": "Action, Adventure",
            "Director": "Marc Webb",
            "Writer": "James Vanderbilt (screenplay), Alvin Sargent (screenplay), Steve Kloves (screenplay), James Vanderbilt (story), Stan Lee (based on the Marvel comic book by), Steve Ditko (based on the Marvel comic book by)",
            "Actors": "Andrew Garfield, Emma Stone, Rhys Ifans, Denis Leary",
            "Plot": "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to solve the mystery of his parent's mysterious death.",
            "Language": "English",
            "Country": "USA",
            "Awards": "2 wins & 31 nominations.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
            "Metascore": "66",
            "imdbRating": "7.0",
            "imdbVotes": "459,649",
            "imdbID": "tt0948470",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "X-Men: Apocalypse",
            "Year": "2016",
            "Rated": "PG-13",
            "Released": "27 May 2016",
            "Runtime": "144 min",
            "Genre": "Action, Adventure, Sci-Fi",
            "Director": "Bryan Singer",
            "Writer": "Simon Kinberg (screenplay), Bryan Singer (story), Simon Kinberg (story), Michael Dougherty (story), Dan Harris (story)",
            "Actors": "James McAvoy, Michael Fassbender, Jennifer Lawrence, Nicholas Hoult",
            "Plot": "After the re-emergence of the world's first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.",
            "Language": "English, Polish, German, Arabic, Egyptian (Ancient)",
            "Country": "USA",
            "Awards": "2 nominations.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_SX300.jpg",
            "Metascore": "52",
            "imdbRating": "7.2",
            "imdbVotes": "208,268",
            "imdbID": "tt3385516",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "The Avengers",
            "Year": "2012",
            "Rated": "PG-13",
            "Released": "04 May 2012",
            "Runtime": "143 min",
            "Genre": "Action, Sci-Fi",
            "Director": "Joss Whedon",
            "Writer": "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
            "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
            "Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
            "Language": "English, Russian",
            "Country": "USA",
            "Awards": "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg",
            "Metascore": "69",
            "imdbRating": "8.1",
            "imdbVotes": "1,016,311",
            "imdbID": "tt0848228",
            "Type": "movie",
            "Response": "True"
        },
        {
            "Title": "Guardians of the Galaxy",
            "Year": "2014",
            "Rated": "PG-13",
            "Released": "01 Aug 2014",
            "Runtime": "121 min",
            "Genre": "Action, Adventure, Sci-Fi",
            "Director": "James Gunn",
            "Writer": "James Gunn, Nicole Perlman, Dan Abnett (based on the Marvel comic book by), Andy Lanning (based on the Marvel comic book by)",
            "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
            "Plot": "A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.",
            "Language": "English",
            "Country": "USA, UK",
            "Awards": "Nominated for 2 Oscars. Another 48 wins & 92 nominations.",
            "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg",
            "Metascore": "76",
            "imdbRating": "8.1",
            "imdbVotes": "708,900",
            "imdbID": "tt2015381",
            "Type": "movie",
            "Response": "True"
        },

    ]

    for (i = 0; i < movies.length; i++) {
      if (movies[i].imdbID === id) {
        return movies[i].Poster
      }
    }
  }

  // Go to the imdb website when you click on the movie

})
