import { Game } from "./types";

export function filterGameByPlatform(games: Game[], platform: string): Game[] {
  console.log(games[0].platform);
  console.log(platform);
  const array = [];
  if (games[0].platform === platform) {
    array.push(games[0]);
  }
  if (games[1].platform === platform) {
    array.push(games[1]);
  }
  if (games[2].platform === platform) {
    array.push(games[2]);
  }
  if (games[3].platform === platform) {
    array.push(games[3]);
  }
  if (games[4].platform === platform) {
    array.push(games[4]);
  }
  return array;
}
