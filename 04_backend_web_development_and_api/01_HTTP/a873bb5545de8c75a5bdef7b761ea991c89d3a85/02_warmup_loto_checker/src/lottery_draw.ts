import { Draw } from "./types";
// function aleatoire(min: number, max: number) {
//   //console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// export function lottery_draw(): Draw {
//   const array = [];
//   for (let i = 1; i <= 3; i++) {
//     array.push(aleatoire(0, 2));
//   }
//   //console.log("$$$$$$$$$$$$$", array);

//   return array;
// }
// lottery_draw();
function aleatoire(min: number, max: number) {
  //console.log(Math.floor(Math.random() * (max - min + 1)) + min);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function lottery_draw(): Draw {
  const array = [];
  for (let i = 0; i < 3; i++) {
    array.push(aleatoire(0, 3));
  }
  return array;
}
lottery_draw();
