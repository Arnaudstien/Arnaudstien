export function rectangle(width: number, height: number): string {
  const star = "*";

  for (let i = 1; i <= width; i++) {
    for (let j = 1; j <= height; j++) {
      //console.log(star.repeat(width));
      //console.log(star.repeat(height));
    }
    const result = star.repeat(width) + "\n";
    const res = result.repeat(height) + "\n";
    return res;
  }
}
// for (let i = 1; i <= width; i++) {
//   console.log(star.repeat(width));
// }
// for (let j = 1; j <= height; j++) {
//   console.log(j);
//   console.log(star.repeat(height));
//   return;
// }
