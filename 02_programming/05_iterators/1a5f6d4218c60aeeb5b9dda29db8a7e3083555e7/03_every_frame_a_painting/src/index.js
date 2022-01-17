


function canTakeArtPieces(pieces){

  return pieces.every(elem => elem.type === "painting" );

}

//canTakeArtPieces();

//[{a:1, b:2}, {a:1, b:3}].every(elem => elem.a === 1); // true
//[12, 5, 8, 130, 44].every(elem => elem >= 10); // false
//function greet(listOfPeople) {
//  listOfPeople.forEach((person) => console.log(`hello ${person}`));
//


// Do not remove the following line, it is for tests
module.exports = canTakeArtPieces;
