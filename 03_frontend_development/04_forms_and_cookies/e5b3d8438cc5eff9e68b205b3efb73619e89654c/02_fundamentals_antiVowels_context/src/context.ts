import { resolveTripleslashReference } from "typescript";
import { sentenceJoiner } from "./sentenceJoiner";
import { sentenceSplitter } from "./sentenceSplitter";

export const context = (elem: string): string => {
  const words = sentenceSplitter(elem);
  console.log(words);
  console.log(words.filter((word) => word.charAt(0).toLocaleLowerCase() !== "i"));

  const tab = words.filter((word) => {
    if (word.charAt(0).toLocaleLowerCase() !== "i") {
      //console.log("$$$$$$$$$$$$$$$$$$", word.charAt(0).toLocaleLowerCase() !== "i");
      return sentenceJoiner(words.filter((word) => word.charAt(0).toLocaleLowerCase() !== "i"));

      //return false;
    } else if (word.charAt(0).toLocaleLowerCase() !== "e") {
      return sentenceJoiner(words.filter((word) => word.charAt(0).toLocaleLowerCase() !== "e"));

      //return false;
    } else if (word.charAt(0).toLocaleLowerCase() !== "a") {
      return sentenceJoiner(words.filter((word) => word.charAt(0).toLocaleLowerCase() !== "a"));

      //return false;
    } else if (word.charAt(0).toLocaleLowerCase() !== "o") {
      return sentenceJoiner(words.filter((word) => word.charAt(0).toLocaleLowerCase() !== "o"));

      //return false;
    } else if (word.charAt(0).toLocaleLowerCase() !== "u") {
      return sentenceJoiner(words.filter((word) => word.charAt(0).toLocaleLowerCase() !== "u"));

      //return false;
    } else if (word.charAt(0).toLocaleLowerCase() !== "y") {
      return sentenceJoiner(words.filter((word) => word.charAt(0).toLocaleLowerCase() !== "y"));

      //return false;
    }
  });
  console.log("$$$$$$$$$ééééééé$$$$$$$$$$$$$$$$", tab);

  return sentenceJoiner(words.filter((word) => word.charAt(0).toLocaleLowerCase()));
};
