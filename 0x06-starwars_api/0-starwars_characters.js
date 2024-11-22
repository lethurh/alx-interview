#!/usr/bin/node

const request = require('request');

// Get the movie ID from command line arguments
const movieId = process.argv[2];
if (!movieId) {
  console.error('Usage: ./0-starwars_characters.js <movie_id>');
  process.exit(1);
}

// SWAPI URL for the films endpoint
const url = https://swapi-api.alx-tools.com/api//films/${movieId}/;

// Make a request to get the film data
request(url, (error, response, body) => {
  if (error) {
    console.error('Error fetching movie:', error);
    return;
  }

  // Parse the response body as JSON
  const movieData = JSON.parse(body);

  // List of character URLs
  const characters = movieData.characters;

  // Function to fetch and print character names in order
  const fetchCharacterNames = (characters, index = 0) => {
    if (index >= characters.length) return;

    // Fetch each character's details
    request(characters[index], (error, response, body) => {
      if (error) {
        console.error('Error fetching character:', error);
        return;
      }

      // Parse the response body as JSON and print the name
      const characterData = JSON.parse(body);
      console.log(characterData.name);

      // Recursively fetch the next character
      fetchCharacterNames(characters, index + 1);
    });
  };

  // Start fetching character names
  fetchCharacterNames(characters);
});
