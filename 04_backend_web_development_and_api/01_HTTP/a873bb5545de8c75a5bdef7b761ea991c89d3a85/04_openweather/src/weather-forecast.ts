import request from "@fewlines-education/request";
import "dotenv/config";

function weatherByZipcode(zipcode: number, countryCode: string): void {
  request(
    "http://api.openweathermap.org/data/2.5/forecast?zip=59000,fr&units=metric&cnt=16&appid=toto",
    (error, html) => {
      if (error) {
        console.error(error);
      } else {
        const data = JSON.parse(html);
        console.log(data.zipcode && data.countrycode);

        return data.zipcode && data.countrycode;
      }
    },
  );
}

function weatherByLatitudeAndLongitude(latitude: number, longitude: number): void {
  request(
    "http://api.openweathermap.org/data/2.5/forecast?lat=32.661343&lon=51.680374&units=metric&cnt=16&appid=toto",
    (error, html) => {
      if (error) {
        console.error(error);
      } else {
        const data = JSON.parse(html);
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$s", data.latitude && data.longitude);

        return data.latitude && data.longitude;
      }
    },
  );
}

// leave lines below for tests to work properly
export { weatherByZipcode, weatherByLatitudeAndLongitude };
