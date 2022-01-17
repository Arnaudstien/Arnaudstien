function addition(a, b,c) {

  const result = c (a+ b);

}

function substraction(a,b,c) {

  const result = c (a-b);
}

function multiplication(a,b,c) {

  const result =c (a*b);
}

function division(a,b,c) {
  const result = c (a/b);
}

function chooseOperation(a,b,c) {
  //const result = chooseOperation(a,b,c);
  c(a,b);
}
chooseOperation(1,3,addition);
//function computeAndLog(a, b, callback) {
//  const result = callback(a, b);
//  console.log("The result of your operation is ", result);
//}

//computeAndLog(1, 1, (a, b) => a + b);

// Leave the line below for tests to work




module.exports = { chooseOperation, addition, substraction, multiplication, division };
