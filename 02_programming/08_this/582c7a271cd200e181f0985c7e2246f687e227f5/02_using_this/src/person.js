const person = {
  firstname: "Abdel",
  lastname: "Sadki",
  age: 42,
  fullname: function () {
    return `${this.firstname} ${this.lastname}`;
  },
  name: "Abdel",
  lastn: "Sadki",
  age1: 42,
  introduceMyself: function () {
    return `Hello! I'm ${this.name} ${this.lastn} and I'm ${this.age1}.`;
  },
};
person.introduceMyself();

module.exports = person;
