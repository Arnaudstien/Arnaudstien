export function sumTwoSmallestNumbers(num: number[]): number {
  //console.log(num);
  // for (let i = 0; i < num.length; i++) {
  //   const element = num[i];
  //   console.log(element);
  //   let nombres = [4, 2, 5, 1, 3];
  console.log("non trié$$$$$$$$$$$$$$$$$$$$$$$", num);

  num.sort((a, b) => a - b);
  const result = num[1] + num[0];
  console.log(
    "tableau tiré$$$$$$$$$$$$$$$$$$$$$$$$$$",
    num.sort((a, b) => a - b),
  );
  console.log("result", result);

  return result;
}
