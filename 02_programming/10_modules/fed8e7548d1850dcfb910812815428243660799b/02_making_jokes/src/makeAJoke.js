// Code here
//import makeAJoke from "./makeAJoke.js";
//const Joke = require("awesome-dev-jokes");
import Joke from "awesome-dev-jokes";
//console.log(Joke.getRandomJoke());

function makeAJoke() {
  return console.log(Joke.getRandomJoke());
}

export default makeAJoke;
