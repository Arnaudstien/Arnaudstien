//const sentences = ["without using the","oe that, it would have beEn"];

function theEFilter(sentences) {
  const arrayFilted = sentences.filter((phrase) => {
    return phrase.includes("e")||phrase.includes("E");

  }

  );
  return arrayFilted;
}
// if (sentences.includes("e") || sentences.includes("E")) {//  return sentences;
// console.log(sentences);
//}

//}
//sentences.filter(theEFilter);




//sentences.includes("e") || sentences.includes("E")? console.log(sentences):false;
//sentences.filter(theEFilter);


// Do not remove the following line, it is for tests
module.exports = theEFilter;
