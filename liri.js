//requires and linked files
require("dotenv").config();
var fs = require("fs");
var moment = require("moment")
var axios = require("axios");

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

console.log(
  " \n Hi, I'm Liri! What do you want to do today? \n Choose from the following: 'concert-this', 'movie-this', 'spotify-this-song' or 'do-what-it-says'"
);

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

var queryURL = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp";
    
    console.log(queryURL); 

    axios.get(queryURL).then(
        function(bandResponse){
            console.log("Venue: " + bandResponse.data[0].venue.name);
            console.log("City: " + bandResponse.data[0].venue.city);
            console.log(moment(bandResponse.data[0].datetime).format("MM/DD/YYYY"));
        }
	);
	
var spotify = new Spotify({
        id: spotifyKeyInfo["spotify"].id,
        secret: spotifyKeyInfo["spotify"].secret
    });

    spotify.request('https://api.spotify.com/v1/search?q=track:' + songName + '&type=track&limit=10', function(error, songResponse) {
        if (error){
            return console.log(error);
        }
        console.log("Artist: " + songResponse.tracks.items[0].artists[0].name);
        console.log("Song: " + songResponse.tracks.items[0].name);
        console.log("URL: " + songResponse.tracks.items[0].preview_url);
        console.log("Album: " + songResponse.tracks.items[0].album.name);
    });

