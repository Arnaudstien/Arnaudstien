type Draw = number[];
//const draw = [0, 5, 76, 87, 97, 54, 76, 34];

//console.log(draw.length);
function aleatoire(min: number, max: number) {
  //console.log(Math.floor(Math.random() * (max - min + 1)) + min);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function lottery_draw(): Draw {
  const array = [];
  for (let i = 0; i < 6; i++) {
    array.push(aleatoire(0, 100));
  }
  return array;
}
lottery_draw();
