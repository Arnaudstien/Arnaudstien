function triangle(array) {
  let croix = "";
  for (let i = 0; array.length; i++) {
    croix = "*";
    console.log(croix);
  }

  for (let i = 0; i < array.length; i++) {
    console.log(array);
  }
}

// Do not remove the following line, it is for tests
module.exports = triangle;
