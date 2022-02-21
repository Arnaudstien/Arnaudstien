// Copy your function greetEveryone here
type ParamRest = string[];

export function greetEveryone(...args: ParamRest): void {
  args.forEach((element) => console.log("Welcome to", element));
  // Code your function here
}
greetEveryone();
