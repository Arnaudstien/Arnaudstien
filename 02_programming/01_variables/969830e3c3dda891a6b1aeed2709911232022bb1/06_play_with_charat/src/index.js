const question = "spartan, what is your profession?!";

// a constant `letterAtThirdPosition` bound to a string that is the third position character in question
// using `charAt()` and the previous constant `question`

const letterAtThirdPosition = question.charAt(2);
console.log(letterAtThirdPosition);
// a constant `letterAtFourthPosition` bound to a string: "The letter at the fourth position is r"
// using `charAt()` and the previous constant `question`

// eslint-disable-next-line no-template-curly-in-string
//const questioné = question.charAt(4);
const letterAtFourthPosition = `The letter at the fourth position is ${question.charAt(3)}`;

//const sentence = 'The quick brown fox jumps over the lazy dog.';

//const index = 4;

//console.log(`The character at index ${index} is ${sentencen.charAt(idex)}`);
// expected output: "The character at index 4 is q"
