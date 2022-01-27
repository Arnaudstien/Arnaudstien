// Here are some examples

let storageHell = [
  [],
  ["IPad", "IPhone"],
  ["GameBoy color"],
  ["Nes", "Donkey kong 64"],
  ["Apex Legends Starter Pack", "LG 5K 27p screen"],
  ["Coffee Machine", "Azelad"],
];
// Should be cleaned this way => ['IPad', 'IPhone', 'GameBoy color', 'Nes', 'Donkey kong 64', 'Apex Legends Starter Pack', 'LG 5K 27p screen', 'Coffee Machine', 'Azelad']

function formatStorage(storageHell) {
  //console.log(storageHell);
  const one = storageHell[1];
  const two = storageHell[2];
  const three = storageHell[3];
  const four = storageHell[4];
  const five = storageHell[5];
  const tt = one.concat(two, three, four, five);
  return tt;

  //console.log(one);

  //const array1 = ['a', 'b', 'c'];
  //const array2 = ['d', 'e', 'f'];
  //const array3 = array1.concat(array2);

  //console.log([on, two[0], three, four, five, six]);
  //const [head, ...tail] = [1, 2, 3, 4];

  //console.log(head); // 1
  //console.log(tail); // [ 2, 3, 4 ]
  //console.log(storageHell);
  // eslint-disable-next-line no-sequences
  //console.log(storageHell[1][0], storageHell[2], storageHell[3], storageHell[4], storageHell[5]);
  //const un = storageHell[1][0];
  //console.log(un);
  // Code your function her
}

// ↓ Feel free to uncomment this next line, or even create more to try everything you do ↓
console.log(formatStorage(storageHell));

// Don't modify this, it is for the tests.
module.exports = formatStorage;
