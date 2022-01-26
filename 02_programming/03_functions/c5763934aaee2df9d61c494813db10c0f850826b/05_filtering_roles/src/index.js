function filteredRoles(personarray, roles = "Teacher") {
  console.log(roles);
  if (roles === "Teacher") {
  }

  //console.log(personarray[0].role);
  //  console.log(personarray[1].role);

  // console.log(personarray[0].role);
  // console.log(roles);
  // console.log(personarray[0], personarray[1]);
}
const person2 = [
  {
    name: "Frieda",
    role: "Teacher",
  },
  {
    name: "John",
    role: "Student",
  },
];
//const person = ["Frieda", "Teacher"];

filteredRoles(person2, "Teacher");
//filteredRoles(person2);

//filteredRoles(person);

//function myFunction2(array){
// array[0]; // qui donnera "Arnaud"
//  ...
//}

//const persons = ["Arnaud", "Florian"];
//myFunction2(persons);

//filteredRoles(personarray[0].roles);

module.exports = filteredRoles;
