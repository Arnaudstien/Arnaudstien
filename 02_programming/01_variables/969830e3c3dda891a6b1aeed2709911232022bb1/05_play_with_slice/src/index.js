// a constant `hobbyQuestion` bound to a string: "spartan, what is your hobby?!"
//const question = "hobby";
const question = "spartan, what is your profession?!";
const hobbyQuestion = question.slice(0, 21) + " hobby?!";
console.log(hobbyQuestion);
// using `slice()` and the constant `question`
//console.log(question.slice(0, 4).length);
const hobbyQuestionLength = hobbyQuestion.length;
//console.log(question.length.slice(0, 4));
console.log(hobbyQuestionLength);
console.log(question.length);
