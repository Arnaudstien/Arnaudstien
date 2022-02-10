// Copy your function `sentenceSplitter` from the first exercise here
export const sentenceSplitter = (chaine: string): string[] => {
  //console.log("===========================", chaine);

  const array = chaine.split(" ");
  //console.log(array);
  const array1 = array.join(" ");
  //console.log("==================", array1);
  return array;
  //return array.join(" ");
  // Code your function sentenceSplitter here
};
