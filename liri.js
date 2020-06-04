require("dotenv").config();

console.log(
  " \n Hi, I'm Liri! What do you want to do today? \n Choose from the following: 'concert-this', 'movie-this', 'spotify-this-song' or 'do-what-it-says'"
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
};

//functions

function bandInfo() {
	var bandName = "";
	for (var i = 3; i < userInput.length; i++){
		if (i > 3 && i < userInput.length){
			bandName = bandName + "+" + userInput[i];
		} else {
			bandName += userInput[i];
		}
	}
}

function songInfo() {

}

function movieInfo() {

}

function doWhatInfo() {

}