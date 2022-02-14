import { lottery_draw } from "./lottery_draw";
import { Draw } from "./types";

export function checkIfIWon(ticket: Draw): void {
  // console.log("££££££££££££££££££££££", ticket);
  // console.log("===================", lottery_draw);
  const nbticket = lottery_draw();
  console.log("=========", nbticket);

  let total = 0;
  for (let i = 0; i < nbticket.length; i++) {
    console.log("$$$$$$$ticket", ticket[i]);

    if (ticket[i] === nbticket[i]) {
      total++;

      console.log("£££££££££££££", total);
    }
  }
  if (total === 3) {
    console.log("You won the lottery!");
  } else {
    console.log("You lost...");
  }
}

// Code the function here

checkIfIWon([1, 1, 1]);
