const readyForm = (reader) => {
  //reader.question("What is your name? ", (name) => {
  //  console.log(`Hello ${name}!`);
  console.log(`Yes Im  ${answer}!`);

  reader.question(`WOW, ${answer} ??!! Really Nice! Let's goo !!.`);
  console.log("Nice! Let's goo !!.");
  reader.close();
  reader.question("Are you ready for today ??!", (answer) => {});
  // });
};

//"Le prix est : " + (estMembre ? "15 €" : "30 €")

// const someSports = ["Biking", "Running", "Skydiving", "Tennis"];

// for (const sport of someSports) {
//   console.log(sport);
// }

// reader.question("What is your name? ", (name) => {
//   console.log(`Hello ${name}!`);

//   reader.close();
// });
// Leave line below for tests to work
module.exports = readyForm;
