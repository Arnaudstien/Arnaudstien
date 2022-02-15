import request from "@fewlines-education/request";

function getChuckNorrisJoke(): void {
  // code the function here
  request("https://api.chucknorris.io/jokes/random?category=dev", (error, body) => {
    if (error) {
      console.error(error);
      return error;
    } else {
      console.log(body);
      const data = JSON.parse(body);
      console.log("data$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$", data);
      //return body;
    }
  });
}

// leave line below for tests to work properly
export { getChuckNorrisJoke };
