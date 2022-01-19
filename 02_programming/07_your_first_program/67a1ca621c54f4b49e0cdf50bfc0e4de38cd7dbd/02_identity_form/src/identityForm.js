const identityForm = (reader) => {
  reader.question("What is your first name? ", (firstname) => {
    reader.question("What is your last name ? ", (name) => {
      reader.question("age ? ", (age) => {
        console.log(`Your name is ${firstname} ${name} and you are ${age}.`);
        reader.close();
      });
    });
  });
};

//   console.log(`Hello ${name}!`);

//   reader.close();
// });
// Leave line below for tests to work
module.exports = identityForm;
