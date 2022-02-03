function triangle(params) {
  let array = [
    "",
    "*",
    "**",
    "***",
    "****",
    "*****",
    "******",
    "*******",
    "********",
    "*********",
    "**********",
    "***********",
    "************",
    "*************",
    "**************",
    "***************",
  ];
  for (let i = 1; i <= params; i++) {
    const element = array[i];
    console.log(element);
  }
}

triangle(10);
// Do not remove the following line, it is for tests
module.exports = triangle;
