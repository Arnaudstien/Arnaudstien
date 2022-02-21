import { getRandomFace } from "./random-face";

function headOrTail(): Promise<string> {
  console.log(getRandomFace());
  return new Promise((resolve, reject) => {
    if (getRandomFace() === "head") {
      resolve("Well done.");
    } else {
      reject("Nope.");
    }
  });
}

export { headOrTail };
