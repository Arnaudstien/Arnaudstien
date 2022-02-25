//write your MongoDB shell command here
const newCountrie = [{ name: "Espagne", capital: "Madrid", continent: "Europe" }];
db.collection("worldAtlas").insertOne(newCountrie);
