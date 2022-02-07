function letterCount(chaine, lettre) {
  //"this is foo bar".split("o").length-1 Code here
  console.log(chaine);
  console.log(lettre);
  return chaine.split(lettre).length - 1;
}

letterCount("gattaca", "a");

// var chaine = "1 2 6 8 2 1 6 9 8 2 4 2 3 6 2";
// alert('le nombre 2 est présent ' + (chaine.split("2").length - 1));
// Do not remove the following line, it is for tests
module.exports = letterCount;
