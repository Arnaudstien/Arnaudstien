type MyTuple = [string, number];

function handleTuple(parameter: MyTuple): void {
  if (typeof parameter[0] === "string") {
    console.log(`${parameter[0]} is a string`);
  }
  if (typeof parameter[1] === "number") {
    console.log(`${parameter[1]} is a number`);
  }

  //Code the function here.
}

//const data2: Data = ["foo", 42];

handleTuple(["foo", 42]);

// Leave the line below for tests to work properly.
export { handleTuple };
