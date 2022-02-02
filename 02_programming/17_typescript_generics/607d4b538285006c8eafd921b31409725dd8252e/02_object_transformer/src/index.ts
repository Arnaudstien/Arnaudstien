type Product = {
  productName: string;
  quantity: number;
};

//function productTransformer(params: Product): (string | number)[][] {

function productTransformer(params: Product): [string, string | number][] {
  //function productTransformer(params: Product): [string, (string | number)] {
  [
    ["productName", "Arnaud"],
    ["quantity", 43],
  ];
  //const array = Object.entries;
  //console.log(array);
  //return new Map(Object.entries(params));
  // console.log(Object.entries(params));

  return Object.entries(params);
}

// const testObject = {
//   productName: "Arnaud",
//   quantity: 43,
// };
// console.log(Object.entries(testObject));
// Leave the line below for tests to work properly.
export { productTransformer };
