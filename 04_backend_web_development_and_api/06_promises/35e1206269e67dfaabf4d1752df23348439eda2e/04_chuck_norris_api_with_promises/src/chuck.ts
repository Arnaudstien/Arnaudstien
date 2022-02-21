import fetch from "node-fetch";

function getCategories(): Promise<string[]> {
  return fetch(`https://api.chucknorris.io/jokes/categories`)
    .then((res) => res.json())
    .then((data) => {
      //console.log("data$$$$$$$$$$$$$$$$$$$$$$$$$$$", data);
      return data;
    });
}

function getJoke(category: string): Promise<string> {
  console.log("category$$$$$$$$$$$$$$$$$$$$$", `${category}`);

  return fetch(`https://api.chucknorris.io/jokes/search?query=${category}`)
    .then((res) => res.json())
    .then((joke) => {
      console.log("data1££££££££££££££££££", joke.value);
      return joke.value;
    });
}
// Your code goes here

//getJoke("vvv");
// Leave the line below for tests to work properly
export { getCategories, getJoke };
