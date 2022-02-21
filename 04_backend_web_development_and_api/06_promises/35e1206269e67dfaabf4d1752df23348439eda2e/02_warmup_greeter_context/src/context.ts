import { greetEveryone } from "./greetEveryone";

type ParamRest = string[];
type CallbackType = (...restParam: ParamRest) => void;

export function contextFunction(callbackFunction: CallbackType, parameters: ParamRest): void {
  // Code your function here
  //console.log(callbackFunction("fffff"));
  console.log("we now  greet:");

  parameters.forEach((element) => console.log("Welcome to", element));
  //console.log(callbackFunction("We now greet:"));
  //console.log(parameters);
}
greetEveryone();
