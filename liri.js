//requires and linked files
require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");

var fs = require("fs");
var moment = require("moment");
var axios = require("axios");

//Arguments provided
var userInput = process.argv;
var action = process.argv[2];

console.log("Command chosen: " + action);

//Switch-case statement for different commands
switch (action) {
  case "concert-this":
    bandInfo();
    break;

  case "spotify-this-song":
    songInfo();
    break;

  case "movie-this":
    movieInfo();
    break;

  case "do-what-it-says":
    doWhatInfo();
    break;
}

//functions

function bandInfo() {
  var artist = "";
  for (var i = 3; i < userInput.length; i++) {
    if (i > 3 && i < userInput.length) {
      artist = artist + "+" + userInput[i];
    } else {
      artist += userInput[i];
    }
  }

  var queryURL =
    "https://rest.bandsintown.com/artists/" +
    artist +
    "/events?app_id=codingbootcamp";

  console.log(queryURL);

  axios
    .get(queryURL)
    .then(function (bandResponse) {
      console.log("Venue: " + bandResponse.data[0].venue.name);
      console.log("City: " + bandResponse.data[0].venue.city);
      console.log(moment(bandResponse.data[0].datetime).format("MM/DD/YYYY"));
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

function songInfo(input) {
  var songName = "";
  for (var i = 3; i < userInput.length; i++) {
    if (i > 3 && i < userInput.length) {
      songName = songName + "+" + userInput[i];
    } else {
      songName += userInput[i];
    }
  }
  if (songName === "") {
    songName = "The Sign by Ace of Base";
  } else if (input) {
    songName = input;
  }
  var spotify = new Spotify(keys.spotify);
  spotify.request(
    "https://api.spotify.com/v1/search?q=track:" +
      songName +
      "&type=track&limit=10",
    function (error, songResponse) {
      if (error) {
        return console.log(error);
      }
      console.log("Artist: " + songResponse.tracks.items[0].artists[0].name);
      console.log("Song: " + songResponse.tracks.items[0].name);
      console.log("URL: " + songResponse.tracks.items[0].preview_url);
      console.log("Album: " + songResponse.tracks.items[0].album.name);
    }
  );
}

function movieInfo() {
  var movieName = "";
  for (var i = 3; i < userInput.length; i++) {
    if (i > 3 && i < userInput.length) {
      movieName = movieName + "+" + userInput[i];
    } else {
      movieName += userInput[i];
    }
  }
  if (movieName === "") {
    movieName = "Mr. Nobody";
  }
  var queryURL =
    "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  axios.get(queryURL).then(function (movieResponse) {
    console.log("Title: " + movieResponse.data.Title);
    console.log("Year: " + movieResponse.data.Year);
    console.log("Rated: " + movieResponse.data.imdbRating);
    console.log("Country: " + movieResponse.data.Country);
    console.log("Language: " + movieResponse.data.Language);
    console.log("Plot: " + movieResponse.data.Plot);
    console.log("Actors: " + movieResponse.data.Actors);
    console.log("Rotten Tomatoes: " + movieResponse.data.Ratings[1].Value);
  });
}

function doWhatInfo() {
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      return console.log(error);
    }
    console.log(data);
    var output = data.split(",");
    var command = output[0];
    var input = output[1];
    console.log(command);
    console.log(input);
    if (command === "spotify-this") {
      songInfo(input);
    }
    // for (var i = 0; i < output.length; i++) {
    //   console.log(output[i]);
    // }
  });
}
