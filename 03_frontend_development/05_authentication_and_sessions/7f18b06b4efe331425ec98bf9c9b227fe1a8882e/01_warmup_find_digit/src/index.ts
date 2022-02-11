// // Code here

// export function findDigit(array: number[], number: string): number {
//   //const arrayresult: number[] = [1,2];
//   const arrayresult = [];
//   //console.log("ddkdkfjfjfjfjjjgjgjgjgjggjgjgjg", number);
//   //console.log("$$$$$$$$$$$$$$$$", array.includes(number).toString());
//   console.log("$$$$$$$22222222222$$$$$$$$$", array.toString().includes(number));

//   for (let i = 0; i < array.length; i++) {
//     console.log(i.toString);

//     //console.log("arrayiiiiiiiiiiiiiiiii", array[i]);
//     if (array[i].toString().includes(number) === true) {
//       console.log("array de i", array[i].toString());

//       console.log("arrayresult", arrayresult.push(array[i]));

//       return arrayresult.push(array[i]);

//       console.log("dddddmdmdmmfmfmmffmffmfmf", array[i]);

//       //console.log("result$$$$$$$$$$$$$$$$$$$$$$$$$$$", arrayresult.push(number));
//       console.log("$", arrayresult);
//       return arrayresult;
//     }
//   }
// }
const arrayresult: number[] = [];
function findDigit(arrayresult: number[], nombre: number): number[] {
  return arrayresult.filter((number) => number.toString().includes(nombre.toString()));
}
findDigit(arrayresult, 2);
export { findDigit };
