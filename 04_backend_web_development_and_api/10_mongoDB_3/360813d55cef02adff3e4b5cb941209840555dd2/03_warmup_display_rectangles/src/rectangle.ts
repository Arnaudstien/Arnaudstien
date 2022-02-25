import { line } from "./line";
import { column } from "./column";
//console.log("line$$$$$$$$", line(3));
//console.log("column", column(4, "$"));

export function rectangle(width: number, height: number): string {
  // let resultWidth = "";
  // let resulheight = "";

  return column(height, line(width));

  // for (let i = 0; i < width; i++) {
  //   resultWidth = line(width);
  //   console.log(resultWidth);
  //   //for (let j = 0; j < height; j++) {
  //     //resulheight = column(height, resultWidth);
  //     //console.log(resulheight);
  //   }
  // }

  // return "res";
}
