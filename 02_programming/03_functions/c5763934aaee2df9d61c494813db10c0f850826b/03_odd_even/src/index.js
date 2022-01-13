function oddEven(number) {
  if (Number.isInteger(number)){
    return (number % 2 === 1 ? `${number} is an odd number.` : `${number} is an even number.`);

  } else {
    return console.log(`${number} is not a number.`);
  }
}


oddEven(2);
oddEven("ldldflflflglgg");
// Do not remove last lines, it is for tests
module.exports = oddEven;
