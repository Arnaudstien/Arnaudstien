export function line(numberOfStars: number): string {
  // console.log(numberOfStars);
  let stars = "";

  for (let i = 0; i < numberOfStars; i++) {
    stars += "*";
  }
  return stars;
}
