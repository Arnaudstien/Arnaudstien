function addition(a, b) {
  return a + b;
}

function substraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function chooseOperation(a, b, c) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return c(a, b);
  } else {
    throw new Error("Superior at 10");
  }
}
chooseOperation(1, 3, addition);

module.exports = { chooseOperation, addition, substraction, multiplication, division };
