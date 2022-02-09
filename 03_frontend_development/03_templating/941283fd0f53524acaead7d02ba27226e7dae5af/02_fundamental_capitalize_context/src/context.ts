import { capitalize } from "./capitalize";

export function context(sentence: string): string {
  const tableau = sentence.split(" ");
  const array = tableau.map((word) => capitalize(word));

  return array.join(" ").toString();
}
