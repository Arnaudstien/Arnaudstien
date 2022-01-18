const array = [1, 2, 3, 4];

function mapLoop(array, arrayMap) {
  // console.log("array ", array);
  const arrayResult = [];

  for (let i = 0; i < array.length; i++) {
    // console.log(arrayMap(array[i]));
    arrayResult.push(arrayMap(array[i]));
    //  console.log(arrayResult);
  }
  //console.log(arrayResult);
  return arrayResult;
  // const double = array.map(arrayMap);

  // const double = arrayMap(array);
  // console.log(" double", double);
  //return double;
}

//mapLoop(array, (x) => x * 2);

//const someSports = ["Biking", "Running", "Skydiving", "Tennis"];

//for (let i = 0; i < someSports.length; i++) {
//  console.log(someSports[i]);
//var total = sports.push("football", "tennis");
// Do not remove the following lines, it is for tests
module.exports = mapLoop;
