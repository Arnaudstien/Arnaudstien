const arraysIntoObjects = (keysArray, valuesArray) => {
  let objet = {};

  for (let i = 0; i < keysArray.length; i++) {
    objet[keysArray[i]] = valuesArray[i];
  }
  // return {};
  return objet;

  //  console.log(valuesArray[0]);
  //  console.log(valuesArray[1]);
  //  console.log(valuesArray[2]);

  //  console.log(keysArray[0]);

  //  return {
  //    name: valuesArray[0],
  //    prenom: valuesArray[1],
  //    age: valuesArray[2],
  //  };
};

// Don't change this line for tests to run properly
export default arraysIntoObjects;
