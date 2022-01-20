function numberGame(reader, min = 1, max = 100) {
  // console.log(Math.floor(Math.random() * (max - min) + 1));
  let randomNumer = Math.floor(Math.random() * (max - min) + 1);
  //console.log(randomNumer);
  console.log("Welcome!\nYou have to find the right number,\nbetween 1 and 100!\nGood luck!!");

  relance(reader, randomNumer);
}
function relance(reader, randomNumer) {
  reader.question("Enter a number!\n>", (number) => {
    if (isNaN(number)) {
      console.log("This was not a number");
      relance(reader, randomNumer);
    } else if (number < 1 || number > 100) {
      console.log("The number is between 1 and 100");
      relance(reader, randomNumer);
    } else if (number > randomNumer) {
      console.log(`>${number}\nToo high`);
      relance(reader, randomNumer);
    } else if (number < randomNumer) {
      console.log(`>${number}\nToo low`);
      relance(reader, randomNumer);
    } //if (number === randomNumer) {
    else {
      console.log(`>${number}\n"You won!`);
      reader.close();
    }
    //}

    //reader.close(),
  });
}

module.exports = numberGame;
