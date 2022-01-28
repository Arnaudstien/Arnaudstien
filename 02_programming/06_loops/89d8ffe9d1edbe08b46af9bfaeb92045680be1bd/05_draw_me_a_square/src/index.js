function square(size) {
  let croix = "";

  for (let i = 0; i < size; i++) {
    croix += "*";
  }
  for (let i = 0; i < size; i++) {
    console.log(croix);
  }
}

// Do not remove the following line, it is for tests
module.exports = square;
