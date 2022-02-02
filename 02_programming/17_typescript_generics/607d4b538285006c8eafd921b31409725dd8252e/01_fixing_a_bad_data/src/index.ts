//import { type } from "os";

const receivedObject = {
  a: "somestring",
  b: 42,
};
//console.log(receivedObject.a);
type ReceivedObject = {
  a: string;
  b: number;
};

function transformObject(elem: ReceivedObject): (string | number)[] {
  //console.log(Object.values(objet));

  return Object.values(elem);
}

//transformObject(receivedObject);
// Which in the end, is the same as:

//const transformObject = "coucou";

export { transformObject };
