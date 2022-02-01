// Code the class here.

class Hero {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHi(say: string): string {
    return `I'm ${say}!`;
  }
}

const hello = new Hero("batman");
hello.sayHi("arnaud");
hello.sayHi("batman");

// Leave the line below for tests to work properly.
export { Hero };
