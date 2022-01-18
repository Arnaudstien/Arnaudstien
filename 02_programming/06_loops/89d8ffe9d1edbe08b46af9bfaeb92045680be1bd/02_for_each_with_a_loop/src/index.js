const array = [1, 2, 3, 4];

function forEachLoop(array, log) {
  for (const tour of array){
    log(tour);
  }
}

function log(array) {
  console.log(`- ${array}`);

}





module.exports = forEachLoop;

