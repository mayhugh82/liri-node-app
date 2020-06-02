require("dotenv").config();

console.log(
  " \n Hi, I'm Liri! What do you want to do today? \n Choose from the following: 'my-tweets', 'movie-this', 'spotify-this-song' or 'do-what-it-says'"
);

var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);
var spotify = new Spotify(keys.spotify);

//Arguments provided
var action = process.argv[2];
var input = process.argv[3];
var nodeArgs = process.argv;

console.log("Command chosen: " + action);

//Switch-case statement for different commands
switch (action) {

    case "concert-this":
        concert();
        break;

	case "spotify-this-song":
		song();
		break;

	case "movie-this":
		movie();
		break;

	case "do-what-it-says":
		random();
		break;
};

//functions

function concert() {
    
}