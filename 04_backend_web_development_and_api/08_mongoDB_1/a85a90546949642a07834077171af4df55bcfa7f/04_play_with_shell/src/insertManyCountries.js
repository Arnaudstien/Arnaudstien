// write your MongoDB shell command here
const newCountry = [
  {
    name: "belgique",
    capital: "Bruxelles",
    continent: "Europe",
  },
  {
    name: "Espagne",
    capital: "Madrid",
    continent: "Europe",
  },
  {
    name: "Iceland",
    capital: "Reykjavik",
    continent: "Europe",
  },
];
db.collection("worldAtlas").insertMany(newCountry);
