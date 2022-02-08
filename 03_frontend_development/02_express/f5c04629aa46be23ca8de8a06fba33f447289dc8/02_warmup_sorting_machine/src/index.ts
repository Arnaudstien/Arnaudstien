// Code here
function sortingMachine(number: number[], result: boolean): number[] {
  if (result === true) {
    return number.sort((a, b) => a - b);
  } else {
    return number.sort((a, b) => b - a);
  }
}
export { sortingMachine };
