class Tree {
  // Properties member.
  age: number;
  height: number;
  alive: boolean;

  // Constructor member.
  constructor(age: number) {
    this.age = age;
  }
  // Methods member.
  calc(size: number): void {
    this.height = 0;

    if (size >= 1 && size <= 9) {
      this.height = size * 25;
      console.log("+++++++++1111++++++++", this.height);
    }
    if (size > 9 && size <= 20) {
      this.height = 9 * 25 + (size - 9) * 10;
      console.log("+++++++++2++++++++", this.height);
    }
    if (size > 20) {
      this.height = 225 + 110;
      console.log("+++++++++3++++++++", this.height);
    }
  }
}

const tree = new Tree(9);

tree.calc(19);

export { Tree };
