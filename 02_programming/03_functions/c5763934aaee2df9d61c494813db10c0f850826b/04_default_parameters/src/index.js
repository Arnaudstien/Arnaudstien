//function helloSpartan(string) {
// console.log(`Hello ${string}: glad to know your name!`);
//  return `Hello ${name}: glad to know your name!`;
// Code the function here.
//}
//helloSpartan("John");

//helloSpartan("soldier");

//console.log(helloSpartan);
// Do not remove last lines, it is for tests

function helloSpartan(params = "John", param2) {
  console.log(`Hello ${params}: glad to know your name!`);
  console.log(`Hello ${param2}: not very talkative uh?`);
}

helloSpartan();

helloSpartan(param1, "soldier");

module.exports = helloSpartan;
