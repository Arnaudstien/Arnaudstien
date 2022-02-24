export function humanPercentage(percentages: number[]): string[] {
  console.log(percentages);
  const array = [];
  for (let i = 0; i < percentages.length; i++) {
    const element = percentages[i];
    console.log(Math.round(element * 100) + "%");
    array.push(Math.round(element * 100) + "%");
    // return [Math.round(element * 100) + "%"];
  }
  return array;
}
