function greeter(people) {
  for (const name of people) {
    console.log(`Hello ${name}!`);
  }

}
greeter ([ "mike ", "robert"]);





// Do not remove the following lines, it is for tests
module.exports = greeter;
