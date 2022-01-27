function sing() {
  const music = [];
  for (let i = 99; i >= 0; i--) {
    if (i === 2) {
      music.push("2 bottles of beer on the wall, 2 bottles of beer.");
      music.push("Take one down and pass it around, 1 bottle of beer on the wall.");
    } else if (i === 1) {
      music.push("1 bottle of beer on the wall, 1 bottle of beer.");
      music.push("Take one down and pass it around, no more bottles of beer on the wall.");
    } else if (i === 0) {
      music.push("No more bottles of beer on the wall, no more bottles of beer.");
      music.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
    } else {
      music.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
      music.push(`Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);
    }
  }
  return music;
}
sing();
//const song = sing();
//console.log(song);

// code here

module.exports = sing;
