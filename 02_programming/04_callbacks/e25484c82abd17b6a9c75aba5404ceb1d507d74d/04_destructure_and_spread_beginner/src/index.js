let knowledge = {
  knowsJavascript: true,
  knowsTypescript: true,
  knowsReact: true,
  knowsNext: true,
  knowsMongoDB: true,
  timeSpent: "10 weeks",
};
let student = {
  hasComputer: true,
  knowsTypescript: false,
  knowsReact: false,
  knowsNext: false,
  knowsMongoDB: false,
  timeSpent: "4 days",
};
let developer = {
  ...knowledge,
  timeSpent: "10 weeks",
  ...student,

  // code here
};
console.log(developer);

let application = ["bug", "code", "code", "code", "code", "code", "code", "code", "code"];

let [bug, ...code] = application;

let [code] = [rest];

// code here

module.exports = {
  developer,
  bug,
  code,
};
