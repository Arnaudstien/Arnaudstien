import request from "@fewlines-education/request";
import "dotenv/config";

function weatherByCity(city: string): void {
  request("http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=toto", (error, html) => {
    if (error) {
      console.error(error);
    } else {
      const data = JSON.parse(html);

      return data.city;
    }
  });
}

// leave lines below for tests to work properly
export { weatherByCity };
