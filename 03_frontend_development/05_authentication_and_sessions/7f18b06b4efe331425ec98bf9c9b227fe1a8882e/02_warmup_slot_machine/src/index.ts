// Code here
const paylineOfStrings = ["🍒", "🍒", "🍒"];
// const paylineOfNumbers = [1, 1, 1];
// const losingPayline = [true, false, true];

function slotMachine(valOne: string[]): boolean {
  console.log("$$$$$$$$$000$$$$$$$$$$$", valOne[0]);
  console.log("$$$$$$$$$$$$111$$$$$$$$", valOne[1]);
  console.log("$$$$$$$2222$$$$$$$$$$$$$", valOne[2]);
  if (valOne[0] === valOne[1] && valOne[1] === valOne[2]) {
    return true;
  } else {
    return false;
  }
}

slotMachine(paylineOfStrings);

export { slotMachine };
