# LIRI Bot

## Overview
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Setup

1. Clone the repository

2. Run npm install, and the following packages should be installed:

Node-Spotify-API

Axios : This module will be used to get the IMDB and BandsInTown API data

Moment

DotEnv

    1. Create a .env file in the same directory as the rest of the files. In the .env file should be:

    '# Spotify API keys'

    'SPOTIFY_ID=your-spotify-ID-here'

    'SPOTIFY_SECRET=your-spotify-secret-here'

## Instructions

The LIRI Bot was designed to produce search results based on the following commands:

* node liri.js concert-this
* node liri.js spotify-this-song
* node liri.js movie-this
* node liri.js do-what-it-says

Each command produced different search results as listed below:

* node liri.js concert-this “artist/band name”
    * Name of venue
    * Venue location
    * Date of the event in MM/DD/YYYY format

* node liri.js spotify-this-song “song/track name”
    * Artist
    * Song
    * Spotify song preview url
    * Album

* node liri.js movie-this “movie title”
    * Title of the movie
    * Year the movie came out
    * IMDB Rating of the movie
    * Country where the movie was produced
    * Language of the movie
    * Plot of the movie
    * Actors in the movie
    * Rotten Tomatoes Rating of the movie

* node liri.js do-what-it-says
    * Print the spotify results for “I want it that way” stored in the random.txt file

## Screen Shots of App Functioning

concert-this

![concert-this](/images/concert.PNG)

spotify-this-song

![spotify-this-song](/images/song.PNG)

spotify-this-song  No Song Given

![spotify-this-song-no-song-given](/images/no-song-given.PNG)

movie-this

![movie-this](/images/movie.PNG)

movie-this  No Movie Given

![move-this-no-movie-given](/images/no-movie-given.PNG)

do-what-it-says

![do-what-it-says](/images/do-what-it-says.PNG)


## Link to Deployed Version

[liri-node-app](https://github.com/mayhugh82/liri-node-app)

## Technologies Used
* javaScript
* API
* Node js

## Author
* **Diana Mayhugh**




